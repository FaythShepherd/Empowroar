require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const {Sequelize} = require('sequelize');

const {PORT, CONNECTION_STRING} = process.env

// const {SERVER_PORT} = process.env
const {seed, contactDisplay} = require('./seed.js');
const res = require('express/lib/response');
const { INSERT } = require('sequelize/types/query-types.js');
//const{} functions you need go here ie getUser getComment = require blah blah

//MIDDLE WARE
app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(CONNECTION_STRING, { 
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});

sequelize.authenticate()
.then(() => {

    // app.get("/api/users", (req, res) => {
//     let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
//     res.status(200).send(friends);
//   });

// functions like GET POST, routes
app.post("/api/names", (req, res) => {
    //console.log(req.body)
res.status(200).send(req.body.name)
}
)

app.post("/api/first", (req, res) => {
    console.log(req.body)
res.status(200).send(req.body.first)
})

app.delete("/api/names", (req, res) => {
    console.log(req.body)
    res.status(200).send('')
})

app.get("/api/data", contactDisplay)

app.post("/api/first", async (req, res) => {

// const

//    await sequelize.query(
//         insert into users (
//             user_name,
//             user_password,
//             user_first_name
//         ) values (
//             'Fay',
//             '1234',
//             'Fayth'
//         );
//     )
//     console.log(req.body)
// res.status(200).send(req.body.first)
})



app.listen(5501, () => console.log("server running"));

})

