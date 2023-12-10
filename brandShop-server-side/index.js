const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(cors()); //allow cross origin resource sharing (CORS)
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.oh6dvsr.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	try {
		// Connect the client to the server	(optional starting in v4.7)
		//await client.connect();

		const brandCollection = client.db("brandDB").collection("brand");
		const brandNameCollection = client
			.db("brandDB")
			.collection("brandName");
		//const adImageCollection = client.db("brandDB").collection("adImage");
		const myCartCollection = client.db("brandDB").collection("myCart");

		app.post("/brand", async (req, res) => {
			const newBrand = req.body;
			const result = await brandCollection.insertOne(newBrand);
			res.send(result);
		});

		app.get("/brand", async (req, res) => {
			const cursor = brandCollection.find();
			const result = await cursor.toArray();
			res.send(result);
		});

		app.get("/brand/:brandName/:id", async (req, res) => {
			const id = req.params.id;
			const filter = { _id: new ObjectId(id) };

			const products = await brandCollection.findOne(filter);

			res.send(products);
		});

		app.get("/brand/:brandName", async (req, res) => {
			const brandName = req.params.brandName;
			const products = await brandCollection
				.find({ brandName: brandName })
				.toArray();

			res.send(products);
		});

		app.put("/brand/:id", async (req, res) => {
			const id = req.params.id;
			const filter = { _id: new ObjectId(id) };

			const updatedProduct = req.body;
			const Product = {
				$set: {
					image: updatedProduct.image,
					name: updatedProduct.name,
					brandName: updatedProduct.brandName,
					type: updatedProduct.type,
					price: updatedProduct.price,
					details: updatedProduct.details,
					rating: updatedProduct.rating,
				},
			};
			const result = await brandCollection.updateOne(filter, Product);
			res.send(result);
		});

		app.get("/brandName", async (req, res) => {
			const cursor = brandNameCollection.find();
			const result = await cursor.toArray();
			res.send(result);
		});
		app.get("/adImage", async (req, res) => {
			const cursor = adImageCollection.find();
			const result = await cursor.toArray();
			res.send(result);
		});

		app.post("/myCart", async (req, res) => {
			const newCart = req.body;
			const result = await myCartCollection.insertOne(newCart);
			res.send(result);
		});

		app.get("/myCart", async (req, res) => {
			const cursor = myCartCollection.find();
			const result = await cursor.toArray();
			res.send(result);
		});

		app.get("/myCart/:email", async (req, res) => {
			const email = req.params.email;
			const products = await myCartCollection
				.find({ email: email })
				.toArray();
			res.send(products);
		});

		app.delete("/myCart/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };
			const result = await myCartCollection.deleteOne(query);
			res.send(result);
		});

		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} finally {
		// Ensures that the client will close when you finish/error
		//await client.close();
	}
}
run().catch(console.dir);

app.get("/", (req, res) => {
	res.send("BrandShop Server is running");
});

app.listen(port, () => {
	console.log(`BrandShop Server is running on port, ${port}`);
});
