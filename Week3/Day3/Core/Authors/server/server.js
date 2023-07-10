const express = require("express");
const app = express();
const cors = require("cors")


require('dotenv').config()

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())

const port = process.env.PORT

require("./config/mongoose.config")

require("./routes/author.routes")(app) 

app.listen( port, () => console.log(`Listening on port: ${port}`) );