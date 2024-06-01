import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  
  const [BookName, setbookName] = useState('');
  const [Review, setreview] = useState('');
  const [BookReviewList, setBookList] = useState([])

  const [newReview, setNewReview] = useState("")

  useEffect(()=>{
    Axios.get('http://localhost:3006/api/get').then((response)=>{
      setBookList(response.data)
    })
  }, [])

  const submitReview=()=>{
    Axios.post('http://localhost:3006/api/insert',{
      BookName: BookName, 
      BookReview: Review,
    }).then(()=>{
      alert("Successfully Inserted")
    });

      setBookList([
        ...BookReviewList,
        {BookName: BookName, BookReview: Review},
      ]);
    };

    
    const deleteReview =(Book) => {
      Axios.delete(`http://localhost:3006/api/delete/${Book}`);
    };

    const updateReview =(Book) => {
      Axios.put("http://localhost:3006/api/update/",{
        BookName: Book, 
        BookReview: newReview,
      });
      setNewReview("");
    };
    

  

  return (
    <div className="App">
      <h1>BOOK REVIEWING PLACE</h1>
      <div className="form">
        <label>Book Name:</label>
        <input type="text" name="BookName" onChange={(e)=>{
          setbookName(e.target.value);
        }}/>

        <label>Book Review:</label>
        <input type="text" name="Review" onChange={(e)=>{
          setreview(e.target.value);
          } }/>

        <button onClick = {submitReview}>Submit</button>
        {BookReviewList.map((val)=>{
          return (
          <div className= "card"> 
          <h1>{val.BookName}</h1>
          <p>{val.BookReview}</p>

          <button onClick={()=>{deleteReview(val.BookName)}}>DELETE</button>

          <input type="text" id="updateInput" onChange={(e)=>{
            setNewReview(e.target.value)
          }}
          />
          <button onClick={()=>
            {updateReview(val.BookName)}
          }>Update</button>
          </div> 
          );
        })}
      </div>
    </div>
  );
}

export default App;