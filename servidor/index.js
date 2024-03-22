const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const PORT = 3001;

// Sincronización de modelos de sequelize con la base de datos
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Corriendo en ${PORT}`);
  });
});
