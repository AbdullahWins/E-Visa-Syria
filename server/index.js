const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://gameCheap_user:${process.env.DB_PASSWORD}@gamecheap.c6qi1ej.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const usersCollection = client.db("gameCheap").collection("users");
    const productsCollection = client.db("gameCheap").collection("products");
    const paymentsCollection = client.db("gameCheap").collection("payments");


  } finally {
  }
}
run().catch(console.log);

const blogs = require("./data/blogs.json");

app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.get("/", async (req, res) => {
  res.send("Game Cheap Server");
});

app.listen(port, () => console.log(`Game Cheap is running on port: ${port}`));
