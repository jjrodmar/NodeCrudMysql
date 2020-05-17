const express = require('express');
const router = express.Router();

const conectMysql = require('../dataBase/database');

//GET ALL
router.get('/', (req, res)=>{
    conectMysql.query('select * from employees', (err, rows, fields) => 
        err ? console.log(`ERROR SELECT * -> ${err.message}`) : res.json(rows)
    );
});

//GET WITH ID
router.get('/:id', (req, res)=>{
    const {id} = req.params;
    if(!isNaN(parseInt(id))){
        conectMysql.query(`select * from employees where id=?`, [id],  (err, rows, fields)=>{
            err ? console.log(`ERROR SELECT WHERE ID -> ${err.message}`) : res.json(rows);
        });
    }
});

//CREATE
router.post('/', (req, res)=>{
    const {name, salary} = req.body;
    const QUERY = `insert into employees (name, salary) values ('${name}', ${salary});`
    conectMysql.query(QUERY, (err, rows, fields)=>{
        err ? console.log(`ERROR INSERT -> ${err.message}`) : res.json({"status": "Correct Insert"});
    });
});

//DELETE
router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    if(!isNaN(parseInt(id))){
        conectMysql.query(`delete from employees where id=?`, [id],  (err, rows, fields)=>{
            err ? console.log(`ERROR DELETE -> ${err.message}`) : res.json({"status": "Correct Delete"});
        });
    }
});

//UPDATE
router.put('/:id', (req, res)=>{
    const {id} = req.params;
    const {name, salary} = req.body;
    console.log(req.body);
    console.log(id);
    const QUERY = `update employees set name='${name}', salary=${salary} where id=${id}`;
    if(!isNaN(parseInt(id))){
        conectMysql.query(QUERY,  (err)=> 
            err ? console.log(`ERROR UPDATE -> ${err.message}`) : res.json({"status": "Correct Update"}));
    }
});

module.exports=router;

