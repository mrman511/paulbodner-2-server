require('dotenv').config();

const Express = require('express');
const cors = require('cors');
const app = Express();

const BodyParser = require('body-parser');
const PORT = process.env.PORT || 8081;

const http = require('http');
const server = http.createServer(app);

const { Pool, Query } = require("pg");
const dbParams = require("./lib/db");
const db = new Pool(dbParams);
db.connect();
// const knowledgeRoutes = require('./routes/knowledge');
const projectRoutes = require('./routes/projects');

app.use(cors())


//app.use(express.static("public"));


// Express Configuration
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(Express.static('public'));

// data base routes
// app.use('/knowledge', knowledgeRoutes(db));
app.use('/projects', projectRoutes(db));

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on ${PORT}`)
})