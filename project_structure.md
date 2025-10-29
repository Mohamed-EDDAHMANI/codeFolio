CodeFolio/
|
├─ .github/
│  └─ workflows/
│     └─ ci.yml                  # GitHub Actions CI/CD
├─ dist/                         # TypeScript build output
├─ prisma/
│  └─ schema.prisma
├─ UML/
│  ├─ diagramme.drawio
│  └─ useCase.drawio
├─ src/
│  ├─ index.ts                   # Bootstrap: connect DB, create app, listen
│  ├─ server.ts                  # Listen-only HTTP server
│  ├─ app.ts                     # Express + Apollo v5 setup
│  ├─ index.graphql
│  ├─ config/
│  │  └─ index.ts
│  ├─ context/
│  │  └─ index.ts
│  ├─ db/
│  │  └─ index.ts
│  ├─ graphql/
│  │  ├─ schema.ts
│  │  ├─ base.schema.ts
│  │  ├─ user.schema.ts
│  │  ├─ social.schema.ts
│  │  ├─ experience.schema.ts
│  │  ├─ competence.schema.ts
│  │  ├─ projet.schema.ts
│  │  ├─ formation.schema.ts
│  │  ├─ document.schema.ts
│  │  ├─ visitor.schema.ts
│  │  ├─ resolvers/
│  │  │  ├─ index.ts
│  │  │  ├─ user.resolver.ts
│  │  │  ├─ social.resolver.ts
│  │  │  ├─ experience.resolver.ts
│  │  │  ├─ competence.resolver.ts
│  │  │  ├─ projet.resolver.ts
│  │  │  ├─ formation.resolver.ts
│  │  │  ├─ document.resolver.ts
│  │  │  ├─ visitor.resolver.ts
│  │  │  └─ post.resolver.ts     # placeholder
│  │  └─ scalars/
│  │     ├─ date.scalar.ts
│  │     └─ json.scalar.ts
│  ├─ loaders/
│  │  └─ userLoader.ts
│  ├─ middlewares/
│  │  └─ auth.ts
│  ├─ models/
│  │  ├─ index.ts
│  │  ├─ user.model.ts
│  │  ├─ social.model.ts
│  │  ├─ experience.model.ts
│  │  ├─ competence.model.ts
│  │  ├─ projet.model.ts
│  │  ├─ formation.model.ts
│  │  ├─ document.model.ts
│  │  └─ visitor.model.ts
│  ├─ modules/
│  │  ├─ user/
│  │  │  ├─ user.model.ts
│  │  │  ├─ user.service.ts
│  │  │  └─ user.controller.ts
│  │  └─ post/
│  ├─ tests/
│  │  ├─ integration/
│  │  │  └─ user.test.ts
│  │  └─ unit/
│  │     └─ userService.test.ts
│  ├─ types/
│  │  ├─ apollo-server-express.d.ts
│  │  └─ graphql.d.ts
│  └─ utils/
│     ├─ logger.ts
│     └─ errorHandler.ts
├─ .dockerignore
├─ .env
├─ .env.test
├─ .eslintrc.js               # legacy (if present)
├─ .gitignore
├─ .prettierrc
├─ eslint.config.js           # ESLint v9 flat config
├─ nodemon.json
├─ package.json
├─ package-lock.json
├─ Dockerfile
├─ docker-compose.yml
└─ tsconfig.json