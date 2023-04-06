const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const authentication = require('./routes/authentication');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({origin: process.env.CLIENT, credentials: true}));
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: process.env.SESSION_SECRET
}));
app.use(authentication);

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});