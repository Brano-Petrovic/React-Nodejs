const express = require('express')
const cors = require('cors');
const app = express()
const fs = require('fs');

app.use(cors())
app.use(require("body-parser").json())


app.get('/', (req, res) => {
  let rawdata = fs.readFileSync('json_data/items.json');
  res.end(rawdata);
})

app.post('/save', (req, res) => {
  let data = JSON.parse(fs.readFileSync('json_data/data.json'));
  data.data.push(req.body)

  fs.writeFile('json_data/data.json', JSON.stringify(data), function (err) {
    if (err) throw err;
  });

  res.end(JSON.stringify(data));
})

app.listen(3001, () => {
  console.log(`Server listening at http://localhost:3001`)
})