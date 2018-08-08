<header class="header" data-module="header">

	<div class="header-logo-1">
		
	</div>
	
	<?php if( have_rows('social_media_links', 'options') ): ?>
		<nav class="social_media_links">
			<ul>
				<?php while( have_rows('social_media_links', 'options') ): the_row(); ?>
					<li class="<?php echo the_sub_field('label'); ?>">
						<a href="<?php echo the_sub_field('url'); ?>" target="_blank">
							<?php echo the_sub_field('label'); ?>
						</a>
					</li>
				<?php endwhile; ?>
			</ul>
		</nav>
	<?php endif; ?>

	<div class="header-logo-2">LOGO</div>

</header>


<div class="preloader"></div>


<!-- MODAL -->
	<div class="modal loading">

		<div class="modal__box">

			<a class="modal__box__close">
				<span class="modal__box__icon"></span>
			</a>

			<div class="modal__content">

				<article>
					<h1>TEST</h1>

					<figure>
						<img src="" alt="">
					</figure>
					
					<p></p>
				</article>

			</div>
			
		</div>
		
	</div>