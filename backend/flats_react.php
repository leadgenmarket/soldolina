<?
include "flats.php";
header('Access-Control-Allow-Origin: *');
if (isset($_REQUEST['id'])){
    foreach($flats as $flat){
        if ($flat['id'] === $_REQUEST['id']){
            die(json_encode($flat));
        }
    }
} else {
    die(json_encode($flats));
}