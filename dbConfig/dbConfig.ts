import mongoose from "mongoose";

export async function connectToMongo() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });
    connection.on("error", (err) => {
      console.log("Error connecting Mongodb" + err);
      process.exit();
    });
  } catch (error) {
    console.log("Error from dbConfig" + error);
  }
}
