const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send("Hello there!");
  });

app.get('/again', async (req, res) => {
	res.json({msg: 'it all worked!'});
})