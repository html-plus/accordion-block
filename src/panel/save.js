import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export default function Save({ clientId, attributes }) {

    const { title } = attributes;

    const blockProps = useBlockProps.save({
        className: `accordion-item`
    });
    
    return (
      <div {...blockProps}>
		<div className="accordion-heading" style={ {
				backgroundColor: attributes.titleBgColor,
				color: attributes.titleTextColor,
			} }>
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

