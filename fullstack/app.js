const express = require('express');
const app = express();
const productRouter = require('./controllers/productRouter');
const categoryRouter = require('./controllers/categoryRouter');

//static file path
app.use(express.static(__dirname + '/public'))

app.set('views', './src/views')

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index',{title:"Home Page"})
})

app.use('/product', productRouter);
app.use('/category', categoryRouter);
app.listen(3000, (err) => {
    if (err) throw err;
    console.log("running on 3000")
})