const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken')
const cors = require('cors')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000;


//middleware
app.use(cors())
app.use(express.json())
app.get('/', (req, res) =>{
    res.send('petenica server is running')
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@petenica.h6uutji.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });

    async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        const petCategory = client.db('petenica').collection('petCategory')
        const petCollection = client.db('petenica').collection('petCollection')
        const adoptedRequestCollection = client.db('petenica').collection('adoptedRequestCollection')
        const userCollection = client.db('petenica').collection('userCollection')
        const DonateCampaign = client.db('petenica').collection('allDonationCampaign')
        //jwt
        app.post('/jwt', async(req, res) =>{
            const user = req.body
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'4h'})
            res.send({token})
        })
        //middlewares
        const verifyToken = (req, res, next)=>{
            console.log(req.headers.authorization);
            if(!req.headers.authorization){
                return res.status(401).send({message: 'unauthorized access'})
            }
            const token = req.headers.authorization.split(' ')[1]
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) =>{
                if(err){
                    return res.status(401).send({message: 'unauthorized access'})
                }
                req.decoded = decoded
                next()
            })
        }
        const veriyAdmin = async(req, res, next) =>{
            const email = req.decoded.email;
            const query = {email: email}
            const user = await userCollection.findOne(query)
            const isAdmin = user?.role === 'admin';
            if(!isAdmin){
                return res.status(403).send({message: 'forbidden access'})
            }
            next()
        }
        //pet related API
        app.get('/petcategory', async(req, res) =>{
            const cursor = petCategory.find()
            const result = await cursor.toArray()
            res.send(result)
        })
        app.get('/pet/:category', async(req, res) =>{
            const category = req.params.category;
            const query = {category: category}
            const result = await petCollection.find(query).toArray()
            res.send(result)
        })
        app.get(`/petsNonAdopted`, async(req, res) =>{
            const page = req.query.page || 1;
            const pageSize = 9;
            const skip = (page - 1) * pageSize;
            const nonAdoptedPet = await petCollection.find({adopted: 'false'}).skip(skip).limit(pageSize).toArray()
            res.send(nonAdoptedPet)
        })
        app.get('/petinfo/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await petCollection.findOne(query)
            res.send(result)
        })
        app.post('/adoptedreq', async(req, res) =>{
            const adoptReq = req.body;
            const result = await adoptedRequestCollection.insertOne(adoptReq)
            res.send(result)
        })
        app.get('/allpets', verifyToken, veriyAdmin, async(req, res) =>{
            const cursor = petCollection.find()
            const result = await cursor.toArray()
            res.send(result)
        })
        app.delete('/allpets/:id', async(req, res) =>{
            const id = req.params.id
            const query = {_id: new ObjectId(id)}
            const result = await petCollection.deleteOne(query)
            res.send(result)
        })
        app.get('/allpets/:id', async(req, res) =>{
            const id = req.params.id
            const query = {_id: new ObjectId(id)}
            const result = await petCollection.findOne(query)
            res.send(result)
        })
        app.put('/allpetsone/:id',   async(req, res) =>{
            const id = req.params.id;
            const updatedPetInfo = req.body;
            const filter = {_id: new ObjectId(id)}
            const ChangedInfo = {
                $set:{
                    pet_name:updatedPetInfo.pet_name,
                    category:updatedPetInfo.category,
                    pet_image:updatedPetInfo.pet_image,
                    pet_age:updatedPetInfo.pet_age,
                    short_description:updatedPetInfo.short_description,
                    long_description:updatedPetInfo.long_description,
                    serial_number:updatedPetInfo.serial_number,
                    adopted:updatedPetInfo.adopted,
                    pet_add_time:updatedPetInfo.pet_add_time
                }
            }
            const result = await petCollection.updateOne(filter, ChangedInfo)
            res.send(result)
        })
        app.put('/status/:id', verifyToken, veriyAdmin, async(req, res) =>{
            const id = req.params.id;
            const update = req.body;
            console.log(update);
            const filter = {_id: new ObjectId(id)}
            const updatedDoc = {
                $set:{
                    adopted:update?.adopted
                }
            }
            const result = await petCollection.updateOne(filter, updatedDoc)
            res.send(result)
        })

        //donation related API
        app.get('/getdonation/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await DonateCampaign.findOne(query)
            res.send(result)
        })

        
        //dashboard related API
        app.get('/adoptedreqget', async(req, res) =>{
            const email = req.query.email
            const query = {user_email: email}
            const result = await adoptedRequestCollection.find(query).toArray()
            res.send(result)
        })
        app.post('/addpet', async(req, res) =>{
            const petInfo = req.body
            const result = await petCollection.insertOne(petInfo)
            res.send(result)
        })
        app.post('/donatecampaign', async(req, res) =>{
            const DonateInfo = req.body
            const result = await DonateCampaign.insertOne(DonateInfo)
            res.send(result)
        })

        app.get('/mydonationcamp/:email', async(req, res) =>{
            const email = req.params.email
            const query = {donate_creator_email: email}
            const result = await DonateCampaign.find(query).toArray()
            res.send(result)
        })
        app.get('/editmycampaign/:id', async(req, res) =>{
            const id = req.params.id
            const query = {_id: new ObjectId(id)}
            const result = await DonateCampaign.findOne(query)
            res.send(result)
        })
        app.put('/editDonate/:id', async(req, res) =>{
            const id = req.params.id;
            const updatedPDonateInfo = req.body;
            const filter = {_id: new ObjectId(id)}
            const ChangedInfo = {
                $set:{
                    max_donate:updatedPDonateInfo.max_donate,
                    last_date:updatedPDonateInfo.last_date,
                    short_description:updatedPDonateInfo.short_description,
                    long_description:updatedPDonateInfo.long_description,
                    pet_name:updatedPDonateInfo.pet_name
                }
            }
            const result = await DonateCampaign.updateOne(filter, ChangedInfo)
            res.send(result)
        })
        app.get('/mydonation/:email', async(req, res) =>{
            const email = req.params.email;
            const query = {donate_creator_email: email}
            const result = await DonateCampaign.find(query).toArray()
            res.send(result)
        })
        app.get(`/alldonate`, async(req, res) =>{
            const page = req.query.page || 1;
            const pageSize = 9;
            const skip = (page - 1) * pageSize;
            const nonAdoptedPet = await DonateCampaign.find().skip(skip).limit(pageSize).toArray()
            res.send(nonAdoptedPet)
        })
        app.get('/myaddedpet', async(req, res) =>{
            const email = req.query.email;
            const query = {user_email: email}
            const result = await petCollection.find(query).toArray()
            res.send(result)
        })
        // user related API
        app.get('/users', verifyToken, veriyAdmin, async(req, res)=>{
            const result = await userCollection.find().toArray()
            res.send(result)
        }) 
        app.post('/users', async(req, res) =>{
            const user = req.body;
            const query = {email: user.email}
            const existingUser = await userCollection.findOne(query)
            if(existingUser){
                return res.send({message: 'user already exist'})
            }
            const result = await userCollection.insertOne(user)
            res.send(result)
        })
        app.delete('/users/:id', verifyToken, veriyAdmin, async(req, res) =>{
            const id = req.params.id
            const query = {_id: new ObjectId(id)}
            const result = await userCollection.deleteOne(query)
            res.send(result)
        })
        // admin related API
        app.patch('/users/admin/:id', verifyToken, veriyAdmin, async(req, res) =>{
            const id = req.params.id
            const filterForAdmin = {_id: new ObjectId(id)}
            const updatedDoc ={
                $set:{
                    role: 'admin'
                }
            }
            const result = await userCollection.updateOne(filterForAdmin, updatedDoc)
            res.send(result)
        })
        app.get('/users/admin/:email', verifyToken, async(req, res) =>{
            const email = req.params.email;
            if(email !== req.decoded.email){
                return res.status(403).send({message: 'forbidden access'})
            }
            const query = {email: email};
            const user = await userCollection.findOne(query)
            let admin = false;
            if(user){
                admin = user?.role === 'admin'
            }
            res.send({admin})
        })
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);
app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
})