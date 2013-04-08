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
                $template = new \StoredLibrary\Template(__DIR__.'\..\public\header.tlp.php');
                $template->__set('TITLE_PAGE', 'Controller Smarty Energy');
                $template->__set("CSSPATH", "public/css/");
                $layout   = new \StoredLibrary\Template(__DIR__.'\..\public\intro.tlp.php');
                $layout->__set('HEADER', $template->display());
                $template = new \StoredLibrary\Template(__DIR__.'\..\public\footer.tlp.php');
                $template->__set("JSPATH", "public/js/");
                $layout->__set('FOOTER', $template->display());
                echo $layout->display();
            } else {
                $template = new \StoredLibrary\Template(__DIR__.'\..\public\header.tlp.php');
                $template->__set('TITLE_PAGE', 'Controller Smarty Energy');
                $template->__set("CSSPATH", "public/css/");
                $layout   = new \StoredLibrary\Template(__DIR__.'\..\public\login.tlp.php');
                $layout->__set('HEADER', $template->display());
                $template = new \StoredLibrary\Template(__DIR__.'\..\public\footer.tlp.php');
                $template->__set("JSPATH", "public/js/");
                $layout->__set('FOOTER', $template->display());
                echo $layout->display();
            }
    }
}
