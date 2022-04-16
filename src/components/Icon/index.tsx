import React from 'react'
import * as icons from '../../icons'

interface Props {
	size?: [number, number] | number
	name: keyof typeof icons
	className?: string
}

const Icon: React.FC<Props>  = ({ size = 20, name, className = '' }) => {
	const [width, height] = Array.isArray(size) ? size : [size, size];
	const [icon, viewBox] = icons[name];

	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox={viewBox}
			dangerouslySetInnerHTML={{__html: icon}}
		/>
	)
}

export default Icon
