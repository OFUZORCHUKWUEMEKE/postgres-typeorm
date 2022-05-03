import { DataSource} from 'typeorm'
import { Banker } from './Entitites/Banker'
import { Client } from './Entitites/Client'
import { Transactions } from './Entitites/Transactions'
import express from 'express'
import { ClientRouter } from './routes/Client'

const app = express()


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "ofuzor2001",
    database: "test",
    entities:[Client,Banker,Transactions], 
    synchronize: true 
})

AppDataSource.initialize()
    .then(() => {
        app.listen(8080,()=>{
            console.log('app listening on Port 8080')
        })
        
        app.use(express.json())
        app.use(ClientRouter)
        // here you can start to work with your database
        console.log('database running on port 2000')
    })
.catch((error) => console.log(error))