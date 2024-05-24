
import bodyParser from 'body-parser';
import pintureriaRoutes from './routes/pintureriaRoutes';
// server.ts
import express from 'express';

const expressApp = express();
const port = 3000;

export { expressApp, port };

const app = express();

app.use(bodyParser.json());
app.use('/api', pintureriaRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
