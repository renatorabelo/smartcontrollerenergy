<?php

namespace StoredLibrary;

class Application
{
    private static $_instance = null;

    public static function getInstance() {
        if(!isset($_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function run()
    {
        if (isset($_POST['action'])) {
            if($_POST['action'] == 'buildONandOFF') {
                if(json_decode($_POST['dataset']) == '1') {
                    $sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
                    socket_connect($sock,"201.80.136.226", 8081);
                    socket_write($sock,'?0',strlen('?0'));
                    socket_close($sock);
                    echo 0;
                }else {
                    $sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
                    socket_connect($sock,"201.80.136.226", 8081);
                    socket_write($sock,'?1',strlen('?1'));
                    socket_close($sock);
                    echo 1;
                }
            } else {
                $template = new \StoredLibrary\Template(__DIR__.'/../public/pageHeader.tpl.html');
                $template->__set('TITLE_PAGE', 'House Economic');
                $template->__set("CSSPATH", "public/css/");
                $layout   = new \StoredLibrary\Template(__DIR__.'/../public/pageIntro.tpl.html');
                $layout->__set('HEADER', $template->display());
                $template = new \StoredLibrary\Template(__DIR__.'/../public/pageFooterIntro.tpl.html');
                $layout->__set("FOOTERINTRO", $template->display());
                $template = new \StoredLibrary\Template(__DIR__.'/../public/pageFooter.tpl.html');
                $template->__set("JSPATH", "public/js/");
                $layout->__set('FOOTER', $template->display());
                echo $layout->display();
            }
        } elseif(isset($_GET['action'])) {
            switch(json_decode($_GET['dataset'])){
                case 'pageDashboard':
                    $template = new \StoredLibrary\Template(__DIR__.'/../public/pageDashboard.tpl.html');
                    echo $template->display();
                    break;
                case 'pageUser':
                    $template = new \StoredLibrary\Template(__DIR__.'/../public/pageUser.tpl.html');
                    echo $template->display();
                    break;
                case 'pageSobre':
                    $template = new \StoredLibrary\Template(__DIR__.'/../public/pageSobre.tpl.html');
                    echo $template->display();
                    break;
                case 'pageDisp':
                    $template = new \StoredLibrary\Template(__DIR__.'/../public/pageDisp.tpl.html');
                    echo $template->display();
                    break;
                default: break;
            }
        }else {
            $template = new \StoredLibrary\Template(__DIR__.'/../public/pageHeader.tpl.html');
            $template->__set('TITLE_PAGE', 'House Economic');
            $template->__set("CSSPATH", "public/css/");
            $layout   = new \StoredLibrary\Template(__DIR__.'/../public/pageLogin.tpl.html');
            $layout->__set('HEADER', $template->display());
            $template = new \StoredLibrary\Template(__DIR__.'/../public/pageFooter.tpl.html');
            $template->__set("JSPATH", "public/js/");
            $layout->__set('FOOTER', $template->display());
            echo $layout->display();
        }
    }
}