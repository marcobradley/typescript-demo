# typescript-demo

Simple TypeScript API demo designed to run in Docker and be deployable to a local k3d cluster.

## API

- `GET /` returns a demo message
- `GET /healthz` returns health status

## Local development

```bash
npm install
npm run dev
```

## Build and run

```bash
npm run build
npm start
```

## Docker

```bash
docker build -t typescript-demo .
docker run --rm -p 3000:3000 typescript-demo
```
