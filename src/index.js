const {Teams} = require('pokemon-showdown');
const express = require('express');
const app = express();
const port = 5000;

app.get('/export_to_json', (req, res) => {
    var q = req.query;
    var imp = q['import'].replaceAll("|","\n");
    console.log(imp);
    var set = Teams.import(imp);
    res.send(set);
    console.log(set);
})

app.get('/export_to_packed', (req, res) => {
    var q = req.query;
    var imp = q['import'].replaceAll("|","\n");
    console.log(imp);
    var set = Teams.import(imp);
    var pack = Teams.pack(set);
    res.send(pack);
    console.log(pack);
})

app.get('/packed_to_json', (req, res) => {
    var q = req.query;
    var imp = q['import'];
    console.log(imp);
    var set = Teams.unpack(imp);
    res.send(set);
    console.log(set);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})