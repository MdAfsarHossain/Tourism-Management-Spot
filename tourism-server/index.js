const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mongodb configuration
// const uri = "mongodb://localhost:27017";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b6ov8m0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


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
      // await client.connect();
  
      // Write here create data base code
      const touristsSpotCollection = client.db("touristaHub").collection("allTouristsSopt");
      const countriesCollection = client.db('touristaHub').collection('countriesCategories');
      // Write here create collection code
  
      // Get all tourists spot
        app.get('/allTouristSpot', async(req, res) => {

            const cursor = touristsSpotCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

      // Write here create data code
      // Add Tourist spot
        app.post('/addTouristSpot', async (req, res) => {
        console.log('New touristSpot added successfully');

        const {touristsSpotName, countryName, description, averageCost, travelTime, location, imageUrl, seasonality, totalVisitorsPerYear, email, name} = req.body;
        const addTouristsSpotName = {touristsSpotName, countryName, description, averageCost, travelTime, location, imageUrl, seasonality, totalVisitorsPerYear, email, name}

        const result = await touristsSpotCollection.insertOne(addTouristsSpotName);
        res.send(result);
        })
  
      // My Lists
      app.get('/myList/:email', async (req, res) => {
        const email = req.params.email;
        const query = {email: email};
        const cursor = touristsSpotCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
      })

      // Single tourists spot
      app.get('/touristSpotDetails/:_id', async (req, res) => {
        const _id = req.params._id;
        const query = {_id: new ObjectId(_id)};
        const result = await touristsSpotCollection.findOne(query);
        res.send(result);
      })
  
      // Get ALl Countries data
      app.get('/allCountries', async (req, res) => {
        const cursor = countriesCollection.find();
        const result = await cursor.toArray();
        res.send(result);
      })
  
      // Get Specific Country data
      app.get('/specificCountries/:countryName', async (req, res) => {
        const countryNameCapitalize = req.params.countryName.charAt(0).toUpperCase() + req.params.countryName.slice(1);
        const query = {countryName: countryNameCapitalize};
        const cursor = touristsSpotCollection.find(query);
        const result = await cursor.toArray();
        // console.log(result);
        
        res.send(result);
      })
  
      // Update a specific data
      app.put('/updateTouristsSpot/:id', async (req, res) => {
        const id = req.params.id;
        const touristsSpotData = req.body;
        const filter = {_id: new ObjectId(id)};
        const options = {upsert: true};
        const updatedTouristsSpot = {
          $set: {
            touristsSpotName: touristsSpotData.touristsSpotName,
            countryName: touristsSpotData.countryName,
            description: touristsSpotData.description,
            averageCost: touristsSpotData.averageCost,
            travelTime: touristsSpotData.travelTime,
            location: touristsSpotData.location,
            imageUrl: touristsSpotData.imageUrl,
            seasonality: touristsSpotData.seasonality,
            totalVisitorsPerYear: touristsSpotData.totalVisitorsPerYear,
          }
        }

        const result = await touristsSpotCollection.updateOne(filter, updatedTouristsSpot, options);
        res.send(result);
      })
  
      // Delete a specific data
      app.delete('/deleteTouristsSpot/:_id', async (req, res) => {
        const id = req.params._id;
        const query = {_id: new ObjectId(id)};
        const result = await touristsSpotCollection.deleteOne(query);
        res.send(result);
      })
  
      // Write here update code
  
      // Write here delete code
  
      // Send a ping to confirm a successful connection
      // await client.db("admin").command({ ping: 1 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    } finally {
      // Ensures that the client will close when you finish/error
      // await client.close();
    }
  }
  run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("Welcome to the Tourism Server site!");
});


app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})