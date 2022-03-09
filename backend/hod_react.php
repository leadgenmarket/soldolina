<?php
$main_dir = 'hod';
$years = scandir("images/{$main_dir}/");
$years = array_reverse($years);
$struct = array();
$hod_photos = array();
foreach ($years as $year) {
    if ($year == '.' || $year == '..') continue;
    $struct[$year] = array();
    $monthes = scandir("images/{$main_dir}/{$year}");
    foreach ($monthes as $month) {
        if ($month == '.' || $month == '..') continue;
        $struct[$year][$month] = $month;
        $photos = scandir("images/{$main_dir}/{$year}/{$month}");
        natsort($photos);
        foreach ($photos as $photo) {
            if ($photo == '.' || $photo == '..' || strpos($photo, '_m') > 0) continue;
            $hod_photos["{$year}_{$month}"][] = "images/{$main_dir}/{$year}/{$month}/{$photo}";
        }
    }
}
//arsort($struct);
foreach ($struct as $key => $year) {
    natsort($struct[$key]);
    $struct[$key] = array_reverse($struct[$key], true);
}
$videos = array(
    /*2021 => array(
        5 => array(
            array(
                "prew" => "images/videos/youtube_2405.jpg",
                "href" => "https://www.youtube.com/embed/fES7SuPljZA",
            )
        ),
        6 => array(
            array(
                "prew" => "images/videos/youtube_2406.jpg",
                "href" => "https://www.youtube.com/embed/thxn3SAAhGw",
            )
        ),
        7 => array(
            array(
                "prew" => "images/videos/youtube_1608.jpg",
                "href" => "https://www.youtube.com/embed/IRAlIPw3Rbk",
            )
        ),
        8 => array(
            array(
                "prew" => "images/videos/youtube_2408.jpg",
                "href" => "https://www.youtube.com/embed/64deCDOmYjI",
            )
        ),
        9 => array(
            array(
                "prew" => "images/videos/youtube_0710.jpg",
                "href" => "https://www.youtube.com/embed/N9b1JwcsckY",
            )
        ),
        10 => array(
            array(
                "prew" => "images/videos/youtube_1111.jpg",
                "href" => "https://www.youtube.com/embed/m2E1JZdoUpo",
            )
        ),
        11 => array(
            array(
                "prew" => "images/videos/youtube_11.2021.jpg",
                "href" => "https://www.youtube.com/embed/tHCTdSFsx0Y",
            )
        ),
        12 => array(
            array(
                "prew" => "images/videos/youtube_12.2021.jpg",
                "href" => "https://www.youtube.com/embed/No06pXc3gPo",
            )
        )
    )*/);
header('Access-Control-Allow-Origin: *');
die(json_encode(array("struct" => $struct, "photos" => $hod_photos, "videos" => $videos)));
