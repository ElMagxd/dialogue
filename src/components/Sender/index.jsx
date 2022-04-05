import { useState } from 'react'
import { defaultAvatarURL } from '../../data'
import './styles.css'

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
		<form className="sender" onSubmit={onSubmit}>
			<input
				placeholder="Enter your message"
				value={value}
				onChange={onChange}
				required
			/>
			<button>Send</button>
		</form>
	)
}

export default Sender
