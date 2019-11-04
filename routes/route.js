var express = require('express');
var router = express.Router();
function requireRoute(path){
    return require("../api/"+path+"/route");
}


router.use('/booking', requireRoute('booking'))
router.use('/customer', requireRoute('customer'))























module.exports = router;