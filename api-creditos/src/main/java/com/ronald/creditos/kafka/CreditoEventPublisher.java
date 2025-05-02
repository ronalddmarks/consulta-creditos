package com.ronald.creditos.kafka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class CreditoEventPublisher {

    private static final String TOPICO = "consulta-creditos";

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    public void publicarConsulta(String mensagem) {
        kafkaTemplate.send(TOPICO, mensagem);
    }
}
