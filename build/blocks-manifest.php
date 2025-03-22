<?php
// This file is generated. Do not modify it manually.
return array(
	'curvy' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks/curvy',
		'version' => '0.1.0',
		'title' => 'Curvy',
		'category' => 'widgets',
		'variations' => array(
			array(
				'name' => 'top-only',
				'title' => 'Curvy - Top only',
				'attributes' => array(
					'enableTopCurve' => true,
					'enableBottomCurve' => false
				)
			),
			array(
				'name' => 'bottom-only',
				'title' => 'Curvy - Bottom only',
				'attributes' => array(
					'enableTopCurve' => false,
					'enableBottomCurve' => true
				)
			)
		),
		'attributes' => array(
			'enableTopCurve' => array(
				'type' => 'boolean',
				'default' => true
			),
			'topWidth' => array(
				'type' => 'number',
				'default' => 100
			),
			'topHeight' => array(
				'type' => 'number',
				'default' => 100
			),
			'topFlipX' => array(
				'type' => 'boolean',
				'default' => false
			),
			'topFlipY' => array(
				'type' => 'boolean',
				'default' => false
			),
			'topColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'style' => array(
				'type' => 'object',
				'default' => array(
					'color' => array(
						'background' => '#ec4899'
					),
					'spacing' => array(
						'padding' => array(
							'top' => '250px',
							'bottom' => '250px',
							'left' => '50px',
							'right' => '50px'
						)
					)
				)
			),
			'enableBottomCurve' => array(
				'type' => 'boolean',
				'default' => true
			),
			'bottomWidth' => array(
				'type' => 'number',
				'default' => 100
			),
			'bottomHeight' => array(
				'type' => 'number',
				'default' => 100
			),
			'bottomFlipX' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bottomFlipY' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bottomColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			)
		),
		'icon' => 'smiley',
		'description' => 'Curvy shape divider to make page sections more interesting',
		'example' => array(
			'innerBlocks' => array(
				array(
					'name' => 'core/heading',
					'attributes' => array(
						'content' => 'Hi there!'
					)
				),
				array(
					'name' => 'core/paragraph',
					'attributes' => array(
						'content' => 'This is an example curvy block'
					)
				)
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'link' => true,
				'text' => true
			),
			'spacing' => array(
				'padding' => true
			)
		),
		'textdomain' => 'curvy',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	)
);
