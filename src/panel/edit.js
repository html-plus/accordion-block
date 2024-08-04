import { __ } from '@wordpress/i18n';

import { PanelBody } from '@wordpress/components';
import { useBlockProps, RichText, InnerBlocks, 
				InspectorControls, ColorPalette } 
from '@wordpress/block-editor';

export default function Edit({ clientId, attributes, setAttributes }) {

	const parentBlockID = wp.data.select( 'core/block-editor' ).getBlockParents(clientId)[0];

  const titleTextColor = wp.data.select( 'core/block-editor' ).getBlockAttributes(parentBlockID)['titleTextColor'];
	const titleBgColor = wp.data.select( 'core/block-editor' ).getBlockAttributes(parentBlockID)['titleBgColor'];
  
  const contentTextColor = wp.data.select( 'core/block-editor' ).getBlockAttributes(parentBlockID)['contentTextColor'];
  const contentBgColor = wp.data.select( 'core/block-editor' ).getBlockAttributes(parentBlockID)['contentBgColor'];

	console.log(titleTextColor, titleBgColor, contentTextColor, contentBgColor);
	console.log(	wp.data.select( 'core/block-editor' ).getBlock(parentBlockID))
    
	const BLOCKS_TEMPLATE = [
    [ 'core/paragraph', { content: __('Accordion paragraph content', 'accordion-block') } ],
    [ 'core/paragraph', { placeholder: __('Add accordion paragraph Content', 'accordion-block') } ],
	];
	//const DEFAULT_BLOCK = { name: 'core/paragraph', attributes: { content: 'Accordion Content...' } };

  const {title, isOpen } = attributes;
	const blockProps = useBlockProps();


	return (
		<div {...blockProps}>
			<div className={`accordion-item${isOpen ? " open" : ''}`}>
				<div className="accordion-heading" style={ {
							backgroundColor: titleBgColor,
							color: titleTextColor,
					} }>
					{/* <div className="accordion-heading"> */}
					
					<RichText
						tagName='div'
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						value={title}
						onChange={(newVal) => setAttributes({title: newVal})}
						placeholder="Panel Title"
					/>
					<div className="switcher-up-down" onClick={()=>setAttributes({ isOpen: !isOpen })}>
							<div className="horizontal"></div>
							<div className="vertical"></div>
					</div>
				</div>
				<div className='accordion-content'  style={ {
							backgroundColor: contentBgColor,
							color: contentTextColor,
					} }>
					<InnerBlocks 
							allowedBlocks={ ['core/image', 'core/gallery', 'core/media-text', 'core/paragraph', 'core/button', 'core/buttons', 'core/code', 'core/list', 'core/embed' ]}
							template={ BLOCKS_TEMPLATE }		
							/> 
				</div>         
			</div>
		</div>
	);
}