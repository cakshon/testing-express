import express from 'express';

export const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('<h1>Express</h1>');
});

app.get('/api/greeting', (req, res) => {
  res.status(200).json({
    message: 'Hello, students!'
  });
});
