# App

Gym MaisFit app.

## RFs (Requisitos funcionais)

### User

- [x] Deve ser possível se cadastrar o usuário;
- [x] Deve ser possível se autenticar o usuário;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter todos os nomes e ids de usuários;

### Avaliação Fisica

- [x] Deve ser possível cadastrar a Avaliação Fisica de um usuário;
- [x] Deve ser possível atualizar a Avaliação Fisica de um usuário;
- [x] Deve ser possível obter Todas as Avaliações Fisicas de todos os usuários;
- [x] Deve ser possível obter as Avaliações Fisicas de um usuário;

### Medidas musculares

- [x] Deve ser possível cadastrar Medidas musculares de uma Avaliação Fisica de um usuário;
- [x] Deve ser possível obter Medidas musculares de uma Avaliação Fisica de um usuário;
- [ ] Deve ser possível excluir Medidas musculares de uma Avaliação Fisica de um usuário;

### Fichas de treino

- [ ] Deve ser possível cadastrar a Ficha de treino de um usuário;
- [ ] Deve ser possível obter as Fichas de treino de um usuário;
- [ ] Deve ser possível atualizar a Ficha de treino de um usuário;

### Exercicios

- [ ] Deve ser possível cadastrar exercicios de uma ficha de um usuário;
- [ ] Deve ser possível obter exercicios de uma ficha de um usuário;
- [ ] Deve ser possível excluir exercicios de uma ficha de um usuário;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);

# Notes

## Front-End

## Prod dependencies

- npm i react-router-dom
- npm i axios
- npm i styled-components
- npm i react-redux
- npm i @reduxjs/toolkit
- npm i react-hook-form
- npm i zod
- npm i @hookform/resolvers
- npm i --save react-toastify

## Back-End

## Dev dependencies

- npm init -y
- npm i typescript @types/node tsx tsup -D
- npx tsc --init
- npm i prisma -D
- npm i @fastify/cookie
- npm i @fastify/cors

## Prod dependencies

- npm i fastify
- npm i dotenv
- npm i zod
- npx prisma init
  / npx prisma generate
  / npx prisma migrate dev
  / npx prisma studio
  / npx prisma migrate dev --name init
- npm i @prisma/client
- npm i jsonwebtoken

## Scripts

"scripts": {
"start": "node build/server.js",
"dev": "tsx watch src/server.ts",
"build": "tsup src --out-dir build",
"test": "vitest run"
}

## NPMRC

- file: .npmrc
- content: save-exact=true
- description: Criar arquivo npmrc para fixar as versões de dependencias
