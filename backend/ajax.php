<?
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
$_REQUEST = json_decode(file_get_contents('php://input'), true);
$arEmails = array(
    /*"lidcrm@yandex.ru",
  "granidarstroi@yandex.ru"*/);
$from = 'seminar@sell-top.ru';
$from_name = 'SELLTOP';
$site = $_SERVER["HTTP_HOST"];

$siteName = "ЖК «Солнечный Парк»";
// определяем город по IP
$fileSxGeoAPI = "SxGeo.php";
$fileSxGeoBD = "SxGeoCity.dat";
// получим IP
$ip = false;

if (!$ip) {
    switch (true) {
        case (isset($_SERVER["HTTP_X_REAL_IP"]) && !empty($_SERVER["HTTP_X_REAL_IP"])):
            $ip = $_SERVER["HTTP_X_REAL_IP"];
            break;
        case (isset($_SERVER["HTTP_X_FORWARDED_FOR"]) && !empty($_SERVER["HTTP_X_FORWARDED_FOR"])):
            $ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
            break;
        case (isset($_SERVER["REMOTE_ADDR"]) && !empty($_SERVER["REMOTE_ADDR"])):
            $ip = $_SERVER["REMOTE_ADDR"];
            break;
    }
}

// Первый параметр - имя файла с базой (используется бинарная БД Sypex Geo)
// Второй параметр - режим работы: 
//  SXGEO_FILE   (работа с файлом базы, режим по умолчанию); 
//  SXGEO_BATCH  (пакетная обработка, увеличивает скорость при обработке множества 
//                IP за раз);
//  SXGEO_MEMORY (кэширование БД в памяти, еще увеличивает скорость пакетной обработки, 
//                но требует больше памяти, для загрузки всей базы в память).
//$SxGeo = new SxGeo('SxGeoCity.dat', SXGEO_BATCH | SXGEO_MEMORY); // Самый быстрый режим
$vCity = 'Неопределен';
if ($ip && file_exists($fileSxGeoAPI) && file_exists($fileSxGeoBD)) {
    include($fileSxGeoAPI);
    $SxGeo = new SxGeo($fileSxGeoBD, SXGEO_FILE);
    $arCity = $SxGeo->getCityFull($ip);

    if (is_array($arCity)) {
        $vCity = '';

        $vCity .= $arCity['country']['name_ru'] . ", " . $arCity['region']['name_ru'] . ", " . $arCity['city']['name_ru'];
    }
}

$leadName = "Заявка с сайта " . $siteName; ///
$roistat =  isset($_COOKIE['roistat_visit']) ? $_COOKIE['roistat_visit'] : "не указан";
$text = $_REQUEST["text"];
$phone = htmlspecialchars($_REQUEST['phone']);
$email = $_REQUEST["email"];
$name = 'имя';
if (isset($_REQUEST["name"])) {
    $name = $_REQUEST["name"];
}
$resp = 18;

if ($result = checkIfLeadExistsBitrix($phone)) {
    addComment($result["lead"], 'Повторное обращение: ' . $text);
    addActivity($result["lead"], $phone, $result["resp"]);
    die('Повторное обращение');
};

addLead($leadName, $name, $phone, $email, $resp, $roistat, $text, $data_);


function addLead($leadName, $name, $phone, $email, $resp, $roistat, $text, $data)
{
    $queryUrl = 'https://crm.r-invest.ru/rest/3/kxg92yg628z1a7pv/crm.lead.add.json';

    $queryData = array(
        'fields' => array(
            'TITLE' => $leadName,
            'NAME' => $name,
            'PHONE' => array(
                "n0" => array(
                    'VALUE' => $phone,
                    'VALUE_TYPE' => 'WORK',
                ),
            ),
            /*'EMAIL' => Array(
              "n0" => Array(
                  'VALUE' => $email,
                  'VALUE_TYPE' => 'WORK',
              ),
          ),*/
            'COMMENTS' => $text,
            'ASSIGNED_BY_ID' => $resp,
            'UF_CRM_1642755097' => $roistat,
            'UTM_SOURCE' => $_REQUEST["utm_source"], //utm_source
            'UTM_MEDIUM' => $_REQUEST["utm_medium"], //utm_medium
            'UTM_CAMPAIGN' => $_REQUEST["utm_name"], //utm_campaign
            'UTM_TERM' => $_REQUEST["utm_term"], //utm_term
            'UTM_CONTENT' => $_REQUEST["utm_content"], //utm_content
            'UF_CRM_1642776336975' => array(71),
            'UF_CRM_1637567820' => $_SERVER["HTTP_HOST"],
        ),
        'params' => array("REGISTER_SONET_EVENT" => "Y")
    );
    logToFile('send.txt', '$queryData', $queryData);
    sendData($queryData, $queryUrl);
}

