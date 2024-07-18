const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();


const port = 5000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
const server = app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Llumigusin98*",
  database: "prueba",
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Conexión a la base de datos establecida");
});

app.get("/integracion_tablas", (req, res) => {
    const sql = "SELECT * FROM pacientes JOIN citas ON pacientes.id = citas.id JOIN medicos ON citas.id = medicos.id";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

// Rutas para la tabla 'pacientes'
app.get("/pacientes", (req, res) => {
//const sql = "SELECT * FROM prueba"; 
  const sql = "SELECT * FROM pacientes";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
// Busqueda de un paciente
app.get("/pacientes/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM pacientes WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});



app.post("/pacientes", (req, res) => {
  const nuevoPasiente = req.body;
  const sql = "INSERT INTO pacientes SET ?";
  db.query(sql, nuevoPaciente, (err, result) => {
    if (err) throw err;
    res.send("Paciente creado exitosamente");
  });
});

app.put("/pacientes/:id", (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;
  const sql = "UPDATE pacientes SET ? WHERE id = ?";
  db.query(sql, [datosActualizados, id], (err, result) => {
    if (err) throw err;
    res.send("Paciente actualizado exitosamente");
  });
});

app.delete("/pacientes/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM pacientes WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    res.send("Paciente eliminado exitosamente");
  });
});

// Rutas para la tabla 'medicos'
app.get("/medicos", (req, res) => {
    const sql = "SELECT * FROM medicos";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
  // Busqueda de un paciente
  app.get("/medicos/:id", (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM medicos WHERE id = ?";
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
  
  app.post("/medicos", (req, res) => {
    const nuevoMedico = req.body;
    const sql = "INSERT INTO medicos SET ?";
    db.query(sql, nuevoMedico, (err, result) => {
      if (err) throw err;
      res.send("Medico creado exitosamente");
    });
  });
  
  app.put("/medicos/:id", (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    const sql = "UPDATE medicos SET ? WHERE id = ?";
    db.query(sql, [datosActualizados, id], (err, result) => {
      if (err) throw err;
      res.send("Medico actualizado exitosamente");
    });
  });
  
  app.delete("/medicos/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM medicos WHERE id = ?";
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send("Medico eliminado exitosamente");
    });
  });
  
  /*------------------------------------------------ */
  // Rutas para la tabla 'consultorios'
app.get("/consultorios", (req, res) => {
    const sql = "SELECT * FROM consultorios";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
  // Busqueda de un paciente
  app.get("/consultorios/:id", (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM consultorios WHERE id = ?";
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
  
  app.post("/consultorios", (req, res) => {
    const nuevoConsultorio = req.body;
    const sql = "INSERT INTO consultorios SET ?";
    db.query(sql, nuevoConsultorio, (err, result) => {
      if (err) throw err;
      res.send("Consultorio creado exitosamente");
    });
  });
  
  app.put("/consultorios/:id", (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    const sql = "UPDATE consultorios SET ? WHERE id = ?";
    db.query(sql, [datosActualizados, id], (err, result) => {
      if (err) throw err;
      res.send("Consultorio actualizado exitosamente");
    });
  });
  
  app.delete("/consultorios/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM consultorios WHERE id = ?";
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send("Consultorio eliminado exitosamente");
    });
  });

    /*------------------------------------------------ */
  // Rutas para la tabla 'citas'
app.get("/citas", (req, res) => {
    const sql = "SELECT * FROM citas";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
  // Busqueda de un cita
  app.get("/citas/:id", (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM citas WHERE id = ?";
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
  
  app.post("/citas", (req, res) => {
    const nuevoCita = req.body;
    const sql = "INSERT INTO citas SET ?";
    db.query(sql, nuevoCita, (err, result) => {
      if (err) throw err;
      res.send("cita creado exitosamente");
    });
  });
  
  app.put("/citas/:id", (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    const sql = "UPDATE citas SET ? WHERE id = ?";
    db.query(sql, [datosActualizados, id], (err, result) => {
      if (err) throw err;
      res.send("Cita actualizado exitosamente");
    });
  });
  
  app.delete("/citas/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM citas WHERE id = ?";
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send("Cita eliminado exitosamente");
    });
  });