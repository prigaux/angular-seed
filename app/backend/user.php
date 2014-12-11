<?php

require_once 'init.inc.php';

if (phpCAS::isAuthenticated()) {
    echo json_encode(array('id' => phpCAS::getUser()));
} else {
    header('HTTP/1.0 401 Unauthorized');
    echo 'HTTP/1.0 401 Unauthorized';    
}
