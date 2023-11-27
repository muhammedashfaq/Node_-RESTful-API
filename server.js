const express =  require("express")
const app = express ()
require("dotenv").config()
const cors = require("cors")

const contactRoutes = require("./Routes/contacRoutes")
const mongoDB = require("./config/mongoos")
mongoDB()

app.use(cors())
app.use(express.json())
app.use('/', contactRoutes )

const port =  5000

app.listen(port,()=>console.log(`server connected on ${port}`))