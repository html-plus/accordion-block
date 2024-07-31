import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
	
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
				<div className="accordion-heading">
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
				<div className='accordion-content'>
					<InnerBlocks 
							allowedBlocks={ ['core/image', 'core/gallery', 'core/media-text', 'core/paragraph', 'core/button', 'core/buttons', 'core/code', 'core/list', 'core/embed' ]}
							template={ BLOCKS_TEMPLATE }
							//defaultBlock={ DEFAULT_BLOCK }
    					//directInsert={ true } defaultBlock={ DEFAULT_BLOCK }
    					//directInsert={ true } 		
							/> 
				</div>         
			</div>
		</div>
	);
}