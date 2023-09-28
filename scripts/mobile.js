const $head = document.querySelector('head');
const customStyle = '<link href="https://cdn.jsdelivr.net/gh/zoolette/tcm@latest/style/custom.css" rel="stylesheet" type="text/css" />';
if ($head) {
	$head.insertAdjacentHTML('beforeend', customStyle);
}

const burgerMenu = '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false">' +
	                   '<span class="visible-xs h-font">Menu</span>' +
	                   '<span class="burger">' +
	                   '<span class="icon-bar"></span>' +
	                   '<span class="icon-bar"></span>' + 
	                   '<span class="icon-bar"></span>' + 
	                   '</span>' + 
	                   '</button>';
const $socialLinks = document.querySelector('ul.social');
if ($socialLinks) {
	    $socialLinks.insertAdjacentHTML('afterbegin', burgerMenu );
}
