import {  useInnerBlocksProps, RichText, InnerBlocks, useBlockProps  } from '@wordpress/block-editor';

export default function save({ attributes }) {

	 const blockProps = useBlockProps.save();
	 const {heading, 
		titleTextColor,
		contentTextColor,
		titleBgColor,
		contentBgColor,
	blockColor } = attributes;
		// const innerBlocksProps = useInnerBlocksProps.save( blockProps );
		console.log('title bgColor',titleBgColor);
    return (
			<div {...blockProps}>
				{ attributes.heading?.trim().length>0 && (<RichText.Content tagName="h2"  
            value={ attributes.heading } />) }
				<InnerBlocks.Content />
			</div>
		)
};

