const mySql = require('mysql');
//const db=require('./key');

//createConnection() -> objeto como parámetro
const mySqlConnect = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company'
    //max_connections: 15 

});

mySqlConnect.connect((err)=>{
    if(!err){
        console.log('OK CONNECTION DATABASE_POOL');   
        return;
    }else{
        console.log(`ERROR CONNECTION DATABASE_POOL -> ${err.message}`);
    }


});
    
module.exports=mySqlConnect;