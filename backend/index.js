const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/user');
const Product = require('./db/product');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/register', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(req.body);
})

app.post('/login', async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            res.send(user);
        } else {
            res.send({ result: "No user found" })
        }
    }else{
        res.send({ result: "enter both email and password" })
    }
})

app.post('/add-product', async(req, res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})

app.get('/products', async(req, res)=>{
    let product = await Product.find();
    if(product){
        res.send(product)
    }else{
        res.send({Product : "no Product Found"})
    }
})

app.delete('/product/:id', async (req, res)=>{
    const result = await Product.deleteOne({_id:req.params.id})
    res.send(result)
})

app.get('/product/:id' , async(req, res) =>{
 let result = await Product.findById({_id:req.params.id})
 if(result){
    res.send(result)
 }else{
    res.send({resilt: "No Product Found"})
 }
})

app.put('/product/:id', async(req, res)=>{
    let result = await Product.updateOne(
        {_id: req.params.id},
        {
            $set : req.body
        }
    )
    res.send(result)
})

app.get('/search/:key', async(req, res )=>{
    let result = await Product.find({
        "$or" : [
            {name: {$regex: req.params.key}},
            {company: {$regex: req.params.key}},
            {category: {$regex: req.params.key}},
        ]
    })
    res.send(result)
    
})



app.listen(5000);   