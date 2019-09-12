const express = require('express');
const app = express();

app.get('/', (req, res) => {

	res.json({Name: "GL", Title: "Baller"});

});

app.listen(3000);
