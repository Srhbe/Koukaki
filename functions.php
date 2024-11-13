<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'style', get_stylesheet_directory_uri() . '/css/theme.css' );
}

function enqueue_swiper_scripts() {
    // Chemin vers les fichiers CSS et JS
    wp_enqueue_style('swiper-css', get_theme_file_uri('assets/swiper/swiper-bundle.min.css'));
    wp_enqueue_script('swiper-js', get_theme_file_uri('assets/swiper/swiper-bundle.min.js'), array(), null, true);
    wp_enqueue_script('script-js', get_theme_file_uri('js/script.js'), array(), null, true);

}

add_action('wp_enqueue_scripts', 'enqueue_swiper_scripts');
// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}