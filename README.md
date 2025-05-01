
# 📦 Desafio Técnico – API de Consulta de Créditos

Este projeto é uma aplicação full-stack composta por uma **API RESTful** em Spring Boot para consulta de créditos constituídos e um **front-end em Angular** para visualização dos dados. Todo o ambiente é containerizado com Docker.

---

## 🧰 Tecnologias usadas

- **Back-end:** Java 17, Spring Boot, JPA/Hibernate
- **Front-end:** Angular 16 + NGINX
- **Banco de dados:** PostgreSQL
- **Containerização:** Docker, Docker Compose
- **Testes:** JUnit 5, Mockito


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

---
