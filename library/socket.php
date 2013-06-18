<?php
final class Socket
{
    function __construct()
    {
        global $wsRead;
        $wsRead = array();
    }

    function wsStartServer($host, $port)
    {
        global $wsRead;

        if (!$wsRead[0] = socket_create(AF_INET, SOCK_STREAM, SOL_TCP)) {
            return false;
        }
        if (!socket_set_option($wsRead[0], SOL_SOCKET, SO_REUSEADDR, 1)) {
            socket_close($wsRead[0]);
            return false;
        }
        if (!socket_bind($wsRead[0], $host, $port)) {
            socket_close($wsRead[0]);
            return false;
        }
        if (!socket_listen($wsRead[0], 10)) {
            socket_close($wsRead[0]);
            return false;
        }

        $write = array();
        $except = array();

        while (isset($wsRead[0])) {
            $changed = $wsRead;
            $result = socket_select($changed, $write, $except, 0);
            if ($result === false) {
                socket_close($wsRead[0]);
                return false;
            } elseif ($result > 0) {
                foreach ($changed as $clientID => $socket) {
                    if ($clientID != 0) {
                        $buffer = '';
                        $bytes = @socket_recv($socket, $buffer, 4096, 0);
                        if ($bytes > 0) {
                            echo $buffer;
                        } else {
                            $this->wsRemoveClient($clientID);
                        }
                    } else {
                        $client = socket_accept($wsRead[0]);
                        if ($client !== false) {
                            $this->wsAddClient($client);
                        } else {
                            socket_close($client);
                        }
                    }
                }
            }
        }
        return true;
    }

    function wsAddClient($socket)
    {
        global $wsRead;
        $wsRead[sizeof($wsRead)] = $socket;
    }

    function wsRemoveClient($clientID)
    {
        global $wsRead;
        socket_close($wsRead[$clientID]);
        unset($wsRead[$clientID]);
    }
}


error_reporting(E_ALL);
set_time_limit(0);
ob_implicit_flush();
define('HOST', '192.168.1.2');
define('PORT', '9750');
$Socket = new Socket();
$Socket->wsStartServer(HOST, PORT);