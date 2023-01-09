const express=require('express');
const userRoutes=require('./routes/user')
const bodyParser=require('body-parser')
const cors=require('cors')
const sequelize=require('./util/database')


const app=express()

app.use(cors())
app.use(bodyParser.json())
app.use(userRoutes)



sequelize.sync()
.then((result) => {
    app.listen(4000)
}).catch((err) => {
    console.log(err);
});
