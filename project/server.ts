import http from 'http'

import express from 'express'

const router: express.Express = express()

router.use(express.json())

router.get('/', (req: express.Request, res: express.Response) => {
    res.json({ 'msg': 'Hello world' })
})

const httpServer = http.createServer(router)
httpServer.listen(8080, () => { console.log('server is running') })