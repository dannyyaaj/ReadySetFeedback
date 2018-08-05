const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Get data from server
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "feedback"
  ORDER BY "feedback".date;`;
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error => {
      console.log('Error selecting entries');
      res.sendStatus(500);
    }))
})

router.post('/', (req, res) => {
  const newFeedback = req.body;
  const queryText =  ``;
  pool.query()
})

module.exports = router;