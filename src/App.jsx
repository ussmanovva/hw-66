import { useState } from "react";
import "./App.css";
import { BookForm } from "./components/bookForm/BookForm";
import { Header } from "./components/header/Header";
import { Button } from "./components/UI/Button";
import { BookList } from "./components/bookList/BookList";

function App() {
	const [open, setOpen] = useState("53");
	const [books, setBooks] = useState([]);

	function openAddBookForm() {
		setOpen((prev) => {
			return !prev;
		});
	}

	const buttonText = !open ? "Add Book" : "Cancel";

	function onAddNewBook(parametr) {
		setBooks((prev) => {
			return [...prev, parametr];
		});
	}

	const toggleFavorite = (id) => {
		const updateBooks = books.map((item) =>
			item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
		);
		setBooks(updateBooks);
	};

	const deleteHandler = (id) => {
		const updateDeleteBooks = books.filter((item) => item.id !== id);
		setBooks(updateDeleteBooks);
	};

	return (
		<div className="app">
			<Header /> Bookform
			<Button onClick={openAddBookForm}>{buttonText}</Button>
			<main className="app-main">
				<div className="app-left-column">
					{open && (
						<BookForm onCancel={openAddBookForm} onAddBook={onAddNewBook} />
					)}
				</div>
				<div className="app-right-column">
					<BookList
						books={books}
						onDelete={deleteHandler}
						onToggle={toggleFavorite}
					/>
				</div>
			</main>
		</div>
	);
}

export default App;
