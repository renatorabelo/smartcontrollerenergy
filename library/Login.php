<?php

namespace StoredLibrary;
use StoredLibrary\Util;
use StoredLibrary\Template as Template;

class Login
{
    private static $_instance = null;
    protected $_Session;

    public static function getInstance() {
        if(!isset($_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function __construct(){
        if(!isset($this->_Session)) {
            $this->_Session = new Session(10);
        }
    }

    public function start ($data) {
        if(Util::getInstance()->verifyUserPass($data['username'], $data['password'])) {
            $this->_Session->register('userLogin', $data['username']);
            $this->_Session->renew();
            $configsTpl = array(
                'HEADER' => Template::display(TEMPLATE_DIR.'pageHeader.tpl.html',
                    array('TITLE_PAGE' => TITLE_PAGE,
                        'CSSPATH' => CSSPATH)),
                'PAGENAMEAPP' => PAGENAMEAPP,
                'USERSESSION' => strtoupper($this->sessionUserName()),
                'FOOTERINTRO' => Template::display(TEMPLATE_DIR.'pageFooterIntro.tpl.html'),
                'FOOTER' => Template::display(TEMPLATE_DIR.'pageFooter.tpl.html', array('JSPATH'  => JSPATH)),
            );
            return Template::display(TEMPLATE_DIR.'pageIntro.tpl.html', $configsTpl);
        } else {
            $configsTpl = array(
                'HEADER' => Template::display(TEMPLATE_DIR.'pageHeader.tpl.html',
                    array('TITLE_PAGE' => TITLE_PAGE,
                        'CSSPATH' => CSSPATH)),
                'PAGENAMEAPP' => PAGENAMEAPP,
                'FOOTER' => Template::display(TEMPLATE_DIR.'pageFooter.tpl.html', array('JSPATH'  => JSPATH)),
                'HIDE'   => ''
            );
            return Template::display(TEMPLATE_DIR.'pageLogin.tpl.html', $configsTpl);
        }
    }

    public function sessionExists() {
        if(isset($this->_Session)) {
            if($this->_Session->isRegistered()) {
                $this->_Session->renew();
                return true;
            }
        }
        return false;
    }

    public function sessionUserName() {
        if(isset($this->_Session)) {
            if($this->_Session->isRegistered()) {
                return $this->_Session->getSession()['userLogin'];
            }
        }
        return '';
    }

    public function logout () {
        if(isset($this->_Session)) {
            if($this->_Session->isRegistered()) {
                $this->_Session->end();
            }
        }
    }


}