<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); //Set curl to return the data instead of printing it to the browser.
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT,30); # timeout after 10 seconds, you can increase it
curl_setopt($ch, CURLOPT_USERAGENT , "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)");
curl_setopt($ch, CURLOPT_URL, "201.80.136.226:8081/?0"); #set the url and get string together
echo "curl execute";
flush();
$output = curl_exec($ch);
echo "curl executado";
flush();
curl_close($ch);
echo "curl close";
flush();
echo $output;
flush();

