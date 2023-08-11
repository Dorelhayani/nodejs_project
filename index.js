const express = require('express'); // אומר לקומפיילר תביא לי אקספרס
const port = 5252;
const app = express(); // משתמש באקספרס
app.use(express.json());

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


let AllData = [] ;
app.get("/List",(req, res) => {
    res.send(AllData).json();
});


// יצירת פניה שמוסיפה נתון ל data base (הוספת איש בודד לטבלה)
app.post("/Add",(req, res) => {
    let line={};
    line.name = req.body.name;
    line.phone = req.body.phone;
    line.MAILBOX = req.body.MAILBOX;
    AllData.push(line);
    res.send(AllData).json();
    res.send("Ready to Add EndPoint");
});

// הוספת 2 אנשים לטבלה
app.post("/Add2",(req, res) => {
    let line={};
    line.name = req.body.name;
    line.phone = req.body.phone;
    line.MAILBOX = req.body.MAILBOX;
    AllData.push(line);
    line={};
    line.name = req.body.name_2;
    line.phone = req.body.phone_2;
    line.MAILBOX = req.body.MAILBOX;
    AllData.push(line);
    // res.send(AllData).json();
    res.send("Ready to Add EndPoint");
});

// הצגת מספר הפורט העדכני
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});
//


















// פנייה אל התיקיה והצגת הטקסט
app.post("/add3",(req, res) => {
    res.sendFile("./views/spa_main.html", {root:__dirname});
});
//






