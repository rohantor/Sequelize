import * as express from 'express'
import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import { router } from './routes'
import cors from "cors"
import { db } from './config'
import { User } from './models/user'
import { Role } from './models/role'
dotenv.config()
const app = express.default()

db.sync().then(() => {
    console.log("connect to db")
    User.sync()
    Role.sync()
    Role.findOrCreate({
        where: { id: 1 },
        defaults: {
            "name": "user",

            "createdBy": 1,

            "updatedBy": 1
        }
    });
}).catch(err => console.log(err))
app.use(express.json())
app.use(cors())

app.use(router)
app.get('*', (req, res) => {
    res.status(404).send("Page Not Found")
})
const server = app.listen(process.env.PORT, () => {
    const { port, address, family } = server.address() as AddressInfo
    console.log('server listening on port', address, port, family)
})

