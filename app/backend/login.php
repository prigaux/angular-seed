<?php

require_once 'init.inc.php';

phpCAS::handleLogoutRequests();
if (isset($_GET["postMessage"])) {
    phpCAS::forceAuthentication();
} else {
    if (!phpCAS::checkAuthentication()) {
        header('HTTP/1.0 401 Unauthorized');
        echo 'HTTP/1.0 401 Unauthorized';    
        exit();
    }
}

$user = array('id' => phpCAS::getUser());

if (isset($_GET["postMessage"])) {
?>
Login success, please wait...
<script>
    (window.opener ? (window.opener.postMessage ? window.opener : window.opener.document) : window.parent).postMessage('loggedUser=' +
      JSON.stringify(<? echo json_encode($user); ?>), '*');
</script>
<?
} else if (isset($_GET["callback"])) {
  header('Content-type: application/javascript; charset=UTF-8');
  echo $_GET["callback"] . "(" . json_encode($user) . ");";
} else {
  header('Content-type: application/json; charset=UTF-8');
  echo json_encode($user);
}


