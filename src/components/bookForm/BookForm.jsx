import React, { useState } from "react";
import { Button } from "../UI/Button";
import { FormInput } from "../UI/FormInput";
import { Title } from "../UI/title/Title";
import styled from "styled-components";

export const BookForm = ({ onCancel, onAddBook }) => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [isError, setIsError] = useState(false);

	const onSubmitHandler = (event) => {
		event.preventDefault();

		if (title.length < 3 || author.length < 3) {
			setIsError(true);
			return;
		}

		setIsError(false);
		const newBook = {
			title,
			author,
			isFavorite: false,
			id: Math.floor(Math.random() * 1000),
		};
		onAddBook(newBook);
		setTitle("");
		setAuthor("");
	};

	const titleValueHandler = (event) => {
		setTitle(event.target.value);
	};

	const authorValueHandler = (event) => {
		setAuthor(event.target.value);
	};

	return (
		<Wrapper>
			<Form onSubmit={onSubmitHandler}>
				<Title>Add a New Book</Title>
				<FormInput
					value={title}
					onChange={titleValueHandler}
					id="f1"
					labelText="Title"
					error={isError}
				/>
				<FormInput
					value={author}
					onChange={authorValueHandler}
					id="f2"
					labelText="Author"
					error={isError}
				/>
				<ButtonContainer>
					<Button type="submit">Add Book</Button>
					<Button type="button">Add Random</Button>
					<Button type="button">Add Random via API</Button>
					<Button type="button" onClick={onCancel} variant="outlined">
						Cancel
					</Button>
				</ButtonContainer>
			</Form>
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

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 10px;
`;
