const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const databaseConnection = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(databaseConnection, { useNewUrlParser:true, useUnifiedTopology: true }, (error, client )=>{
    if(error){
        return console.log("Unable to connect to database!");
    }
    
    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     name:'Abhi',
    //     age:23
    // },(error,result)=>{
    //     if(error){
    //         return console.log("Data was not inserted");
    //     }
    //     console.log(result.ops);
    // })
    
    // db.collection('users').insertMany([
    //     {
    //         name:'chandler',
    //         age:30
    //     },
    //     {
    //         name:'joey',
    //         age:31
    //     }
    // ], (error,result)=>{
    //     if(error){
    //         return console.log("Unable to insert data");
    //     }
    //     console.log(result.ops);
    // })

    db.collection('tasks').insertMany([
        {
            description:'Clean the house',
            completed: true
        },
        {
            description: 'pot plants',
            completed: false
        }
    ],(error,result)=>{
        if(error){
            return console.log("Unable to insert data");
        }
        console.log(result.ops);
    })
})