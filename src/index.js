const express = require('express');

const app = express();
const morgan = require('morgan');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.get('/', (req, res) => {
    res.json({"Titulo": "Hello World"});
})

// Empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});