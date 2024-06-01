const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app =express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    database: 'cruddatabase',
    user: 'root',
    password: 'password',
    

});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.get('/api/get', (req,res)=>{
    const sqlSelect = "SELECT * FROM book_review";
    db.query(sqlSelect, (err,result)=>{
        res.send(result);
    });
});
app.post('/api/insert', (req, res)=>{
    const Bookname = req.body.BookName;
    const Bookreview = req.body.BookReview;

    res.send("Hello Reader");
    const sqlInsert = "INSERT INTO book_review (BookName, BookReview) VALUES (?,?)";
    db.query(sqlInsert, [Bookname, Bookreview], (err,result)=>{
        console.log(result);
        
      
    });
});
app.delete('/api/delete/:BookName', (req, res)=>{
    const name = req.params.BookName
    const sqlDelete=
    "DELETE FROM book_review WHERE BookName =?";

    db.query(sqlDelete, name, (err, result) =>{
       if(err) console.log(err);
    });
});

app.put("/api/update", (req, res)=>{
    const name = req.body.BookName;
    const review = req.body.BookReview;
    const sqlUpdate = 
    "UPDATE book_review SET BookReview = ? WHERE BookName = ?";
    db.query(sqlUpdate, [review, name], (err, result)=>{
        if (err) console.log(err);
    });
});

app.listen(3006, ()=>
{
    console.log("running on port 3006");
});

