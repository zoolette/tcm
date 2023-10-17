const $head = document.querySelector('head');
const viewPortConfig = '<meta name="viewport" content="width=device-width, initial-scale=1">';
if ($head) {
	$head.insertAdjacentHTML('beforeend', viewPortConfig);
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
1}
const $navBar = document.querySelector('#header .nav');
if ($navBar) {
	$navBar.setAttribute('id', 'bs-navbar-collapse');
}