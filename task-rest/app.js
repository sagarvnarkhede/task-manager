var express = require("express");
//var  cors  =  require('cors');
var app = express();

var taskList = [
    
]


app.use(express.json())
//app.use(cors)
app.listen(3000, () => {
 console.log("Server running on port 3000");
});


app.get("/task", (req, res, next) => {
    res.status(200).json(taskList);
});

app.post("/task", (req, res, next) => {
    taskList.push(req.body);
    return res.status(200).json({
        message: "List Created Successfully"
    });
});
app.put("/taskList", (req, res, next) => {
    taskList = req.body;
    return res.status(200).json({
        message: "List updated Successfully"
    });
});

app.post("/card", (req, res, next) => {
    let listName = req.body.name;
    taskList.forEach(function(obj){
        if(obj.name === listName){
            obj.data.push(req.body.card);
        }
    })
    return res.status(200).json({
        message: "Card Added Successfully"
    });
});
app.delete("/card", (req, res, next) => {
    taskList.push(req.body);
    return res.status(200).json({
        message: "List Created Successfully"
    });
});