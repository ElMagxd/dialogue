import { IServerMessage, Status } from "../../types"

interface AddMessageAction {
	type: 'add-message'
	payload: IServerMessage
}

interface UpdateStatusAction {
	type: 'update-status'
	payload: {
		id: number
		status: Status
	}
}

type Action = AddMessageAction | UpdateStatusAction;

interface State {
	messages: IServerMessage[]
}

export default function reducer(state: State, action: Action) {
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
