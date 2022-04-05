export default function reducer(state, action) {
	switch (action.type) {
		case "add-message":
			return {
				...state,
				messages: state.messages.concat(action.payload)
			}
		case 'update-status':
			return {
				...state,
				messages: state.messages.map(message => {
					if (message.id === action.payload.id) {
						return {
							...message,
							status: action.payload.status
						}
					}

					return message;
				})
			}
		default:
			throw new Error("Unknown action type");
	}
}
