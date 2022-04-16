import dayjs from "dayjs";
import { IMessageItem } from "../../../types";
import Icon from '../../Icon'
import { StyledItem } from './styled'

interface Props {
	isReverse: boolean
	messages: IMessageItem[]
	avatar: string
}

const Item: React.FC<Props> = ({ isReverse, messages, avatar }) => {
	return (
		<StyledItem isReverse={isReverse}>
			<img src={avatar} alt="Avatar" className="avatar" />
			<div className="list">
				{messages.map(item => (
					<div className="list-item" key={item.id}>
						<div className="text">{item.text}</div>
						<div className="time">{dayjs(item.date).format("HH:mm")}</div>
						<Icon
							size={15}
							className="message-status"
							name={item.status === "sended" ? "MessageSended" : "MessageReaded"}
						/>
					</div>
				))}
			</div>
		</StyledItem>
	)
}

export default Item
