// cluster password : mernapp
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.set("strictQuery", false);
const Connection = () => {
  const MONGODB_URI = process.env.MONGO_DB_URI;
  // console.log(MONGODB_URI);
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database conntected successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconntected ");
  });

  mongoose.connection.on("error", (error) => {
    console.log("Error while connection with the database", error.message);
  });
};

//useNewUrlParser : The underlying MongoDB driver has deprecated their current connection string parser. Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser

export default Connection;
