--- CREATE TABLE ---
CREATE TABLE farmacia (
  id SERIAL PRIMARY KEY,
  logradouro VARCHAR(255),
  numero INTEGER,
  bairro VARCHAR(255),
  cidade VARCHAR(255),
  estado VARCHAR(255)
);
