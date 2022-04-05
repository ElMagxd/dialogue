import { useContext } from 'react'
import { AppContext } from '../../../context'
import { IoIosMoon, IoIosSunny } from "react-icons/io"
import './styles.css'

const Theme = () => {
	const {theme, toggleTheme} = useContext(AppContext);

	const onToggleTheme = e => {
		const { theme } = e.currentTarget.dataset;
		toggleTheme(theme);
	}

	return (
		<div
			className="theme"
			data-theme={theme === 'light' ? 'dark' : 'light'}
			onClick={onToggleTheme}
		>
			{theme === 'light' ? (
				<IoIosMoon size={20} className="dark" />
			) : (
				<IoIosSunny size={20} className="yellow" />
			)}
		</div>
	)
}

export default Theme
