const {Hono}=require('hono');
// import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => {
    return c.text('Home page')
})

const port = 3000;
app.fire()
console.log('server is running on port ', port)