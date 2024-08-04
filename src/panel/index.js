import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import Edit from './edit';
import Save from './save';


registerBlockType( 'tempo/panel', {
  title: __('Accordion Panel', 'accordion-block'),
  description: __('Title and text panel in accordion', 'accordion-block'),
  icon: 'welcome-write-blog', 
  parent: ['tempo/accordion-block'],
  supports: {
	html: true,
	reusable: false
	},
  attributes: {
    title: {
	type: 'string',
    },
    isOpen: {
	type: 'boolean',
	default: true
    },
   
  },
  edit: Edit,
  save: Save,
} );
