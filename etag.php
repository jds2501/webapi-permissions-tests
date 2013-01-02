<?

$time = 1280951171;
$lastmod = gmdate('D, d M Y H:i:s \G\M\T', $time);
$etag = '123';


$ifmod = isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) ? $_SERVER['HTTP_IF_MODIFIED_SINCE'] == $lastmod : null; 
$iftag = isset($_SERVER['HTTP_IF_NONE_MATCH']) ? $_SERVER['HTTP_IF_NONE_MATCH'] == $etag : null; 

if (($ifmod || $iftag) && ($ifmod !== false && $iftag !== false)) { 
    header('HTTP/1.0 304 Not Modified'); 
} else {
    header("Last-Modified: $lastmod"); 
    header("ETag: $etag");
}

print_r($_SERVER);

?>
