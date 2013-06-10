<?php
define('APP_LIBRARY', realpath(__DIR__ . DIRECTORY_SEPARATOR . 'library'));
define('TEMPLATE_DIR', __DIR__.DIRECTORY_SEPARATOR.'public'.DIRECTORY_SEPARATOR);
define('CSSPATH', 'public'.DIRECTORY_SEPARATOR.'css'.DIRECTORY_SEPARATOR);
define('JSPATH', 'public'.DIRECTORY_SEPARATOR.'js'.DIRECTORY_SEPARATOR);
define('IMAGE_DIR', 'public'.DIRECTORY_SEPARATOR.'img'.DIRECTORY_SEPARATOR.'uploads'.DIRECTORY_SEPARATOR);
define('TITLE_PAGE', 'House Economic');
require_once(APP_LIBRARY . DIRECTORY_SEPARATOR . 'Classloader.php');
$loader = new \StoredLibrary\Classloader(APP_LIBRARY);
$loader->registerNamespace('StoredLibrary', __DIR__ . DIRECTORY_SEPARATOR . 'library');
$loader->register();
try {
    \StoredLibrary\Application::getInstance()->run();
} catch (\Exception $e) {
    $ErroLayoutBegin = <<<HTML
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
        <h3>Ocorreu um erro ao processar a requisição.</h3>
        <div style="padding:10px; border:1px solid #666; background:#EFEFEF;">
            <div style="width:100%; overflow:auto;">
                <pre><b>Erro:</b>
HTML;
    $ErroLayoutMiddle = <<<HTML
        <br /><b>Trace:</b>
HTML;
    $ErroLayoutEnd = <<<HTML
                </pre>
            </div>
        </div>
HTML;
    die($ErroLayoutBegin.$e->getMessage().$ErroLayoutMiddle.$e->getTraceAsString().$ErroLayoutEnd);
}