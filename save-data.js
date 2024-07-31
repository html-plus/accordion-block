import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export default function Save({ attributes, setAttributes }) {

    const { title, isAllOpen } = attributes;

    const blockProps = useBlockProps.save({
        className: `accordion-item`
    });
    
 
    return (
      <div {...blockProps}>
		<div className="accordion-heading" data-all-open={isAllOpen}>
            <RichText.Content tagName="div" 
                 className="accordion-title" 
                 value={ title } />
            <div class="switcher-up-down">
                <div class="horizontal"></div>
                <div class="vertical"></div>
            </div>
        </div>

        <div className='accordion-content'>
            <InnerBlocks.Content />           
        </div>
	  </div>
    )
};

