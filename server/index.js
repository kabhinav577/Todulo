import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import db from './config/db.js';
import routes from './routes/index.js';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Use the todosRouter for '/api/tasks' routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
