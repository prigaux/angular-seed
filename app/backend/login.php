<?php

require_once 'init.inc.php';

phpCAS::handleLogoutRequests();
if (!phpCAS::checkAuthentication()) {
        header('HTTP/1.0 401 Unauthorized');
        echo 'HTTP/1.0 401 Unauthorized';    
        exit();
}

$user = array('id' => phpCAS::getUser());

if (isset($_GET["callback"])) {
  header('Content-type: application/javascript; charset=UTF-8');
  echo $_GET["callback"] . "(" . json_encode($user) . ");";
} else {
  header('Content-type: application/json; charset=UTF-8');
  echo json_encode($user);
}


