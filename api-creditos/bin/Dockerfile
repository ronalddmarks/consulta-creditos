#Imagem temporaria para buildar o codigo
FROM openjdk:17-jdk-slim AS builder

WORKDIR /app

COPY pom.xml .
COPY mvnw .
COPY .mvn .mvn
COPY src ./src

RUN ./mvnw clean package -DskipTests

#Imagem final para levantar o codigo
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY --from=builder /app/target/creditos-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
