<?php

require_once 'backend/init.inc.php';

phpCAS::handleLogoutRequests();
phpCAS::forceAuthentication();


include('index.html');
