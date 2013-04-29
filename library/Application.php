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
            if (isset($_POST['submit'])) {
                $template = new \StoredLibrary\Template(__DIR__.'/../public/pageHeader.tpl.html');
                $template->__set('TITLE_PAGE', 'Controller Smarty Energy');
                $template->__set("CSSPATH", "public/css/");
                $layout   = new \StoredLibrary\Template(__DIR__.'/../public/pageIntro.tpl.html');
                $layout->__set('HEADER', $template->display());
                $template = new \StoredLibrary\Template(__DIR__.'/../public/pageFooterIntro.tpl.html');
                $layout->__set("FOOTERINTRO", $template->display());
                $template = new \StoredLibrary\Template(__DIR__.'/../public/pageFooter.tpl.html');
                $template->__set("JSPATH", "public/js/");
                $layout->__set('FOOTER', $template->display());
                echo $layout->display();
            } else {
                $template = new \StoredLibrary\Template(__DIR__.'/../public/pageHeader.tpl.html');
                $template->__set('TITLE_PAGE', 'Controller Smarty Energy');
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
