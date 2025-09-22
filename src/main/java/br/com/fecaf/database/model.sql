CREATE DATABASE db_biblioteca;

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

SELECT * from livros;