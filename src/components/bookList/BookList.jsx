import { Button } from "../UI/Button";
import { Title } from "../UI/title/Title";
import styled from "styled-components";
import { BsBookmarkHeart, BsBookmarkStarFill } from "react-icons/bs";

export const BookList = ({ books, onToggle, onDelete }) => {
	return (
		<Wrapper>
			<Title>Add a New Book</Title>
			<BookListContainer>
				{books.map((book, index) => (
					<BookItem key={book.id} even={index % 2 === 0}>
						<b>
							{index + 1}.{"\u00A0"}
						</b>
						<BookInfo>
							<strong>
								{book.title} {book.author}
							</strong>
						</BookInfo>
						<BookActions>
							<StarIcon onClick={() => onToggle(book.id)}>
								{book.isFavorite !== true ? (
									<BsBookmarkHeart />
								) : (
									<BsBookmarkStarFill />
								)}
							</StarIcon>
							<Button onClick={() => onDelete(book.id)} variant="outlined">
								Delete
							</Button>
						</BookActions>
					</BookItem>
				))}
			</BookListContainer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 20px;
	margin: 20px;
	background-color: #f2f2f2;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BookListContainer = styled.ul`
	padding: 0;
	margin: 20px -20px;
	list-style: none;
`;

const BookItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: auto;
	padding: 10px 20px;
	border-bottom: 1px solid #ccc;
	background-color: ${(props) => (props.even ? "#f2f2f2" : "#fff")};
	&:hover {
		background-color: #dbe4f8;
	}
`;

const BookInfo = styled.div`
	flex: 1;
	text-align: left;
`;

const BookActions = styled.div`
	display: flex;
	align-items: center;
`;

const StarIcon = styled.span`
	width: 24px;
	height: 24px;
	margin: 0 20px;
	cursor: pointer;
	transition: color 0.3s ease;
	color: #fca510;
`;
