const mySql = require('mysql');
const dbKey=require('./key');

const pool = mySql.createPool(dbKey);

pool.getConnection((err, conn)=>{
    if(conn && !err){
        conn.release(); 
        console.log('OK CONNECTION DATABASE_POOL');   
        return;
    }else{
        console.log(`ERROR CONNECTION DATABASE_POOL -> ${err.message}`);
    }
});

module.exports=pool;