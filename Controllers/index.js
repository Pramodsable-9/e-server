 
const course = require("../Models/Courses.json");

exports.getAllCourses = (req, res) => {
    res.status(200).json(course);
}
exports.getAllCoursesById = (req, res) => {
    const id = req.params.id;
    const courseById = course.find(course => course.id == id);
    if (courseById){
        res.status(200).json(courseById); 

    } else {
        res.status(404).json({ message: "Course not found" });
    }
}

exports.getAllCoursesByTitle = (req, res) => {
    const title = req.params.title;
    const courseByTitle = course.filter((course) => course.title === title);
    if (courseByTitle.length > 0) { 
    res.status(200).json(courseByTitle);
}else{
    res.status(404).json({ message: "Course not found" });
    }
}

exports.getAllCoursesPrice = (req, res) => {
    const price = req.params.price;

    const courseByPrice = course.filter((course) => course.price === price);
    if (courseByPrice.length > 0) { 
    res.status(200).json(courseByPrice);
}else{ 
    (!courseByPrice) 
        res.status(404).json({ message: "Course not found" });
}
}
