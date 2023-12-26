/* Modules */
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { redirectToHTTPS } = require('express-http-to-https');

/* Files Imports & Variables */
const errorsController = require('./controllers/errors');
const PORT = process.env.PORT || 3000;
const app = express();

/* Middlewares */
app.use(morgan('dev'));
app.use(redirectToHTTPS([/localhost:(\d{4})/]));

/* EJS Template Engines */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

/* Routes */
app.use('/fontawesome', express.static(path.join(__dirname, "node_modules", "@fortawesome", "fontawesome-free")));
app.use(express.static(path.join(__dirname, "public")));
app.use('/', require('./routes/pages'));

/* Errors Handling */
app.use(errorsController.get404);

/* Server */
app.listen(PORT, () => console.log(`Started on port ${PORT}.`));