const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
const bookRoute = require('./routes/booksroute.js');

mongoose.connect("mongodb+srv://deepanvenkat6:deepan006@cluster0.2fbupgt.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Successfully connected to DB");
    })
    .catch(() => {
        console.log("Error connecting to DB");
    });

app.use(express.json()); 
  
app.use('/books', bookRoute);
app.use(cors());

 
 

app.get('/books', (req, res) => { 
  
 });
 

app.get('/', (req, res) => {
    res.send("API");
});


const PORT = process.env.PORT || 2724;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});






// //route
// app.post('/books',async(req,res)=>{
//    try {  console.log("entered into post book option")
//    //{  if(!req.body.title || !req.body.author || !req.body.publishyear)
//        const newbook={ 
//         title:req.body.title,
//         author:req.body.author
//       //  publishyear:req.body.publishyear
//        };
//      const book=await books.create(newbook);  
//      return res.status(201).send(book); 
//     }catch(error){
//         console.log(error);
//         res.status(500).send({message:error.message});
//     }
// });

// //route to get all books
// app.get('/books',async(req,res)=>{
//     try{console.log("entered into get book find")
//         const get_book=await books.find({});
//         res.status(200).json({  
//             count :get_book.length,
//             data:get_book
//         });
//     }catch(error){

//     }
// })

// //route to get one book
// app.get('/books/select/:id',async(req,res)=>{
//     try{ console.log("picking one data");
//     const {id}=req.params;
//     const one_book=await books.findById(id);
//     res.status(200).json(one_book);  }
//     catch(error){
//         console.log("error in picking one");
//     }
// })
 
// //route to update
// app.put('/books/update/:id',async(req,res)=>{
//     const {id}=req.params;
//     const update_book=await books.findByIdAndUpdate(id,req.body);
//     res.status(200).json({message:"book updated"})
//     console.log("book updated");
// })  

// //route for deleting
// app.delete('/book/delete/:id',async(req,res)=>{
//     const {t} = req.params;
//  const result=   await books.findByIdAndDelete(id);
//     res.status(201).send({message:"book deleted"});
//     console.log("book deleted"); 
// }) 


//app.use(cors());
// app.use(
//     cors({
//         origin:'http://localhost:2724',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['content-Type']
//     })
// )