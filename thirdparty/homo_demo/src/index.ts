const {Hono}=require('hono');
// import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => {
    return c.text('Home page')
})

const port = 3000;
app.listen(port, () => {
    console.log('server is runing on port ', port)
})