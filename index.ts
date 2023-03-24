import * as express from 'express'
import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import { router } from './routes'
import cors from "cors"
import { db } from './config'


// import multer from 'multer'
dotenv.config()
const app = express.default()
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/')
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, uniqueSuffix + '-' + file.originalname)
//     }
// })
db.sync().then(() => {
    console.log("connect to db")
    // User.sync()
    // Role.sync()
}).catch(err => console.log(err))
app.use(express.json())
app.use(cors())
// const upload = multer({ storage: storage })
// app.use(express.static('public'))
app.use(router)
// app.post('/file', upload.single('file'), (req, res) => {
//     res.send("File uploaded")
// })
// app.get('*', (req, res) => {
//     res.status(404).send("Page Not Found")
// })
const server = app.listen(process.env.PORT, () => {
    const { port, address, family } = server.address() as AddressInfo
    console.log('server listening on port', address, port, family)
})

