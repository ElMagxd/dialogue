import classNames from "classnames";
import dayjs from "dayjs";
import Icon from '../../Icon'

import './styles.css'

const Item = ({ isReverse, messages, avatar }) => {
	return (
		<div className={classNames('item', {reverse: isReverse})}>
			<img src={avatar} alt="Avatar" className="avatar" />
			<div className="list">
				{messages.map(item => (
					<div className="list-item" key={item.id}>
						<div className="text">{item.text}</div>
						<div className="time">{dayjs(item.date).format("HH:mm")}</div>
						<Icon
							size={15}
							className="message-status"
							name={item.satatus === "sended" ? "MessageSended" : "MessageReaded"}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Item
