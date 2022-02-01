// ./index.js

// 1. IMPORTACIONES
const express 			= require("express")
const app				= express()
const hbs               = require("hbs")


// 2. MIDDLEWARES
require("dotenv").config()

app.use(express.static("public"))

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")

// 3. RUTAS
app.use("/", require("./routes/index"))



// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log("Servidor activo")
})