const { Router } = require("express");
const propiedadRouter = Router();

const crearPropiedad = require("../../controllers/Propiedades/crearPropiedad");

propiedadRouter.post("/", crearPropiedad);

module.exports = propiedadRouter;
