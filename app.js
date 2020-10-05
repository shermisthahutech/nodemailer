const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
app.set('view engine', 'handlebars');
// View engine setup
app.engine('handlebars', exphbs({ layoutsDir: __dirname + '/views' }));


// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.render('contact');
});

app.listen(8000, () => console.log('server started!!!!!'));