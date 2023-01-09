const Sequelize=require('sequelize')
const sequelize=new Sequelize('group_chat','root','root',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;