
const express = require('express');
const router = express.Router();


const controller = require("../Controllers/index");



router.get("/courses", controller.getAllCourses);


router.get("/courses/:id", controller.getAllCoursesById);

router.get("/courses/:title", controller.getAllCoursesByTitle);

router.get("/courses/:price",controller.getAllCoursesPrice );


module.exports = router;
