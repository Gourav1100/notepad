import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URI = `mongodb+srv://${process.env.USERID}:${process.env.PASSWORD}@notepad.ugmhfkn.mongodb.net/?retryWrites=true&w=majority`;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
let client, clientPromise;
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(URI, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(URI, options);
  clientPromise = client.connect();
}

export default clientPromise;
