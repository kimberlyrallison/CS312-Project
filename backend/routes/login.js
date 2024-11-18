const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
  try {
    var username = req.body.username;
    var password = req.body.password;

    const result = await db.query('SELECT * FROM public.credentials WHERE username = $1 AND password = $2', [username, password] );

    if(result.rowCount > 0) {
      req.session.user = username;
      res.status(200).send("OKAY");
    }
    else {
      res.status(401).send("Incorrect Username or Password");
    }
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
