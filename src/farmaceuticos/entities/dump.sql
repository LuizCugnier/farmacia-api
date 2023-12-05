--- CREATE TABLE ---
CREATE TABLE farmaceutico (
  id SERIAL PRIMARY KEY,
  crf INTEGER UNIQUE,
  nome VARCHAR(255),
  data_nascimento DATE,
  carg_horaria INTEGER,
  farmaciaId INTEGER REFERENCES farmacia(id)
);