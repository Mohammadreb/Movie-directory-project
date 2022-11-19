
//Express: For creating server & routes, basically express is used as middleware.
//body-Parser: To be able to read & display response in json form.

 

const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/', api);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));