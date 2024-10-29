const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); // For JSON data


app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('public'));


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send('Success!');
});

app.get('/download', (req, res) => {
    res.download('./public/image.jpg'); 
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});