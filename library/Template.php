<?php

namespace StoredLibrary;

class Template {

    protected $file;
    protected $values = array();

    public function __construct($file) {
        $this->file = $file;
    }

    public function __set($key, $value) {
        $this->values[$key] = $value;
    }

    public function __get($key) {
        return $this->values[$key];
    }

    public function display() {
        if (!file_exists($this->file)) {
            throw new \Exception("Error loading template file ($this->file).<br />");
        }
        $output = file_get_contents($this->file);

        foreach ($this->values as $key => $value) {
            $tagToReplace = "[@$key]";
            $output = str_replace($tagToReplace, $value, $output);
        }

        return $output;
    }
}

