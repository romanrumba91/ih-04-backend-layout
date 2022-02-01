// 1. IMPORTACIONES
const express		= require("express")
const router		= express.Router()


// 2. RUTEO
router.get("/", (req, res) => {
	res.render("index")
})
router.get("/players", (req, res) => {
	res.render("players")
})
router.get("/teams", (req, res) => {
	res.render("teams")
})

// 3. EXPORTACIÓN
module.exports = router