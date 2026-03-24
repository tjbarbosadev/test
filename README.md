# test

## Features adicionadas ate agora

- Projeto Node.js com TypeScript para estudo de testes automatizados
- Configuracao do Jest com `ts-jest` e ambiente de teste `node`
- Script de execucao de testes com `npm test`
- Script de execucao em watch mode com `npm run test:dev`
- Primeiro exemplo de teste unitario para funcao de soma
- Estruturacao de suite com `describe`, `test` e `it`
- Uso de hooks de ciclo de vida com `beforeAll` e `afterAll`
- Primeiro teste E2E com `supertest` para rota `GET /products`
- Dependencias e tipos instalados para testes com TypeScript (`jest`, `ts-jest`, `@types/jest`, `supertest`, `@types/supertest`)

## Dicas de Estudo - Testes Automatizados

### O que e

Este modulo tem 18 aulas (59:08) sobre testes automatizados em Node.js com TypeScript e Jest.
O foco vai de configuracao inicial ate testes E2E.

### Por que existe

Testes existem para garantir que o codigo continua funcionando quando voce altera alguma parte.
Eles ajudam a encontrar erros cedo e trazem seguranca para evoluir o projeto.

### Para que serve

Ao concluir esse conteudo, a meta e conseguir:

- Criar projeto Node.js com TypeScript para testes
- Configurar Jest do zero
- Executar um teste especifico e usar watch mode
- Escrever testes unitarios organizados com `describe` e `it`
- Usar `beforeAll` e `afterAll` para preparo e limpeza
- Criar e validar testes E2E de rotas

### Exemplo pratico

Imagine uma rota `POST /users`:

- Sem teste: uma mudanca pode quebrar o cadastro sem voce perceber
- Com teste E2E: o teste faz a requisicao real e valida o retorno
- Se algo quebrar, o erro aparece na hora

### Plano simples de estudo

- Bloco 1 (aulas 1 a 8): fundamentos, setup e execucao de testes
- Bloco 2 (aulas 9 a 14): escrita e organizacao de testes unitarios
- Bloco 3 (aulas 15 a 18): testes E2E, execucao e validacao ponta a ponta
- Regra de ouro: reproduza os codigos no mesmo dia de cada aula
- Revisao final: refaca 1 teste unitario e 1 E2E sem consultar material
