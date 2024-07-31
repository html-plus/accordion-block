import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, useInnerBlocksProps, RichText } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	//const innerBlocksProps = useInnerBlocksProps( blockProps );
	const {heading} = attributes;
	
	return (
		<div {...blockProps}>
			<RichText
				tagName='h2'
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
				value={heading}
				onChange={(newVal) => setAttributes({heading: newVal})}
				placeholder="Title for Accordion Section"
			/>
			<InnerBlocks allowedBlocks={ ['tempo/panel'] } 
				template={[
					[	'tempo/panel', {title: __("Accordion Item Title 1", 'accordion-block') }	],
					[	'tempo/panel', {title: __("Accordion Item Title 2", 'accordion-block') }	]
				]} />
		</div>
	);
}