function sendData($queryData, $queryUrl)
{
    $queryData = http_build_query($queryData);
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_SSL_VERIFYPEER => 0,
        CURLOPT_POST => 1,
        CURLOPT_HEADER => 0,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => $queryUrl,
        CURLOPT_POSTFIELDS => $queryData,
    ));
    $result = curl_exec($curl);
    curl_close($curl);
    $result = json_decode($result, 1);

    if (array_key_exists('error', $result)) {
        return false;
    } else {
        return true;
    };
}


function logToFile($fileName, $varName, $data)
{
    $fp1 = fopen($fileName, 'a+');
    $text = "---------" . date("d.m.Y H:i:s") . "---------------\n";
    $text .= $varName . ":\n";
    $text .= print_r($data, true);
    $text .= "\n";
    fwrite($fp1, $text);
    fclose($fp1);
}
////

function checkIfLeadExistsBitrix($phone, $way = "https://crm.r-invest.ru/rest/3/kxg92yg628z1a7pv/crm.lead.list.json")
{
    $queryUrl = $way;
    $queryData = array(
        'order' => array("DATE_CREATE" => "DESC"),
        "filter" => array(
            "PHONE" => $phone
        ),
        "select" => array("PHONE", "DATE_CREATE", "ID", "ASSIGNED_BY_ID"), //crm.lead.list.json
    );

    $queryData = http_build_query($queryData);
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_SSL_VERIFYPEER => 0,
        CURLOPT_POST => 1,
        CURLOPT_HEADER => 0,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => $queryUrl,
        CURLOPT_POSTFIELDS => $queryData,
    ));
    $result = curl_exec($curl);
    file_put_contents('lead.txt', json_encode($result));
    curl_close($curl);
    $result = json_decode($result, 1);

    //var_dump($result['result'][0]["DATE_CREATE"]);
    if (count($result['result']) > 0) {
        return array(
            "lead" => $result['result'][0]["ID"],
            "resp" => $result['result'][0]["ASSIGNED_BY_ID"],
        );
    } else {
        var_dump('none');
        return false;
    };
};

function addComment($lead_id, $text)
{
    $queryUrl = 'https://crm.r-invest.ru/rest/3/kxg92yg628z1a7pv/crm.timeline.comment.add';
    $queryData = array(
        'fields' => array(
            "ENTITY_ID" => $lead_id,
            "ENTITY_TYPE" => "lead",
            "COMMENT" => $text
        ),
    );

    $queryData = http_build_query($queryData);
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_SSL_VERIFYPEER => 0,
        CURLOPT_POST => 1,
        CURLOPT_HEADER => 0,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => $queryUrl,
        CURLOPT_POSTFIELDS => $queryData,
    ));
    $result = curl_exec($curl);
    curl_close($curl);
    $result = json_decode($result, 1);
    //var_dump($result['result'][0]["DATE_CREATE"]);
    if (count($result['result']) > 0) {
        return $result['result'][0]["ID"];
    } else {
        var_dump('none');
        return false;
    };
}

function addActivity($lead_id, $phone, $resp)
{
    $queryUrl = 'https://crm.r-invest.ru/rest/3/kxg92yg628z1a7pv/crm.activity.add';
    $queryData = array(
        'fields' => array(
            "TYPE_ID" => 2,
            "COMMUNICATIONS" => array(
                array(
                    "ENTITY_ID" => $lead_id,
                    "ENTITY_TYPE_ID" => 1,
                    "VALUE" => $phone
                )
            ),
            "SUBJECT" => "Повторное обращение " . $phone,
            "RESPONSIBLE_ID" => $resp,
        ),
    );
    $queryData = http_build_query($queryData);
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_SSL_VERIFYPEER => 0,
        CURLOPT_POST => 1,
        CURLOPT_HEADER => 0,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => $queryUrl,
        CURLOPT_POSTFIELDS => $queryData,
    ));
    $result = curl_exec($curl);
    curl_close($curl);
    file_put_contents('activity.txt', json_encode($result));
    $result = json_decode($result, 1);
    //var_dump($result['result'][0]["DATE_CREATE"]);
    if (count($result['result']) > 0) {
        return $result['result'][0]["ID"];
    } else {
        var_dump('none');
        return false;
    };
}
