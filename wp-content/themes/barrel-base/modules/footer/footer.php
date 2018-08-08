<section class="footer">
	<div class="footer__social">


<?php if( have_rows('social_media_links', 'options') ): ?>	
		<ul>
<?php while( have_rows('social_media_links', 'options') ): the_row(); ?>
			<li class="<?php echo the_sub_field('label'); ?>">
				<a href="<?php echo the_sub_field('url'); ?>" target="_blank"><?php echo the_sub_field('label'); ?></a>
			</li>
		</li>
<?php endwhile; ?>
		</ul>
<?php endif; ?>

		<!-- <a href="https://www.facebook.com/sharer/sharer.php?u=http://dev.avanfeel.com/barrel/"><i class="fab fa-facebook-f"></i></a>
		<a href="https://twitter.com/home?status=http://dev.avanfeel.com/barrel/"><i class="fab fa-twitter"></i></a> -->
	</div>

	<div class="footer__logo"></div>
</section>