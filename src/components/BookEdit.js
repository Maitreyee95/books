import {  useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookEdit({book , onSubmit}) {
    const [title, setTitle] = useState(book.title);

    const { editBookById } = useBooksContext();

    const handleChange = (event) =>{
        setTitle(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        editBookById(book.id, title);
        onSubmit();
    }

    return <div>
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value = {title} onChange={handleChange} />
            <button className="button is-primary"> Save </button>
        </form>
    </div>;
}

export default BookEdit;