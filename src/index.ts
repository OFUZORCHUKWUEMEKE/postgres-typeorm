import { DataSource} from 'typeorm'
import { Client } from './Entitites/Client'


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "ofuzor2001",
    database: "test",
    entities:[Client], 
    // entities: [Photo],
    synchronize: true 
    // logging: false,
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log('database running on port 2000')
    })
.catch((error) => console.log(error))