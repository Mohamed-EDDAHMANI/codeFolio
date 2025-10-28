CodeFolio/
├─ package.json
├─ tsconfig.json
├─ .env
├─ .env.test               # env for testing
├─ .eslintrc.js
├─ .prettierrc
├─ nodemon.json
├─ Dockerfile
├─ docker-compose.yml      # for local dev DB (Postgres / Mongo)
├─ .github/
│  └─ workflows/
│     └─ ci.yml            # GitHub Actions CI/CD
├─ prisma/
│  ├─ schema.prisma
│  └─ migrations/
│
└─ src/
   ├─ server.ts
   ├─ app.ts
   ├─ index.graphql
   ├─ context/
   │  └─ index.ts
   ├─ graphql/
   │  ├─ schema.ts
   │  ├─ resolvers/
   │  │  ├─ user.resolver.ts
   │  │  └─ post.resolver.ts
   │  └─ scalars/
   │     ├─ date.scalar.ts
   │     └─ json.scalar.ts
   ├─ modules/
   │  ├─ user/
   │  │  ├─ user.model.ts
   │  │  ├─ user.service.ts
   │  │  └─ user.controller.ts
   │  └─ post/
   ├─ loaders/
   │  └─ userLoader.ts
   ├─ db/
   │  ├─ index.ts
   │  └─ seed.ts            # optional: to seed dev data
   ├─ utils/
   │  ├─ logger.ts
   │  └─ errorHandler.ts
   ├─ middlewares/
   │  └─ auth.ts
   ├─ types/
   │  └─ graphql.d.ts
   ├─ config/
   │  └─ index.ts
   └─ tests/
      ├─ integration/
      │  └─ user.test.ts
      └─ unit/
         └─ userService.test.ts
