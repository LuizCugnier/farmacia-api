--- CREATE ---
INSERT INTO farmaceutico (/* colunas da tabela */) VALUES (/* valores fornecidos em input */);

--- FIND ALL ---
SELECT * FROM farmaceutico;

--- FIND BY ID ---
SELECT * FROM farmaceutico WHERE id = [ID_FORNECIDO];

--- UPDATE ---
UPDATE farmaceutico
SET
  crf = COALESCE($1, crf),
  nome = COALESCE($2, nome),
  data_nascimento = COALESCE($3, data_nascimento),
  carg_horaria = COALESCE($4, carg_horaria)
WHERE id = $5;

--- DELETE ---
DELETE FROM farmaceutico WHERE id = [ID_FORNECIDO];