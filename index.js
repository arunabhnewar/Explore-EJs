// Dependencies
const express = require('express');



// App Initialize
const app = express();
app.set('view engine', "ejs")


app.get('/', (req, res) => {

    const Arr = [{
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": true
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    }
    ];


    res.locals.myName = "Bruno Farnandez"
    res.render("home/index", { title: "Ejs is fucking awesome!!", Arr })
})



// Server Listen
app.listen(3000, () => {
    console.log("Server is fucking running on port" + " " + 3000);
})