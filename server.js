const express = require("express");

const app = express();
const PORT = 3000;

app.set('view engine','hbs');
app.set('views','views');

const friendRouter = require("./routes/friends.route");
const picRouter = require("./routes/pics.route");

app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}/${req.url} ${delta}`)
});

app.use(express.json()); // it converts incoming json to a js object and add js objects to req in req.body

app.get('/',(req,res)=>{
    res.render('index',{
        title:'Home page',
        name:'Roni',
    });
});
app.use('/friends',friendRouter);

app.use('/pics',picRouter);

app.listen(PORT,()=>{
    console.log(`Server is Strating at port : ${PORT}`);
});