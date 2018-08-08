<?php
  get_header();

  $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

  if($paged == 1) the_module('hero');

  echo "<section class='articles'>";

  while ( have_posts() ) {

    the_post();

    the_module('post', ['number' => ++$number]);

  }

  echo "</section>";

  get_footer();
?>
