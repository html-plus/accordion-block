import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {


	const { heading, alignment, 
		titleTextColor,
		contentTextColor,
		titleBgColor,
		contentBgColor } = attributes;


	const accordionStyleVars = {
		"--tempo-accordion-title-bgcolor": titleBgColor,
		"--tempo-accordion-title-color": titleTextColor,
		"--tempo-accordion-font-color": contentTextColor,
		"--tempo-accordion-panel-background-color": contentBgColor
	};

	const blockProps = useBlockProps.save({ style: accordionStyleVars });

	return (
		<div {...blockProps}>
			{heading?.trim().length > 0 && (<RichText.Content tagName="h2"
				value={heading} style={ { textAlign: alignment } } />)}
			<InnerBlocks.Content />
		</div>
	)
};
