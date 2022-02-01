// 1. IMPORTACIONES
const express		= require("express")
const router		= express.Router()


// 2. RUTEO
router.get("/", (req, res) => {
	res.send("hola mundo")
})

// 3. EXPORTACIÓN
module.exports = router