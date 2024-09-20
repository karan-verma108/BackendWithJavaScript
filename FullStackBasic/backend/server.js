import dotEnv from 'dotenv';
import cors from 'cors';
dotEnv.config();
import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is ready!');
});

app.get('/jokes', (req, res) => {
  const jokesArr = [
    {
      id: 1,
      title: 'first joke',
      content: 'this is the first joke',
    },
    {
      id: 2,
      title: 'second joke',
      content: 'this is the second joke',
    },
    {
      id: 3,
      title: 'third joke',
      content: 'this is the third joke',
    },
    {
      id: 4,
      title: 'fourth joke',
      content: 'this is the fourth joke',
    },
    {
      id: 5,
      title: 'fifth joke',
      content: 'this is the fifth joke',
    },
  ];

  res.send(jokesArr);
});

app.listen(PORT, () => {
  console.log('Server is running at port', PORT);
});
