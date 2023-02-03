import { AppDataSource } from "./data-source"
import app from "./app"

async function init(){
    await AppDataSource.initialize()
    .then(()=>{console.log("Data Source Initialized")})
    .catch((err)=>{
        console.error("Error during Data Source Initialization", err)
    })
    app.listen(3000)
}
init()