import { useState, useEffect } from "react"


function App() {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [year, setYear] = useState(0)
  const [description, setDescription] = useState("")
  const [editOpen, setEditOpen] = useState(false)
  const [newTitle, setNewTitle] = useState("")

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

  const addBook = async () => {
    const newBook = { title, author, year: parseInt(year), description }
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/add/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"

        },
        body: JSON.stringify(newBook)
      })
      const data = await response.json()
      console.log("Added book:", data)
      setBooks((prevBooks) => [...prevBooks, data])

    } catch (error) {
      console.error("Error adding book:", error)
    }
    setAuthor("")
    setTitle("")
    setYear(0)
    setDescription("")

  }
  const updateTitle = async (pk) => {
    try{
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
      <h1>Booky</h1>
      <div className="main-container">
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
        <input type="number" placeholder="Year" onChange={(e) => setYear(e.target.value)} />
        <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
        <button onClick={() => addBook()}>Add Book</button>

      </div>
      <div className="book-list">
        {
          books.map((book) => (
            <div key={book.id} className="book-item">
              <div className="title-edit-container">
                <h2>Title: {book.title}</h2>
                <button onClick={() => setEditOpen(!editOpen)}>edit</button>
              </div>
              <div className="input-edit-container">
                {editOpen && (<div className="input-box-edit"><input type="text" placeholder="New Title"  onChange={(e)=>setNewTitle(e.target.value)}/>
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

export default App
