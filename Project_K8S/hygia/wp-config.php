<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa user o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/pt-br:Editando_wp-config.php
 *
 * @package WordPress
 */
if ($_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')
    $_SERVER['HTTPS']='on';

if (isset($_SERVER['HTTP_X_FORWARDED_HOST'])) {
    $_SERVER['HTTP_HOST'] = $_SERVER['HTTP_X_FORWARDED_HOST'];
}

// ** Configurações do MySQL - Você pode pegar estas informações
// com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('DB_NAME', 'hygia3');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'techne');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', 'L6XF8jRn');

/** Nome do host do MySQL */
define('DB_HOST', 'wptechneprd.cgexaccvir8f.us-east-1.rds.amazonaws.com');

/** Charset do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8');

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');
define( 'WP_MEMORY_LIMIT', '256M' );
/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para desvalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
/*
define('AUTH_KEY',         'coloque a sua frase única aqui');
define('SECURE_AUTH_KEY',  'coloque a sua frase única aqui');
define('LOGGED_IN_KEY',    'coloque a sua frase única aqui');
define('NONCE_KEY',        'coloque a sua frase única aqui');
define('AUTH_SALT',        'coloque a sua frase única aqui');
define('SECURE_AUTH_SALT', 'coloque a sua frase única aqui');
define('LOGGED_IN_SALT',   'coloque a sua frase única aqui');
define('NONCE_SALT',       'coloque a sua frase única aqui');
*/
define('AUTH_KEY',         ']~JAr}Bfi[m+W.<aVtr2-h::X+q`t+$Ug8_L=zDkdoo&iBRolvh5p)MD8Q2%t)!s');
define('SECURE_AUTH_KEY',  'a$} $SX>0]=$zTUGsX97-CCZ^.z/V}Ije^GW?rZ|}Ja.`1;!Nec9F+B?{y4%-Hf`');
define('LOGGED_IN_KEY',    'S6uH-gK(cazD~ dfqKb5h#9/{+:,E2zt0qRRORc s/)|7ANY.>u@ kS1in%uA8D>');
define('NONCE_KEY',        'y3+|3RW_M90S8M_q,y43SB|3KN|V5BkoU81zs3x|]|~rp4erNuj&dnuL*vpikV+T');
define('AUTH_SALT',        'pPg/-GH|Ux%mC4k*d>-1NRN+,O&Iq51{+C}LzBt`yf==mI>~83$+iHR fANA+aL&');
define('SECURE_AUTH_SALT', 'lCc-+7lU`8U#[s87%kivW(SdGCrDAmGj#4c<PTM=KPCkn0LlVTiock+l&Klw]/oV');
define('LOGGED_IN_SALT',   'nE1Y[TETiY+UJYV2,&`f,}.q?:*!l/?t!3DYXpM;zN&X064m$Pge-ZBK=?)_cUh5');
define('NONCE_SALT',       '-`.G.mW5YHp`(!2C 9wFi.9-8,>jz^#0.AR-W~#vDW&fpFY[usvzPvtpX[j<03)*');


/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * para cada um um único prefixo. Somente números, letras e sublinhados!
 */
$table_prefix  = 'wp_';

/**
 * Para desenvolvedores: Modo debugging WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://codex.wordpress.org/pt-br:Depura%C3%A7%C3%A3o_no_WordPress
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis e arquivos do WordPress. */
require_once(ABSPATH . 'wp-settings.php');
