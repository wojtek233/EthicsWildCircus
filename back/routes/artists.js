const express = require('express');
const router = express.Router();
const connection = require("../conf");


router.get('/', (request, response) => {
    connection.query('SELECT * from artist', (err, results) => {
     if (err) {
      response.status(500).send('Error retrieving artists');
     } else {
      response.json(results);
     }
   });
  })
  
  router.get('/:id', (request, response) => {
    connection.query('SELECT * from artist where id = ?', [request.params.id], (err, results) => {
     if (err) {
      response.status(500).send('Error retrieving artists');
     } else {
      response.json(results);
     }
   });
  })


  router.post('/', (request, response) => {
    const {
      firstname,
      lastname,
      photo,
      description,
      perf_id
    } = request.body;
  
    connection.query('INSERT INTO artist SET ?', 
      {firstname, lastname, photo, description, perf_id}, (err, results) => {
        if (err) {
          console.log(err);
          response.status(500).send("Error saving a new artist");
        } else {
          response.status(200).send("New artist saved");
        }
      }); 
  });

  router.put('/:id', (request, response) => {
    const idArtist = request.params.id;
    const formData = request.body;
      connection.query('UPDATE artist SET ? WHERE id = ?', [formData, idArtist], err => {
      if (err) {
        console.log(err);
        response.status(500).send("Error editing the artist");
      } else {
        response.sendStatus(200);
      }
    });
  });

  module.exports = router