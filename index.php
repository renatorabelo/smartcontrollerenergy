<?php
define('APP_LIBRARY', realpath(__DIR__.DIRECTORY_SEPARATOR.'library'));
require_once(APP_LIBRARY.'\Classloader.php');
$loader = new \StoredLibrary\Classloader(APP_LIBRARY);
$loader->registerNamespace('StoredLibrary', __DIR__.DIRECTORY_SEPARATOR.'library');
$loader->register();
try {
    \StoredLibrary\Application::getInstance()->run();
} catch (\Exception $e){
    die($e->getMessage());
}
