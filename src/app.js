import express from 'express'
import __dirname from './utils.js';

const app = express();
const PORT = process.env.PORT;
app.listen(PORT,()=>  console.log(`- Server running on port  => ${PORT} ✔ `))

app.use(express.static(__dirname+'/public'))

app.get('/', (req,res)=>{
    console.log("hiii")
    res.send(` Server running on port  => ${PORT} ✔ `)
})
