const {Router} = require('express');
const { writeProfile } = require('../controllers/writeProfile');
const {downloadFile} = require('../controllers/downloadFile');

const router = Router();

router.post('/saveFile', writeProfile);
router.get('/download', downloadFile);
module.exports = router;