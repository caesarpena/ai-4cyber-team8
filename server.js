const express = require('express');
const path = require('path');
const app = express();
// app.use(express.static(__dirname + '/dist/ai-4cyber-team8-prod'));
app.use(express.static(__dirname + '/dist/ai-4cyber-team8-prod'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/ai-4cyber-team8-prod/index.html'));});
app.listen(process.env.PORT || 8080);