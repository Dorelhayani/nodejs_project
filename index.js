const express = require('express'); // אומר לקומפיילר תביא לי אקספרס
const port = 5252;
const app = express(); // משתמש באקספרס
app.use(express.json());


app.get("/",(req, res) => {
    res.sendFile("./views/index.html", {root:__dirname});
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});



