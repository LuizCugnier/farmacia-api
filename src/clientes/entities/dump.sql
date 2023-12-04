--- CREATE TABLE ---
CREATE TABLE cliente (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255),
  idade INTEGER,
  cpf BIGINT UNIQUE,
  logradouro VARCHAR(255),
  numero INTEGER,
  bairro VARCHAR(255),
  cidade VARCHAR(255),
  estado VARCHAR(255),
  telefones VARCHAR(255)[]
);
