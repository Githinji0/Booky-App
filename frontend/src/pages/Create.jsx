import { useState } from "react"
const Create = () => {
    const [books, setBooks] = useState([])
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [year, setYear] = useState(0)
    const [description, setDescription] = useState("")
    const[successMessage,setSuccessMessage]=useState("")



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
            setSuccessMessage("Book added successfully!")
            setBooks((prevBooks) => [...prevBooks, data])

        } catch (error) {
            console.error("Error adding book:", error)
        }
        setAuthor("")
        setTitle("")
        setYear(0)
        setDescription("")

    }


    return (
        <div className="box">
            <h1>Add a New Book</h1>
            {successMessage && <p className="success-message">{successMessage}</p>}
            <div className="main-container">
                <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
                <input type="number" placeholder="Year" onChange={(e) => setYear(e.target.value)} />
                <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
                <button onClick={() => addBook()}>Add Book</button>

            </div>
            
        </div>
    )
}

export default Create