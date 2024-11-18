const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
  try {
    var username = req.body.username;
    var password = req.body.password;

    const result = await db.query('SELECT * FROM public.credentials WHERE username = $1', [username] );
    console.log(result)

    if(result.rowCount > 0) {
      res.status(401).send("Username already associated with an account");
    }
    else {
      await db.query('INSERT INTO credentials (username, password) VALUES ($1, $2)', [username, password]);
      res.status(200).send("OKAY");
    }
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
