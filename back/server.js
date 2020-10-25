const express = require('express')
const bodyParser = require('body-parser')
const{ MongoClient , ObjectID} = require('mongodb')
const assert = require('assert')

const app = express();
app.use(bodyParser.json());

const url = 'mongodb://localhost:27017';
const database = 'blog';

MongoClient.connect(url,{ useNewUrlParser: true },(err,client)=>{
    assert.equal(null,err,'database not working yet');
    const db = client.db(database);

    app.post('/Write_new_post',(req, res)=>{
        let newPost = req.body;
        db.collection('posts').insertOne(newPost,(err,data)=>{
            if (err) res.send('can not add new post');
            else res.send('new post added');
        })
    })

    app.put('/add_comment/:id',(req, res)=>{
        db.collection('posts').update({_id: ObjectID(req.params.id)},{
            $push: {comments :req.body.comment }
          }).then(data => {
              res.json(data)
            })
    })

    app.get('/Posts',(req,res)=>{
        db.collection('posts').find().toArray((err,data)=>{
            if (err) res.send('can not get posts');
            else res.send(data);
        })
    })

    app.get('/Post/:id',(req,res)=>{
        db.collection('posts').findOne(ObjectID(req.params.id),(err,data)=>{
            if (err) res.send('something wrong with your id get')
            else res.send(data)
        })
    }) 
     
    app.put('/Post/:id',(req,res)=>{
        db.collection('posts').findOneAndUpdate({ _id : ObjectID(req.params.id) },{$set : req.body.payload})
        .then(res =>res.send('post updated successfully') )
        .catch(err =>res.send(err) )
    }) 

    app.delete('/delete_post/:id',(req,res)=>{
       db.collection('posts').findOneAndDelete({_id : ObjectID(req.params.id)})
       .then( data =>   (data.value === null ) ?  res.send( {msg :' no data found'}) :  res.send({msg : 'deleted'})) 
       .catch( err => res.send({err}))
    })

});

app.listen(3007,err=>{
    if (err) console.log('server error')
    else console.log('server is running on port 3007, Happy hacking!!');
});