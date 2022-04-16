import dayjs from 'dayjs'
import Calendar from 'dayjs/plugin/calendar'
import styled from 'styled-components'

interface Props {
	date: string
}

const DataTitle = styled.div`
	margin: 20px 0;
	color: var(--accent-2);
	text-align: center;
`;

dayjs.extend(Calendar)

const Title: React.FC<Props> = ({ date }) => (
	<DataTitle>
		{dayjs(date).calendar(null, {
			sameDay: '[Today]',
			lastWeek: 'DD MMMM',
			sameElse: 'DD MMMM YYYY',
		})}
	</DataTitle>
)

export default Title
