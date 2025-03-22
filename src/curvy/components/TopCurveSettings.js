import { ColorPalette } from "@wordpress/block-editor";
import {
	ToggleControl,
	HorizontalRule,
	RangeControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import metadata from "../block.json";

export const TopCurveSettings = ({ attributes, setAttributes }) => {
	return (
		<>
			<HorizontalRule />
			<RangeControl
				label={__("Width", metadata.textdomain)}
				min={100}
				max={300}
				value={attributes.topWidth || 100}
				onChange={(value) => {
					setAttributes({ topWidth: parseInt(value) });
				}}
			/>
			<RangeControl
				label={__("Height", metadata.textdomain)}
				min={0}
				max={200}
				value={attributes.topHeight}
				onChange={(value) => {
					setAttributes({ topHeight: parseInt(value) });
				}}
			/>
			<HorizontalRule />
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={attributes.topFlipX}
					onChange={(value) => setAttributes({ topFlipX: value })}
				/>
				<span>{__("Flip horizontally", metadata.textdomain)}</span>
			</div>
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={attributes.topFlipY}
					onChange={(value) => setAttributes({ topFlipY: value })}
				/>
				<span>{__("Flip vertically", metadata.textdomain)}</span>
			</div>
			<HorizontalRule />
			<div>
				<label>{__("Curve color", metadata.textdomain)}</label>
				<ColorPalette
					value={attributes.topColor}
					onChange={(value) => {
						setAttributes({ topColor: value });
					}}
				/>
			</div>
		</>
	);
};
