import { __ } from '@wordpress/i18n';
const {useSelect, dispatch, select} = wp.data;
import { PanelBody, RangeControl} from '@wordpress/components';
import { InnerBlocks, useBlockProps, useInnerBlocksProps, RichText, 
	InspectorControls, ColorPalette, PanelColorSettings, ContrastChecker } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({ clientId, attributes, setAttributes }) {
	
	const blockProps = useBlockProps();
	//const innerBlocksProps = useInnerBlocksProps( blockProps );
	const {heading, 
		titleTextColor,
		contentTextColor,
		titleBgColor,
		contentBgColor,
 } = attributes;
	
	return (
		<div {...blockProps}>
			<RichText
				tagName='h2'
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
				value={heading}
				onChange={(newVal) => setAttributes({heading: newVal})}
				placeholder="Title for Accordion Section"
			/>
			<InspectorControls>
				<PanelBody
					title={__('Accordion Block Settings', 'accordion-block')}
					initialOpen={true}
				>
					<RangeControl
						label={__('Number of slides', 'accordion-block')}
						value={attributes.numSlides}
						onChange={(val) => setAttributes({ numSlides: val })}
						min={1}
						max={10}
					/>
					<fieldset>
						<legend className="blocks-base-control__label">
								{ __( 'Content Text color', 'accordion-block' ) }
						</legend>
						<ColorPalette value={ contentTextColor }// Element Tag for Gutenberg standard colour selector
							// onChange event callback
								onChange={ ( hexColor ) => 	setAttributes( { contentTextColor: hexColor } ) }
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
								{ __( 'Content Background color', 'accordion-block' ) }
						</legend>
						<ColorPalette value={ contentBgColor }
								onChange={ ( hexColor ) => 	setAttributes( { contentBgColor: hexColor } )}
						/>
					</fieldset>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Block Color Settings', 'accordion-block' ) }
					icon="art"
					initialOpen={ false }
					colorSettings={ [
							{
									value: titleTextColor,
									onChange: ( hexColor ) =>  setAttributes( { titleTextColor: hexColor } ),
									label: __( 'Title Font Color', 'accordion-block' ),
							},
							{
									value: titleBgColor,
									onChange: ( hexColor ) =>  setAttributes( { titleBgColor: hexColor } ),
									label: __( 'Title Background Color', 'accordion-block' ),
							}
					] }>
					<ContrastChecker
							isLargeText="false"
							textColor={titleTextColor}
							backgroundColor={titleBgColor}
					/>
				</PanelColorSettings>
			</InspectorControls>
			<InnerBlocks allowedBlocks={ ['tempo/panel'] } 
				template={[
					[	'tempo/panel', {title: __("Accordion Item Title 1", 'accordion-block') }	],
					[	'tempo/panel', {title: __("Accordion Item Title 2", 'accordion-block') }	]
				]} />
		</div>
	);
}
