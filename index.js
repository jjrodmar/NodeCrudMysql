
const express = require('express');
const app = express();

//process.env.PORT -> buscar una variable de entorno que se llame PORT
app.set('PORT', process.env.PORT || 8000);

app.use(express.json());

//Aquí elegimos si utilizamos la conexeción con pool o no
app.use(require('./src/routes/employeeRoutes'));
//app.use(require('./src/routes/employessRoutesPool'));


app.listen(app.get('PORT'), ()=>{
    console.log(`SERVER IN PORT ${app.get('PORT')}`);
});
