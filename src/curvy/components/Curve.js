export const Curve = ({ width, height, flipX, flipY, color, isBottom }) => {
	const path =
		"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z";
	const invertedPath =
		"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z";
	return (
		<div
			style={{
				position: "absolute",
				top: !isBottom ? 0 : "initial",
				bottom: isBottom ? 0 : "initial",
				left: 0,
				width: "100%",
				overflow: "hidden",
				height: `${height}px`,
				transform: `scaleX(${flipX ? -1 : 1}) rotate(${
					flipY ? "180deg" : "0"
				}) scaleY(${isBottom ? -1 : 1})`,
			}}
		>
			<svg
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					height: `${height}px`,
					width: `${width}%`,
				}}
				preserveAspectRatio="none"
				viewBox="0 0 1200 120"
			>
				<path
					style={{ fill: color || "white" }}
					d={flipY ? invertedPath : path}
				></path>
			</svg>
		</div>
	);
};
