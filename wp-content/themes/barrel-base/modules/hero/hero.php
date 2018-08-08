<section class="hero" data-module="hero">
  <main>

  		<div class="hero__text">
			<h1><?php bloginfo( 'name' ); ?></h1>
  			<p><?php bloginfo( 'description' ); ?></p>
  		</div>

  		<div class="hero__image">
  			
  		</div>

		<?php
		
		// $image = get_the_post_thumbnail_url( $post->ID, 'large' );

		$image = get_stylesheet_directory_uri() . '/assets/photography/www.knobcreek.com-1310894113736742.png';

		
		// the_module('image', array(
		// 	'image' => $image
		// ));
		?>

  </main>


<?php if ( have_posts() ) {

    	the_post();

    	the_module('post', ['number' => 0]);

    } ?>



</section>
