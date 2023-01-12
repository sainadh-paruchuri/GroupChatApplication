const express=require('express');
const userRoutes=require('./routes/user')
const bodyParser=require('body-parser')
const cors=require('cors')
const sequelize=require('./util/database')
const User=require('./model/user')
const Message=require('./model/message');
const messageRoutes=require('./routes/message');


const app=express()

app.use(cors())
app.use(bodyParser.json())
app.use(userRoutes)
app.use(messageRoutes);

User.hasMany(Message);
Message.belongsTo(User);

sequelize.sync()
.then((result) => {
    app.listen(4000)
}).catch((err) => {
    console.log(err);
});
