let express = require('express');
const port = process.env.PORT || 3000;
let app = express();
app.use(express.static("public"));
app.use("css", express.static(__dirname + "public/css"));
app.use('public', express.static(__dirname + "public"))
app.set("view engine", "ejs");
app.get("/", (req, res) => {

    console.log("not loaded")
    res.render('index', { title: "shahid" })
})




app.listen(port)