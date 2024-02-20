const express = require('express');
const app = express();
const port = 3080;


app.get('/', (req, res) => {
  res.send('pong');
});


if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
