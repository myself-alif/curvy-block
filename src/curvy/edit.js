/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import metadata from "./block.json";
import { Curve } from "./components/Curve";
import { TopCurveSettings } from "./components/TopCurveSettings";
import { BottomCurveSettings } from "./components/BottomCurveSettings";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { className, ...blockProps } = useBlockProps();
	return (
		<>
			<section className={`${className} alignfull`} {...blockProps}>
				{attributes.enableTopCurve && (
					<Curve
						width={attributes.topWidth}
						height={attributes.topHeight}
						flipX={attributes.topFlipX}
						flipY={attributes.topFlipY}
						color={attributes.topColor}
					/>
				)}
				<InnerBlocks />
				{attributes.enableBottomCurve && (
					<Curve
						isBottom
						width={attributes.bottomWidth}
						height={attributes.bottomHeight}
						flipX={attributes.bottomFlipX}
						flipY={attributes.bottomFlipY}
						color={attributes.bottomColor}
					/>
				)}
			</section>
			<InspectorControls>
				<PanelBody title={__("Top curve", metadata.textdomain)}>
					<div style={{ display: "flex" }}>
						<ToggleControl
							checked={attributes.enableTopCurve}
							onChange={(value) => setAttributes({ enableTopCurve: value })}
						/>
						<span>{__("Enable top curve", metadata.textdomain)}</span>
					</div>
					{attributes.enableTopCurve && (
						<TopCurveSettings
							attributes={attributes}
							setAttributes={setAttributes}
						/>
					)}
				</PanelBody>
				<PanelBody title={__("Enable bottom curve", metadata.textdomain)}>
					<div style={{ display: "flex" }}>
						<ToggleControl
							checked={attributes.enableBottomCurve}
							onChange={(value) => setAttributes({ enableBottomCurve: value })}
						/>
						<span>{__("Enable bottom curve", metadata.textdomain)}</span>
					</div>
					{attributes.enableBottomCurve && (
						<BottomCurveSettings
							attributes={attributes}
							setAttributes={setAttributes}
						/>
					)}
				</PanelBody>
			</InspectorControls>
		</>
	);
}
