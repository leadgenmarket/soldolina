<?php
$flats = array(
    array(
        "class" => "3",
        "info" => "70,13",
		"zhil" => "48,25",
        "price" => "3,4",
        "img" => "img/offer_img1.png",
    ),
    array(
        "class" => "2",
        "info" => "77,29",
		"zhil" => "48,25",
        "price" => "4,4",
        "img" => "img/offer_img2.png",
    ),
    array(
        "class" => "1",
        "info" => "45,10",
		"zhil" => "19,38",
        "price" => "6,4",
        "img" => "img/offer_img3.png",
    ),
);

header('Access-Control-Allow-Origin: *');
die(json_encode($flats));