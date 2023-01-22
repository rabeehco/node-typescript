import express, {Application, Request, Response, NextFunction} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Heylo') 
})

app.post('/api/post', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(5000, () => {console.log('Listening to 5000')}) 