const express=require('express');
const app= express();
const path=require('path');
const request= require('request');



app.use(express.static(path.join(__dirname,'public'))) ;


/*app.get('/senderos',(request,response )=>{
response.sendFile(path.join(__dirname,'datos.json'));

});
app.get('/talleres',(request,response )=>{
response.sendFile(path.join(__dirname,'talleres.json'));

});
app.get('/estacionamientos',(request,response )=>{
response.sendFile(path.join(__dirname,'estacionamientos.json'));

});
*/
app.get('/',(request,response )=>{
response.sendFile(path.join(__dirname,'public/index.html'));

});

app.listen(8010,()=>{

	console.log('servidor iniciado!!!');


});