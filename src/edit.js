import { __ } from '@wordpress/i18n';

import {
	InnerBlocks, useBlockProps, RichText, BlockControls, AlignmentToolbar,
	InspectorControls, PanelColorSettings, ContrastChecker
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const { heading,
		alignment,
		titleTextColor,
		contentTextColor,
		titleBgColor,
		contentBgColor,
	} = attributes;

	const accordionStyleVars = {
		"--tempo-accordion-title-bgcolor": titleBgColor,
		"--tempo-accordion-title-color": titleTextColor,
		"--tempo-accordion-font-color": contentTextColor,
		"--tempo-accordion-panel-background-color": contentBgColor
	};

	const blockProps = useBlockProps({ style: accordionStyleVars });
	return (
		<div {...blockProps}>
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={(newVal) => setAttributes({ alignment: newVal })} />
			</BlockControls>
			<RichText
				tagName='h2'
				allowedFormats={['core/bold', 'core/italic', 'core/text-color']}
				value={heading}
				onChange={(newVal) => setAttributes({ heading: newVal })}
				placeholder="Title for Accordion Section"
				style={{ textAlign: alignment }}
			/>
			<InspectorControls>
				<PanelColorSettings
					title={__('Panel Title Color Settings', 'accordion-block')}
					icon="art"
					initialOpen={false}
					colorSettings={[
						{
							value: titleTextColor,
							onChange: (hexColor) => setAttributes({ titleTextColor: hexColor }),
							label: __('Title Font Color', 'accordion-block'),
						},
						{
							value: titleBgColor,
							onChange: (hexColor) => setAttributes({ titleBgColor: hexColor }),
							label: __('Title Background Color', 'accordion-block'),
						}
					]}>
					<ContrastChecker
						isLargeText="false"
						textColor={titleTextColor}
						backgroundColor={titleBgColor}
					/>
				</PanelColorSettings>
				<PanelColorSettings
					title={__('Panel Content Color Settings', 'accordion-block')}
					icon="art"
					initialOpen={false}
					colorSettings={[
						{
							value: contentTextColor,
							onChange: (hexColor) => setAttributes({ contentTextColor: hexColor }),
							label: __('Content Font Color', 'accordion-block'),
						},
						{
							value: contentBgColor,
							onChange: (hexColor) => setAttributes({ contentBgColor: hexColor }),
							label: __('Content Background Color', 'accordion-block'),
						}
					]}>
					<ContrastChecker
						isLargeText="false"
						textColor={contentTextColor}
						backgroundColor={contentBgColor}
					/>
				</PanelColorSettings>
			</InspectorControls>
			<InnerBlocks allowedBlocks={['tempo/panel']}
				template={[
					['tempo/panel', { title: __("Accordion Item Title 1", 'accordion-block') }],
					['tempo/panel', { title: __("Accordion Item Title 2", 'accordion-block') }]
				]} />
		</div>
	);
}