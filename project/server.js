"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
router.use(express_1.default.json());
router.get('/', (req, res) => {
    res.json({ 'msg': 'Hello world' });
});
const httpServer = http_1.default.createServer(router);
httpServer.listen(8080, () => { console.log('server is running'); });
    