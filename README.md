
# 📦 Desafio Técnico – API de Consulta de Créditos

Este projeto é uma aplicação full-stack composta por uma **API RESTful** em Spring Boot para consulta de créditos constituídos e um **front-end em Angular** para visualização dos dados. Todo o ambiente é containerizado com Docker.

---

## 🧰 Tecnologias usadas

- **Back-end:** Java 17, Spring Boot, JPA/Hibernate
- **Front-end:** Angular 16 + NGINX
- **Banco de dados:** PostgreSQL
- **Containerização:** Docker, Docker Compose
- **Testes:** JUnit 5, Mockito
- **Mensageria:** Kafca


## 📋 Pré-requisitos

Antes de iniciar, verifique se você tem instalado:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Como rodar o projeto

1. **Clone o repositório**

```bash
git clone https://github.com/ronalddmarks/consulta-creditos
cd consulta-creditos
```

2. **Suba os containers com Docker Compose**

```bash
docker-compose up --build
```

Este comando:
- Builda e sobe a API Spring Boot
- Builda e sobe o Front-end Angular com NGINX
- Sobe o banco de dados PostgreSQL com criação e carga de dados

---

## 🌐 URLs

| Serviço       | URL                                                    |
|---------------|--------------------------------------------------------|
| Front-end     | http://localhost:4200                                  |
| API (backend) | http://localhost:8080/api/creditos/credito/123456      |
| API (backend) | http://localhost:8080/api/creditos/7891011             |
| PostgreSQL    | localhost:5432                                         |
| Kafca         | localhost:9092                                         |

---

## 📡 Como visualizar mensagens Kafka

Para ver as mensagens publicadas no Kafka, execute o seguinte comando no terminal:

```bash
#Execute esse comando para listar todos os containers e descobrir o nome do container kafka.
docker ps

#Adicione o nome do container no lugar de 'nome_container' e execute o comando.
docker exec -it nome_container bash bash

#Execute esse comando para exibir o log do kafka.
kafka-console-consumer --bootstrap-server localhost:9092 --topic consulta-creditos --from-beginning

```

> Esse comando abre um consumidor Kafka que escuta o tópico e exibe as mensagens enviadas a partir do início.

## ✅ Testes

Para rodar os testes unitários.

Antes de iniciar, verifique se você tem instalado:

- [Java 17] – necessário para compilar a aplicação

- [Docker] - necessario levantar um container postgres.

```bash
#Execute esse comando para levantar um container docker postgres
docker run --name postgres-creditos -e POSTGRES_DB=creditodb -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:15

#Acesse o diretorio do projeto backend.
cd api-creditos
#Execute esse comando para rodar os testes.
./mvnw test
```

---

