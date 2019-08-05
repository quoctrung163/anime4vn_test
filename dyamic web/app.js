// require modules
const express = require(`express`);
const app = express();
const path = require(`path`);

// define port
const port = 3000;

// require routes
const homeRoute = require(`./app/routes/home`);
const userRoute = require(`./app/routes/user`);
const authRoute = require(`./app/routes/auth`);

// using template enigne
app.set(`views`, `./views`);
app.set(`view engine`, `pug`);

// using static file
app.use(express.static(path.join(__dirname, `public`)));

// using routes
app.use(`/`, homeRoute);
app.use(`/user`, userRoute);
app.use(`/auth`, authRoute);

// app running on port
app.listen(port, () => {
    console.log(`app listen on port, ` + port);
});