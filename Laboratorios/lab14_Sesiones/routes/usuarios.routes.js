const express = require('express');
const router = express.Router();
const controller = require("../controllers/usuarios.controller.js");

router.get('/test_json', (req, res)=>{
    res.status(200).json({code: 200, msg: 'OK'});
});

router.get('/login', controller.render_login);
router.post('/login', controller.do_login);

module.exports = router;