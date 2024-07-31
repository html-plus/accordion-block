<?php
/**
 * Plugin Name:       Accordion Block
 * Description:       Accordion Block for Gutenberg editor.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.1.1
 * Author:            HTML+
 * Author URI: 				https://html-plus.in.ua/create-custom-gutenberg-blocka-for-wordpress/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       accordion-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_accordion_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_accordion_block_block_init' );
