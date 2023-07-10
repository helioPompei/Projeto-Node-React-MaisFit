# App

GymPass style app.

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;

## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

# Notes

## Dev dependencies

- npm init -y
- npm i typescript @types/node tsx tsup -D
- npx tsc --init
- npm i prisma -D

## Prod dependencies

- npm i fastify
- npm i dotenv
- npm i zod
- npx prisma init / npx prisma generate / npx prisma migrate dev / npx prisma studio
- npm i @prisma/client

## Scripts

"scripts": {
"start": "node build/server.js",
"dev": "tsx watch src/server.ts",
"build": "tsup src --out-dir build"
}

## NPMRC

file: .npmrc
content: save-exact=true
description: Criar arquivo npmrc para fixar as versões de dependencias
