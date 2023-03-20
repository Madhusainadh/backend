const express = require('express')
const connect = require('./Config/Config')

const RoadDamage = require("./Router/RoadDamage.router")
const cors = require("cors");
const app = express()
app.use(express.json());

require('dotenv').config();

app.use(cors());
app.get('/', (req, res) => res.send('hello'))
app.use("/roaddamage",RoadDamage)

let PORT = process.env.PORT ||8080;

app.listen(PORT, () => {
  connect().then(()=>
  console.log('server started on port 8080')
  ).catch((err)=>console.log(err.message))
})