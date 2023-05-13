import app from './app.js';

async function main() {
  try {
    app.listen(3000);
    console.log('Server is listening on port', 3000);
  } catch (error) {
    console.log('Unable to connect to database: ', error);
  }
}

main();

