import useBooksContext from "../hooks/useBooksContext"; 
import BookShow from  './BookShow';

function BookList() {

    const { books } = useBooksContext();

    const renderedBooks = books.map((book) =>{
        return <BookShow book={book} />
    })

    return <div className="book-list">
   
        {renderedBooks}
    </div>;
}

export default BookList;