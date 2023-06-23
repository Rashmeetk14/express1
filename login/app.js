const express = require('express');
const app = express();

const studentRouter = express.Router('../student');
const teacherRouter = express.Router('../teacher');

app.use('/student', studentRouter);
app.use('/teacher', teacherRouter);

app.listen(3000, ()=>{
    console.log("server started on port")
})










