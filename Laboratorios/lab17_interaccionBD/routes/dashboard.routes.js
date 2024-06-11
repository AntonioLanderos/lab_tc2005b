const express = require('express');
const router = express.Router();
const controller = require("../controllers/dashboard.controller.js")

router.get('/test_json', (req, res)=>{
    res.status(200).json({code: 200, msg: 'OK'});
});

router.get('/', controller.render_dashboard);
router.post('/create', controller.create_book);
router.post('/update', controller.update_book);
router.get('/view/:bookid', controller.view_book);


module.exports = router;