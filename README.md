
# Sistema de Gerenciamento de Biblioteca

## Descrição
Este sistema é uma aplicação **Spring Boot (Java)** com integração a **MySQL** para gerenciamento de livros de uma biblioteca municipal.  
O sistema permite **CRUD completo** (Cadastrar, Listar, Atualizar e Excluir livros) e possui um **frontend em HTML + JavaScript** integrado ao backend.

---

## Tecnologias Utilizadas
- **Java 17**
- **Spring Boot 3.x**
- **Spring Data JPA (Hibernate)**
- **MySQL**
- **HTML + CSS + JavaScript**

---

## Estrutura do Projeto
```
Projeto-Case/
├── src/main/java/br/com/fecaf
│   ├── ProjetoCaseApplication.java
│   ├── model/Livro.java
│   ├── repository/LivroRepository.java
│   └── controller/LivroController.java
│
├── src/main/resources/
│   ├── application.properties
│   └── static/ (frontend)
│       ├── index.html
│       ├── script.js
│       └── style.css
│
└── pom.xml
```

---

## Pré-requisitos
- **Java 17** ou superior instalado.
- **Maven** instalado.
- **MySQL** instalado e rodando.

---

## Configuração do Banco de Dados
1. Criar o banco de dados no MySQL:
   ```sql
   CREATE DATABASE db_biblioteca;
   ```
2. Criar a tabela e inserir dados iniciais:
   ```sql
   USE db_biblioteca;

   CREATE TABLE livros (
       id BIGINT AUTO_INCREMENT PRIMARY KEY,
       titulo VARCHAR(255) NOT NULL,
       autor VARCHAR(255) NOT NULL,
       isbn VARCHAR(50) NOT NULL,
       ano INT NOT NULL,
       quantidade INT NOT NULL
   );

   INSERT INTO livros (titulo, autor, isbn, ano, quantidade) VALUES
   ('Dom Casmurro', 'Machado de Assis', '978-85-359-0277-3', 1899, 5),
   ('O Hobbit', 'J.R.R. Tolkien', '978-0-261-10221-7', 1937, 3),
   ('1984', 'George Orwell', '978-0-452-28423-4', 1949, 4),
   ('A Revolução dos Bichos', 'George Orwell', '978-0-452-28424-1', 1945, 6),
   ('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', '978-85-359-0278-0', 1943, 7);
   ```

3. Configurar o arquivo `application.properties`:
   ```properties
spring.datasource.url=jdbc:mysql://localhost:3306/db_biblioteca?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=123456789
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

server.port=8080
   ```

---

## Como Executar
1. Entre na pasta do projeto:
   ```bash
   cd Projeto-Case
   ```
2. Execute o backend:
   ```bash
   mvn spring-boot:run
   ```
3. Abra o navegador e acesse:
   ```
   http://localhost:8080/
   ```

---

## Funcionalidades
- **Cadastrar** livros informando título, autor, ISBN, ano e quantidade.  
- **Listar** todos os livros cadastrados em uma tabela.  
- **Editar** um livro existente.  
- **Excluir** livros cadastrados.  


