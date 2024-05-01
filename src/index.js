const {Teams} = require('pokemon-showdown');
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const port = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
    var pack = {packed: Teams.pack(set)};
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

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  console.log(`API is now live on ${port}`);
});