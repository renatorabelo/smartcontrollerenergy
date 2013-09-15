<?php

namespace StoredLibrary;
use \StoredLibrary;

class Application
{
    private static $_instance = null;
    private $Login = null;

    public static function getInstance() {
        if(!isset($_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function __construct() {
        if(!isset($this->Login)) {
            $this->Login = Login::getInstance();
        }
    }

    public function run()
    {
        try {
            if (isset($_POST['action'])) {
                switch($_POST['action']) {
                    case 'logar':
                        echo $this->Login->start(array('username' => $_POST['username'], 'password' => $_POST['password']));
                        break;
                    case 'logout':
                        echo $this->Login->logout();
                        break;
                    case 'ipArduinoSave':
                        $value = json_decode($_POST['dataset']);
                        echo Util::getInstance()->saveArduino($value, $this->Login->sessionUserName());
                        break;
                    case 'saveUserInfo':
                        $value = json_decode($_POST['dataset']);
                        echo Util::getInstance()->saveUserInfo($value, $this->Login->sessionUserName());
                        break;
                    case 'savePassword':
                        $value = json_decode($_POST['dataset']);
                        echo Util::getInstance()->savePassword($value, $this->Login->sessionUserName());
                }
            } elseif(isset($_GET['action'])) {
                switch($_GET['action']) {
                    case 'loadWindow':
                        $dataSet  = json_decode($_GET['dataset']);
                        switch($dataSet){
                            case 'pageUser':
                                $DadosUser = Util::getInstance()->dadosUser($this->Login->sessionUserName());
                                $configsPageUser = array(
                                    'NAME' => $DadosUser->userName,
                                    'LASTNAME' => $DadosUser->userLastName,
                                    'LOGIN' => $DadosUser->userLogin,
                                    'MAIL' => $DadosUser->userMail,
                                    'PHOTO' => Util::getInstance()->loadURLImage($DadosUser->userPhoto),
                                    'ARDUINOIP' => $DadosUser->userArduinoIp,
                                    'ARDUINOPORT' => $DadosUser->userArduinoPort,
                                    'XBEESERIAL' => $DadosUser->userSerialXBee
                                );
                                echo Template::display(TEMPLATE_DIR.$dataSet.'.tpl.html', $configsPageUser);
                                break;
                            case "pageDashboard":
                            case "pageTemperature":
                            case "pageSobre":
                            case "pageDispSala":
                            case "pageDispQuartos":
                            case "pageDispGaragem":
                            case "pageDispPiscina":
                                echo Template::display(TEMPLATE_DIR.$dataSet.'.tpl.html');
                                break;
                            default: break;
                        }
                        break;
                    case 'loadIpArduino':
                        $endeIP = Util::getInstance()->loadIpArduino($this->Login->sessionUserName());
                        if(!strpos($endeIP,'http://')) {
                            $endeIP = 'http://'.$endeIP;
                        }
                        echo $endeIP;
                        break;
                }
            }else {
                if($this->Login->sessionExists()) {
                    $configsTpl = array(
                        'HEADER' => Template::display(TEMPLATE_DIR.'pageHeader.tpl.html',
                            array('TITLE_PAGE' => TITLE_PAGE,
                                'CSSPATH' => CSSPATH)),
                        'PAGENAMEAPP' => PAGENAMEAPP,
                        'USERSESSION' => strtoupper($this->Login->sessionUserName()),
                        'FOOTERINTRO' => Template::display(TEMPLATE_DIR.'pageFooterIntro.tpl.html'),
                        'FOOTER' => Template::display(TEMPLATE_DIR.'pageFooter.tpl.html', array('JSPATH'  => JSPATH)),
                    );
                    echo Template::display(TEMPLATE_DIR.'pageIntro.tpl.html', $configsTpl);
                } else {
                    $configsTpl = array(
                        'HEADER' => Template::display(TEMPLATE_DIR.'pageHeader.tpl.html',
                                                        array('TITLE_PAGE' => TITLE_PAGE,
                                                              'CSSPATH' => CSSPATH)),
                        'FOOTER' => Template::display(TEMPLATE_DIR.'pageFooter.tpl.html', array('JSPATH'  => JSPATH)),
                        'HIDE'   => 'hide',
                        'PAGENAMEAPP' => PAGENAMEAPP,
                    );
                    echo Template::display(TEMPLATE_DIR.'pageLogin.tpl.html', $configsTpl);
                }
            }
        }catch (\Exception $e) {
            throw $e;
        }
    }
}