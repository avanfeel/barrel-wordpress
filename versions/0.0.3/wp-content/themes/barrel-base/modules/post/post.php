
<?php


	$cat = get_the_category()[0];

	switch ($cat->slug) {
		case 'video':
		case 'recipe':
			$type = $cat->slug;
			break;
		default:
			$type = 'article';
			break;
	}


	if(is_front_page()):
		$class = "type-$type post".($number>0?' hidden':'');
	else:
		$class = "";
	endif; ?>

<article class="<?php echo $class;  ?>" data-module="post">


  <header>


<?php if(is_front_page()): ?>

    

  	<?php

		$image = get_the_post_thumbnail_url( get_the_ID(), 'medium' );

		the_module('image', array(
			'image' => $image
		));
		?>

		<div class="post__text">

			<span class="__icon-wrapper"><span class="__icon"></span></span>	

			<span class="post__date"><?php echo get_the_date('F d'); ?></span>

			<h1><?php the_title(); ?></h1>

<?php if($number == 0):  ?>
			<p><?php the_excerpt(); ?></p>
<?php endif; ?>

    <a class="post__readmore" href="<?php the_permalink(); ?>"></a>


    	</div>


<?php else: ?>

	<h1><?php the_title(); ?></h1>

	<?php

	the_post_thumbnail();	?>

	

<?php endif; ?>


  </header>



<?php if(is_single()): ?>
  <main>
    <?php the_content(); ?>
  </main>

  <footer></footer>

<?php endif; ?>

</article>
