import { useState, useEffect } from "react"
import Login from './(auth)/Login';
import Profile from './(auth)/Profile';

const Home = () => {
  const [books, setBooks] = useState([])

  const [editOpen, setEditOpen] = useState(false)
  const [newTitle, setNewTitle] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/")
      const data = await response.json()
      console.log("Fetched books:", data)
      setBooks(data)
    }
    catch (error) {
      console.error("Error fetching books:", error)
    }
  }
  useEffect(() => {
    fetchBooks()
  }, [])

  
  const updateTitle = async (pk) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: newTitle })
      })
      const data = await response.json()
      console.log("Updated book:", data)
      setBooks((prevBooks) =>
        prevBooks.map((book) => (book.id === pk ? { ...book, title: newTitle } : book))
      )
    } catch (error) {
      console.error("Error updating book:", error)
    }
  }
  const deleteBook = async (pk) => {
    try {
      await fetch(`http://127.0.0.1:8000/api/books/${pk}/`, {
        method: "DELETE"
      })
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== pk))
    } catch (error) {
      console.error("Error deleting book:", error)
    }
  }

  return (
    <>
      <h1>Welcome to Booky</h1>
   
      <div className="book-list">
        {
          books.map((book) => (
            <div key={book.id} className="book-item">
              <div className="title-edit-container">
                <h2>Title: {book.title}</h2>
                <button onClick={() => setEditOpen(!editOpen)}>edit</button>
              </div>
              <div className="input-edit-container">
                {editOpen && (<div className="input-box-edit"><input type="text" placeholder="New Title" onChange={(e) => setNewTitle(e.target.value)} />
                  <button onClick={() => updateTitle(book.id)}>Done</button>
                </div>)}
              </div>
              <h3>by {book.author} ({book.year})</h3>
              <p><strong>Desc:</strong> {book.description}</p>
              <button onClick={() => deleteBook(book.id)}>Delete Book</button>
            </div>

          ))
        }
      </div>
    </>
  )
}

export default Home