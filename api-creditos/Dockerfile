#Imagem temporaria para buildar o codigo
FROM maven:3.9.5-eclipse-temurin-17 AS build

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

#Imagem final para levantar o codigo
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY --from=build /app/target/creditos-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
