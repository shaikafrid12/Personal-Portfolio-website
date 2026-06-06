const express= require('express');
const router = express.Router();
const {getProjects , getProjectById} =require('../controllers/projectController');

router.route('/').get(getProjects);
router.route('/:id').get(getProjectById);
module.exports=router;