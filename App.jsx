import { useState } from 'react'
import FavoriteBook from './FavoriteBook'
import BookSelection from './BookSelection';
import './App.css'

function App() {

  const books = [
    {id: 1, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Classic"},
    {id: 2, title: "The Great Gatsby", author: "F Scott Fitzgerald", year: 1925, genre: "Classic"},
    {id: 3, title: "Moby Dick", author: "Herman Melville", year: 1851, genre: "Classic"},
    {id: 4, title: "Little Women", author: "Louisa May Alcott", year: 1868, genre: "Classic"},
    {id: 5, title: "Great Expectations", author: "Charles Dickens", year: 1861, genre: "Classic"},
    {id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Classic"},
    {id: 7, title: "Harry Potter & the Philosophers Stone", author: "JK Rowling", year: 1997, genre: "Fantasy"},
    {id: 8, title: "The Lightning Thief", author: "Rick Riordan", year: 2005, genre: "Fantasy"},
    {id: 9, title: "The Lion, Witch, & The Wardrobe", author: "C.S. Lewis", year: 1950, genre: "Fantasy"},
    {id: 10, title: "The Gunslinger", author: "Stephen King", year: 1982, genre: "Fantasy"},
    {id: 11, title: "The Princess Bride", author: "William Goldman", year: 1973, genre: "Fantasy"},
    {id: 12, title: "The Neverending Story", author: "Micheal Ende", year: 1979, genre: "Fantasy"},
  ];

  //Lifted State
  const [showBookSelection, setShowBookSelection] = useState(false);
  const [favoriteBook, setFavoriteBook] = useState({
    id: null,
    title: "",
    author: "",
    year: "",
    genre: "",
    }); //Initial State of Favorite Book

  const handleBookSelection = (book) => {
        setFavoriteBook(book);
        setShowBookSelection(false);
  }; //Set favorite book and close selection list

  return (
    <>
      <FavoriteBook 
      favoriteBook={favoriteBook}
      setFavoriteBook={setFavoriteBook}
      setShowBookSelection={setShowBookSelection}
      />
      {showBookSelection && (
      <BookSelection
      handleBookSelection={handleBookSelection}
      books={books}
      setShowBookSelection={setShowBookSelection}
      />
      )}
    </>
  );
}

export default App
