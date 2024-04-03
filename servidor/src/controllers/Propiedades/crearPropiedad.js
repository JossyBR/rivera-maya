const { Propiedad } = require("../../db");

const crearPropiedad = async (req, res) => {
  try {
    const { nombre, descripcion, maxHuespedes, image } = req.body;

    if (!id || !nombre || !descripcion || !maxHuespedes) {
      res.status(400).json({ msg: "Faltan campos obligatorios." });
    }

    const propiedadExiste = await Propiedad.findByPk(id);
    if (propiedadExiste) throw new Error("La propiedad ya existe.");
    const nuevaropiedad = await Propiedad.create({
      id,
      nombre,
      descripcion,
      maxHuespedes,
    });
    res.status(201).json(nuevaropiedad);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al crear la proiedad",
      error,
    });
  }
};

module.exports = crearPropiedad;