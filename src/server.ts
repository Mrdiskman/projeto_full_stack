import { AppDataSource } from "./data-source"
import app from "./app"

(async () => {
    await AppDataSource.initialize().catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
  
    app.listen(8000, () => console.log("Running at http://localhost:8000"));
  })();