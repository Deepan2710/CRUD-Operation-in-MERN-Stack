const expres=require('express');
const route=expres.Router();
const cors=require('cors');
route.use(cors());

//route.use(expres.json());
//import {book} from '../models/model';
const books=require('../models/model.js');
//route
route.post('/',async(req,res)=>{
    try {  console.log("entered into post book option")
    //{  if(!req.body.title || !req.body.author || !req.body.publishyear)
        const newbook={ 
         title:req.body.title,
         author:req.body.author
       //  publishyear:req.body.publishyear
        };
      const book=await books.create(newbook);  
      return res.status(201).send(book); 
      console.log("Book posted");
     }catch(error){
         console.log(error);
         res.status(500).send({message:error.message});
     }
 });
 
 //route to get all books
 route.get('/',async(req,res)=>{
     try{console.log("entered into get book find")
         const get_book=await books.find({});
         res.status(200).json({  
             count :get_book.length,
             data:get_book
         });
     }catch(error){
 
     }
 })
 
 //route to get one book
 route.get('/:id',async(req,res)=>{
     try{ console.log("picking one data");
     const {id}=req.params;
     const one_book=await books.findById(id);
     res.status(200).json(one_book);  }
     catch(error){ 
         console.log("error in picking one");
     }
 })
 
 route.get('/find/:title', async (req, res) => { 
    try {
        console.log("picking one data");
        const { title } = req.params;  
        const one_book = await books.find({ title: title });  
        res.status(200).json(one_book);
    } catch (error) {
        console.log("error in picking one:"); 
        res.status(500).json({ error: "Error in picking one" });
    } 
});
 
//route to find by author 
route.get('/writer/:author',async(req,res)=>{
    console.log("entered to get author") 
    const {author }=req.params; 
    const author_book = await books.find({ author :author }) 
    res.status(200).json(author_book);
})
 //route to update
 route.put('/:id',async(req,res)=>{
     const {id}=req.params;
     const update_book=await books.findByIdAndUpdate(id,req.body);
     res.status(200).json({message:"book updated"})
     console.log("book updated");
 })   
 
// route for deleting
route.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await books.findByIdAndDelete(id);
        res.status(200).send({ message: "Book deleted" }); // 200 is a more conventional status code for successful deletion
        console.log("Book deleted");
    } catch (error) {
        res.status(500).send({ message: "Error deleting book", error: error.message });
        console.error("Error deleting book:", error);
    }
});
  
//export default expres.Router;
module.exports=route;
console.log("ok in booksroute");