const express = require('express')
const app = express();

app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.set('view-engine', 'ejs')


app.get('/', (req , res) => {
    res.render('index.ejs')
})
app.get('/add', (req , res) => {
    res.render('addcalc.ejs')
})
app.post('/addition', (req , res) => {
    if(req.body.numbers != ''){
        let data = req.body.numbers
        data = data.split('+')
        let sum = 0;
        for(let i = data.length-1; i >= 0; i--){
            sum += parseInt(data[i])
        }
        res.writeHead(200, {'Content-type':'text/html'})
        res.write(`The sum is ${sum}`)
        res.end()
    }else{
        res.writeHead(400, {'Content-Type' : 'text/html'})
        res.write('Please insert values to be added! for example 1+2+...')
        res.end()
    }
})

app.get('/multiply', (req , res) => {
    res.render('multiplycalc.ejs')
})
app.post('/multiply', (req , res) => {
    if(req.body.numbers_prod != ''){
        let data = req.body.numbers_prod
        data = data.split('*')
        let product = 1
        for(let i = data.length -1; i >= 0; i--){
            product *= parseInt(data[i]);
        }
        res.writeHead(400, {'Content-Type' : 'text/html'})
        res.write(`The product is ${product}`)
        res.end()
    }else{
        res.writeHead(400, {'Content-Type' : 'text/html'})
        res.write('Please insert values to be multiplied! for example 1*2*...')
        res.end()
    }
})

app.listen(4000, () => console.log('Listening on port 4000 ...'))