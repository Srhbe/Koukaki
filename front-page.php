<?php

get_header();
?>

    <main id="primary" class="site-main">
        <?php get_template_part('parts/banner'); ?> 
        <?php get_template_part('parts/story'); ?> 
        <?php get_template_part('parts/studio'); ?> 
        <section>
        <?php get_template_part('parts/nomination'); ?>
        </section>
    </main><!-- #main -->
<?php
get_footer();
