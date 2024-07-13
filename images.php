<?php
$imagesFolder = 'images/';
$images = glob($imagesFolder . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);
echo json_encode($images);
?>
