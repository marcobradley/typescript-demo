import express from 'express';

const app = express();
const port = Number(process.env.PORT ?? '3000');

app.get('/healthz', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'TypeScript API demo is running' });
});

app.listen(port, () => {
  console.log(`TypeScript API demo listening on port ${port}`);
});
