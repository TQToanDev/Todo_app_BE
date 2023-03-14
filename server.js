const app =  require('express')()
const router = require('./route')
const bodyParser = require('body-parser');
const  cors = require('cors')

app.use(cors())

const PORT = process.env.PORT || 3000

app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.json({message: "Ok"})
})
router(app)

app.listen(PORT, ()=>{
    console.log("Server listening on port "+ PORT);
})