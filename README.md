# Mantine + Vite + React + TS + Hono Monorepo Template

- `packages/`
  - `client/`
    - [Mantine](https://mantine.dev/)
    - [React](https://react.dev/)
    - [Vite](https://vitejs.dev/)
    - [TanStack/Router](https://tanstack.com/router)
    - import `#` for shared types
  - `server/`
    - `src/`
      - [Hono](https://hono.dev), cors and dotenv
      - import `#` for shared types
  - `shared/`
    - `src/`
      - index.ts (define your shared types here)
      - utils.ts (some utils such as wait function)

## Credits

- [deniz's template](https://github.com/thealan404/template-fullstack)
