<?php
/**
 * Created by JetBrains PhpStorm.
 * User: KESSILER
 * Date: 07/04/13
 * Time: 01:27
 * To change this template use File | Settings | File Templates.
 */

namespace StoredLibrary;


class Connection {

    private static $instance = null;
    private static $_PDOInstance = null;
    private $_query = null;

    public function __construct()
    {
        if(!self::$_PDOInstance)
        {
            try {
                $arrayConfigs = \StoredLibrary\Configuration::get(__DIR__.'/../application.ini');
                $dsn = $arrayConfigs['database']['adapter'].":host=".$arrayConfigs['database']['host'].";dbname=".$arrayConfigs['database']['dbname'];
                self::$_PDOInstance = new \PDO($dsn, $arrayConfigs['database']['username'], $arrayConfigs['database']['password']);
            } catch (PDOException $e) {
                throw new \Exception("PDO Connection error: " . $e->getMessage() . "<br/>");
            }
        }
        return self::$_PDOInstance;
    }

    public static function getInstance() {
        if(!isset($instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function beginTransaction()
    {
        return self::$_PDOInstance->beginTransaction();
    }


    public function commit()
    {
        return self::$_PDOInstance->commit();
    }

    public function rollBack()
    {
        return self::$_PDOInstance->rollBack();
    }

    public function exec($statement)
    {
        try {
            return self::$_PDOInstance->exec($statement);
        } catch(\PDOException $e) {
            throw $e;
        }
    }

    public function fetchAll($statement)
    {
        return self::$_PDOInstance->query($statement)->fetchAll(PDO::FETCH_ASSOC);
    }

    public function fetchRow($statement)
    {
        return self::$_PDOInstance->query($statement)->fetch(PDO::FETCH_ASSOC);
    }

    public function insert($name, array $data)
    {
        $statement = "INSERT INTO " . $name . "(" .implode(",", array_map("mysql_escape_string", array_keys($data))) . ")
                           VALUES ('" . implode("', '", array_map("mysql_escape_string", array_values($data))) . "');";
        self::$_PDOInstance->exec($statement);
    }

    public function update($name, array $data, $where)
    {
        $statement = "UPDATE " . $name . " SET ";
        $quote = "";
        foreach($data AS $key => $value){
            $statement .= $quote . $key . "='" . $value . "'";
            $quote = ",";
        }
        $statement .= " WHERE " . $where;
        self::$_PDOInstance->exec($statement);
    }

    public function delete($name, $where)
    {
        $statement = "DELETE FROM " . $name . " WHERE " . $where;
        self::$_PDOInstance->exec($statement);
    }

    public function select() {
        $this->_query = "SELECT ";
        return $this;
    }

    public function from($table, $params = null)
    {
        if(is_null($params)){
            $this->query .= "* ";
        }else{
            if(is_array($params)){
                $this->query .= implode(",", $params) . " ";
            }else{
                $this->query .= $params . " ";
            }
        }
        $this->query .= "FROM " . $table . " ";
        return $this;
    }

    public function join($table, $relation)
    {
        $this->query .= "INNER JOIN " . $table . " ON " . $relation . " ";
        return $this;
    }

    public function joinLeft($table, $relation)
    {
        $this->query .= "LEFT JOIN " . $table . " ON " . $relation . " ";
        return $this;
    }

    public function where($key, $value)
    {
        $this->query .= "WHERE " . str_replace("?", "'{$value}'", $key) . " ";
        return $this;
    }

    public function andWhere($key, $value)
    {
        $this->query .= "AND " . str_replace("?", "'{$value}'", $key) . " ";
        return $this;
    }

    public function orWhere($key, $value)
    {
        $this->query .= "OR " . str_replace("?", "'{$value}'", $key) . " ";
        return $this;
    }

    public function group($group)
    {
        $this->query .= "GROUP BY " . $group . " ";
        return $this;
    }

    public function having($having)
    {
        $this->query .= "HAVING " . $having . " ";
        return $this;
    }

    public function order($param, $mode = "ASC")
    {
        $this->query .= "ORDER BY " . $param . " " . $mode . " ";
        return $this;
    }

    public function limit($count, $offset = 0)
    {
        $this->query .= "LIMIT " . $count . " OFFSET " . $offset . " ";
        return $this;
    }
}