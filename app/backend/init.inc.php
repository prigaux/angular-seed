<?

require_once 'CAS.php';

$CAS_HOST = 'cru.renater.fr';
$CAS_CONTEXT = '/cas';

phpCAS::client(CAS_VERSION_2_0, $CAS_HOST, 443, $CAS_CONTEXT);
phpCAS::setNoCasServerValidation();
