const router = require('express').Router();
const controllers = require('../controllers/messages_ctrl');

router.get('/inbox', controllers.getInbox);
router.post('/inbox', controllers.receiveMsg);

router.get('/sent', controllers.getSent);

router.get('/compose', controllers.getCompose);
router.post('/compose', controllers.sendMsg);

router.get('/view/:msgID', controllers.getDetails);


module.exports = router;