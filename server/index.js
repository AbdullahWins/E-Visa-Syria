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

const uri = `mongodb+srv://admin_syrianvisa:SEA0B5PXJ8vFtd3H@syrianevisa.7oqloil.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const applicationsCollection = client
      .db("syrianevisa")
      .collection("applications");

    app.get("/subCategory/:subCategoryName", async (req, res) => {
      const subCategoryName = req.params.subCategoryName;
      const query = { productSubCategory: subCategoryName };
      const cursor = testProductsCollection.find(query);
      const subCategory = await cursor.toArray();
      res.send(subCategory);
    });
  } finally {
  }
}
run().catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("EVisa BackEnd!");
});

app.listen(port, () => {
  console.log("server running");
});