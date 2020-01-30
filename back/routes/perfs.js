const express = require('express');
const router = express.Router();
const connection = require("../conf");


router.get('/', (request, response) => {
    connection.query('SELECT * from perf', (err, results) => {
     if (err) {
      response.status(500).send('Error retrieving performances');
     } else {
      response.json(results);
     }
   });
  })
  
  router.get('/:id', (request, response) => {
    connection.query('SELECT * from perf where id = ?', [request.params.id], (err, results) => {
     if (err) {
      response.status(500).send('Error retrieving perfs');
     } else {
      response.json(results);
     }
   });
  })


  router.post('/', (request, response) => {
    const {
      name,
      description,
      photo
    } = request.body;
  
    connection.query('INSERT INTO perf SET ?', 
      {name, description, photo}, (err, results) => {
        if (err) {
          console.log(err);
          response.status(500).send("Error saving a new perf");
        } else {
          response.status(200).send("New perf saved");
        }
      }); 
  });

  router.put('/:id', (request, response) => {
    const idPerf = request.params.id;
    const formData = request.body;
      connection.query('UPDATE perf SET ? WHERE id = ?', [formData, idPerf], err => {
      if (err) {
        console.log(err);
        response.status(500).send("Error editing the perf");
      } else {
        response.sendStatus(200);
      }
    });
  });

  module.exports = router