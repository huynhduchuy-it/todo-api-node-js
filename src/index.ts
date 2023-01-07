import app from "./app";
import { AppDataSource } from "./db";

async function main() {
  try {
    await AppDataSource.initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((error) => {
        console.error("Error during Data Source initialization", error);
      });

    app.listen(process.env.PORT, () => {
      console.log("App is running on port", process.env.PORT);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
