<?php

namespace StoredLibrary;
use StoredLibrary\Connection as Db;

class Util {

    private static $instance = null;

    public static function getInstance() {
        if(!isset($instance)) {
            return self::$instance = new self();
        } else {
            return self::$instance;
        }
    }

    public function verifyUserPass($login, $password) {
        $db = Db::getInstance()->select()
           ->from('user', array('userLogin'))
           ->where('userLogin = ?', $login)
           ->andWhere('userPass = ?',$this->encrypt($password));
        if($db->fetchRow()) {
            return true;
        } else {
            return false;
        }
    }
    public function dadosUser($login) {
        $db = Db::getInstance()->select()
            ->from('user')
            ->where('userLogin = ?', $login);
        return $db->fetchObject();
    }
    public function saveArduino($data, $user) {
        $arrayValues = array('userArduinoIp' => $data->ipArduino, 'userArduinoPort' => $data->portaArduino);
        $where       = "userLogin = '$user'";
        Db::getInstance()->update('user', $arrayValues, $where);
        return '1';
    }

    public function saveUserInfo($data, $user) {
        $arrayValues = array('userName' => $data->name, 'userLastName' => $data->lastname, 'userMail' => $data->email);
        $where       = "userLogin = '$user'";
        Db::getInstance()->update('user', $arrayValues, $where);
        return '1';
    }

    public function savePassword($data, $user) {
        $arrayValues = array('userPass' => $this->encrypt($data->password));
        $where       = "userLogin = '$user'";
        Db::getInstance()->update('user', $arrayValues, $where);
        return '1';
    }

    public function loadIpArduino($login) {
        $db = Db::getInstance()->select()
            ->from('user', array('userArduinoIp', 'userArduinoPort'))
            ->where('userLogin = ?', $login);
        $values = $db->fetchRow();
        return $values['userArduinoIp'].':'.$values['userArduinoPort'];
    }

    public function loadURLImage($imageName) {
        return (empty($imageName) ? IMAGE_DIR.'no-image.png' : IMAGE_DIR.$imageName);
    }

    public static function encrypt($text, $salt = 'TEAM4')
    {
        return trim(
            base64_encode(
                mcrypt_encrypt(
                    MCRYPT_RIJNDAEL_256,
                    $salt,
                    $text,
                    MCRYPT_MODE_ECB,
                    mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB), MCRYPT_RAND)
                )
            )
        );
    }


    public static function decrypt($text, $salt = 'TEAM4')
    {
        return trim(
            mcrypt_decrypt(
                MCRYPT_RIJNDAEL_256,
                $salt,
                base64_decode($text),
                MCRYPT_MODE_ECB,
                mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB), MCRYPT_RAND)
            )
        );
    }

}