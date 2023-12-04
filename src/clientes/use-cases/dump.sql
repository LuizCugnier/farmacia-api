--- CREATE ---
INSERT INTO cliente (/* colunas da tabela */) VALUES (/* valores fornecidos em input */);

--- FIND ALL ---
SELECT * FROM cliente;

--- FIND BY ID ---
SELECT * FROM cliente WHERE id = [ID_FORNECIDO];

--- UPDATE ---
UPDATE cliente
SET
  nome = COALESCE($1, nome),
  idade = COALESCE($2, idade),
  cpf = COALESCE($3, cpf),
  logradouro = COALESCE($4, logradouro),
  numero = COALESCE($5, numero),
  bairro = COALESCE($6, bairro),
  cidade = COALESCE($7, cidade),
  estado = COALESCE($8, estado)
WHERE id = $9;

--- DELETE ---
DELETE FROM cliente WHERE id = [ID_FORNECIDO];