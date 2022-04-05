import { useContext } from 'react'
import { AppContext } from '../../../context'
import { IoIosMoon, IoIosSunny } from "react-icons/io"
import styled from 'styled-components'

const ThemeChanger = styled.div`
	cursor: pointer;
	margin-left: auto;

	svg.dark path {
		fill: var(--dark);
	}

	svg.yellow path {
		fill: var(--yellow);
	}
`;

const Theme = () => {
	const {theme, toggleTheme} = useContext(AppContext);

	const onToggleTheme = e => {
		const { theme } = e.currentTarget.dataset;
		toggleTheme(theme);
	}

	return (
		<ThemeChanger
			data-theme={theme === 'light' ? 'dark' : 'light'}
			onClick={onToggleTheme}
		>
			{theme === 'light' ? (
				<IoIosMoon size={20} className="dark" />
			) : (
				<IoIosSunny size={20} className="yellow" />
			)}
		</ThemeChanger>
	)
}

export default Theme
