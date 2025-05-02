package com.ronald.creditos.service;

import java.util.List;
import java.util.stream.Collectors;

import org.apache.kafka.common.KafkaException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ronald.creditos.DTO.CreditoDTO;
import com.ronald.creditos.exception.ResourceNotFoundException;
import com.ronald.creditos.kafka.CreditoEventPublisher;
import com.ronald.creditos.model.Credito;
import com.ronald.creditos.repository.CreditoRepository;

@Service
public class CreditoService {

    @Autowired
    private CreditoRepository creditoRepository;

    @Autowired
    private CreditoEventPublisher publisher;

    public CreditoDTO buscarCreditoPorNumero(String numeroCredito) {
        Credito credito = creditoRepository.findByNumeroCredito(numeroCredito)
                .orElseThrow(() -> new ResourceNotFoundException("Crédito não encontrado"));

        // publica mensagem no kafika, try catch caso o servidor kafika esteja fora ou demore a levantar exibe o erro.
        try {
            publisher.publicarConsulta("Consulta por número de crédito: " + numeroCredito);
        } catch (KafkaException e) {
            System.err.println("Erro ao publicar no Kafka: " + e.getMessage());
        } catch (Exception e) {
            System.err.println("Erro inesperado ao publicar no Kafka: " + e.getMessage());
        }
        
        return CreditoDTO.fromEntity(credito);
    }

    public List<CreditoDTO> buscarCreditosPorNumeroNfse(String numeroNfse) {
        List<Credito> creditos = creditoRepository.findByNumeroNfse(numeroNfse);

        // publica mensagem no kafika, try catch caso o servidor kafika esteja fora ou demore a levantar exibe o erro.
        try {
            publisher.publicarConsulta("Consulta por número de NFS-e: " + numeroNfse);
        } catch (KafkaException e) {
            System.err.println("Erro ao publicar no Kafka: " + e.getMessage());
        } catch (Exception e) {
            System.err.println("Erro inesperado ao publicar no Kafka: " + e.getMessage());
        }
        
        return creditos.stream().map(CreditoDTO::fromEntity).collect(Collectors.toList());
    }
}
