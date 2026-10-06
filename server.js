import { app } from './app.js';

const port = process.env.PORT || 3000;

export const runningServer = app.listen(port, () => {
  console.log(`Example app listening at http://127.0.0.1:${port}`);
});
