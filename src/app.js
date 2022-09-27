import express from 'express'

const app = express();
const PORT = process.env.PORT;
app.listen(PORT, ()=>  console.log(`- Server running on port  => ${PORT} ✔ `))

app.get('/', (req,res)=>{
    console.log("hiii")
    res.send(` Server running on port  => ${PORT} ✔ `)
})
