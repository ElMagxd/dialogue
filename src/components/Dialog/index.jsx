import { useEffect, useReducer, useRef } from "react"
import Item from "./Item"
import Title from "./Title"
import { normalizeDialog } from "./helpers"
import reducer from './reducer'
import styled from "styled-components"

const StyledDialog = styled.div`
	flex-grow: 1;
	position: relative;
`;

const Overflow = styled.div`
	padding: 20px 20px 30px;
	position: absolute;
	width: 100%;
	max-height: 100%;
	left: 0;
	bottom: 0;
	overflow: auto;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const Dialog = ({ newMessage }) => {
	const dialogRef = useRef();
	const [state, dispatch] = useReducer(reducer, {
		messages: []
	});

	/**
	 * Fetch messages
	 */
	const getMessages = () => {
		fetch(`${window.location.href}/db.json`)
			.then(response => response.json())
			.then(messages => dispatch({
				type: "add-message",
				payload: messages
			}));
	}
	useEffect(() => {
		getMessages()
	}, [])

	/**
	 * Add new message and set it to readed after 1s
	 */
	useEffect(() => {
		if (newMessage) {
			dispatch({
				type: "add-message",
				payload: newMessage
			})

			setTimeout(() => {
				dispatch({
					type: "update-status",
					payload: {
						id: newMessage.id,
						satatus: "readed"
					}
				});
			}, 1000);
		}
	}, [newMessage]);

	/**
	 * Scroll down to the latest message
	 */
	useEffect(() => {
		dialogRef.current.scrollTop = dialogRef.current.scrollHeight;
	}, [state.messages.length])

	const normalizedDialog = normalizeDialog(state.messages);

	return (
		<StyledDialog>
			<Overflow ref={dialogRef}>
				{normalizedDialog.map(item => (
					item.type ==='message' ? (
						<Item {...item} key={item.id} />
					) : (
						<Title key={item.id} date={item.date} />
					)
				))}
			</Overflow>
		</StyledDialog>
	)
}

export default Dialog
