<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
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
// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('DB_NAME', 'ergonrh');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'techne');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', 'L6XF8jRn');

/** Nome do host do MySQL */
define('DB_HOST', 'wptechneprd.cgexaccvir8f.us-east-1.rds.amazonaws.com');

/** Charset do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8mb4');

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'pF?:!;Hip(|~G.R7 DJTa=PO+A?dM~$muJAWcM$`xv!ZF800j986(^XZfk4Q_bY6');
define('SECURE_AUTH_KEY',  'ghSywe,>p(q^WV+>LiA3a>y.:IAj-9,`hp@9bFcJB|U#R8aeh)R`/PYo*.Yhde  ');
define('LOGGED_IN_KEY',    '_T&%e2l+beaB[wn%}&`A}8#,ceV4#*:Vxcc CkGs&s%&D3CoaZg9LS3P&R08(LS@');
define('NONCE_KEY',        'aO=C4LJRJ=~Yr-CbbwT@ZhxK?4lJK#_G%z]sSV8F15ra=^R~~4]IucLiA<O;iL(1');
define('AUTH_SALT',        'BS23A(VQ12A8CON=EV8y0FB2OY}56OK4zFpM8BMk9<M1~6OY&D:0`!8VcTCM0FF{');
define('SECURE_AUTH_SALT', '))G#t2.,_j%Gw1/O#]RW(MaFzGH~,;61E-QQwfJ7Qo|5xD8z$Tjsm=va~e,_4i[5');
define('LOGGED_IN_SALT',   ' (FtLCkXxG2QrL9J@0V=TjE+`1y~#FXV-Hm.:9?{48aE0WfYY21_,1d#{-KR=05}');
define('NONCE_SALT',       'FofgbTcy*uHzC/!urr{vS!+9@&?z:;Ges`QH$~Za1#a%3P6@m$}4vGgU3-]hS-)b');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix  = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
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
