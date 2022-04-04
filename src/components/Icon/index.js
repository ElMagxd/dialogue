import * as icons from '../../icons'

const Icon = ({ size = 20, name, className = '' }) => {
	const [width, height] = Array.isArray(size) ? size : [size, size];
	const [icon, viewBox] = icons[name];

	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox={viewBox}
			data-name={name}
		>
			{icon}
		</svg>
	)
}

export default Icon
