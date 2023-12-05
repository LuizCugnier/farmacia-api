--- CREATE ---
INSERT INTO farmacia (/* Colunas da tabela farmacia */) VALUES (/* Valores fornecidos em input */);

--- FIND ALL ---
SELECT * FROM farmacia;

--- FIND BY ID ---
SELECT * FROM farmacia WHERE id = [ID_FORNECIDO];

--- UPDATE ---
UPDATE farmacia
SET
  logradouro = COALESCE($1, logradouro),
  numero = COALESCE($2, numero),
  bairro = COALESCE($3, bairro),
  cidade = COALESCE($4, cidade),
  estado = COALESCE($5, estado)
WHERE id = $6;

--- DELETE ---
DELETE FROM farmacia WHERE id = [ID_FORNECIDO];
