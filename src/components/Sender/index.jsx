import { useState } from 'react'
import { defaultAvatarURL } from '../../data'
import styled from 'styled-components'

const SendForm = styled.form`
	display: flex;
	padding: 20px;
	border-top: 1px solid var(--border);

	input {
		width: 100%;
		height: 100%;
		border: 1px solid var(--border);
		background-color: var(--accent-1);
		padding: .9rem 1.2rem;
		transition: border-color 200ms;
		border-radius: 50px;
		outline: none;
		color: var(--color);

		&:focus {
			border-color: var(--primary);
		}
	}

	button {
		height: 100%;
		padding: .9rem 1.5rem;
		border-radius: 50px;
		cursor: pointer;
		margin-left: 1rem;
		outline: none;
		border: 1px solid var(--primary);
		background-color: var(--primary);
		color: var(--primary-color);
		transition: background-color .3s ease;

		&:hover {
			background-color: var(--primary-lighten);
		}
	}
`;

const Sender = ({ onAddMessage }) => {
	const [value, setValue] = useState("");

	const onChange = e => setValue(e.target.value);

	const onSubmit = e => {
		e.preventDefault();

		onAddMessage({
			id: Date.now(),
			avatar: defaultAvatarURL,
			message: value,
			date: new Date().toISOString(),
			is: 'my',
			status: 'sended',
		});

		setValue("");
	}


	return (
		<SendForm onSubmit={onSubmit}>
			<input
				placeholder="Enter your message"
				value={value}
				onChange={onChange}
				required
			/>
			<button>Send</button>
		</SendForm>
	)
}

export default Sender
