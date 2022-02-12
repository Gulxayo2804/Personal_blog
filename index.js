const express = require('express')
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/blog_side';
const methodOverride = require('method-override');

mongoose.connect(mongoURL,{
       useNewUrlParser: true,
       useUnifiedTopology: true
})
.then(()=>{
    console.log(`Mongodb is running`);
})

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/article/create', (req,res)=>{
    res.render('create')
})

app.use('/article', require('./routes/article'));

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
}) 