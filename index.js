const {Client} = require('pg')
const client = new Client({
   user: "postgres",
   password: "QueensUni2023!",
   host: "localhost",
   port: 5432,
   database: "mental_wellbeing" 
}) 

client.connect()
.then(() => console.log("Connected successfully"))
.then(() => client.query("SELECT * FROM users"))
.then(results => console.table(results.rows)) 
.catch(e => console.log(e))
.finally(() => client.end())