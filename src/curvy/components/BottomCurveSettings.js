import { ColorPalette } from "@wordpress/block-editor";
import {
	ToggleControl,
	HorizontalRule,
	RangeControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import metadata from "../block.json";

export const BottomCurveSettings = ({ attributes, setAttributes }) => {
	return (
		<>
			<HorizontalRule />
			<RangeControl
				label={__("Width", metadata.textdomain)}
				min={100}
				max={300}
				value={attributes.bottomWidth || 100}
				onChange={(value) => {
					setAttributes({ bottomWidth: parseInt(value) });
				}}
			/>
			<RangeControl
				label={__("Height", metadata.textdomain)}
				min={0}
				max={200}
				value={attributes.bottomHeight}
				onChange={(value) => {
					setAttributes({ bottomHeight: parseInt(value) });
				}}
			/>
			<HorizontalRule />
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={attributes.bottomFlipX}
					onChange={(value) => setAttributes({ bottomFlipX: value })}
				/>
				<span>{__("Flip horizontally", metadata.textdomain)}</span>
			</div>
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={attributes.bottomFlipY}
					onChange={(value) => setAttributes({ bottomFlipY: value })}
				/>
				<span>{__("Flip vertically", metadata.textdomain)}</span>
			</div>
			<HorizontalRule />
			<div>
				<label>{__("Curve color", metadata.textdomain)}</label>
				<ColorPalette
					value={attributes.bottomColor}
					onChange={(value) => {
						setAttributes({ bottomColor: value });
					}}
				/>
			</div>
		</>
	);
};
