const $head = document.querySelector('head');
const viewPortConfig = '<meta name="viewport" content="width=device-width, initial-scale=1">';
if ($head) {
	$head.insertAdjacentHTML('beforeend', viewPortConfig);
}

const smartMenuId = '46038543588202275';

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
	$navBar.classList.add('collapse');
	$mainMenu = $navBar.querySelector('#menu');
	if ($mainMenu) {
		$mainMenu.classList.add("menu","nav","navbar-nav","sm","sm-vertical","sm-collapsible");
		$mainMenu.setAttribute('data-smartmenus-id', smartMenuId);
		const $subMenus = mainMenu.querySelectorAll('li.h-font');
		let menuIdent = 1;
		for (const $subMenu of subMenus) {
			const $link = $subMenu.querySelector('a');
			if ($link) {
				$dropdownMenu.setAttribute('id', `sm-${smartMenuId}-${menuIdent}`);
				$dropdownMenu.classList.add('has-submenu');
				menuIdent++;
			}
			const $dropdownMenu = $subMenu.querySelector('ul');
			if ($dropdownMenu) {
				$dropdownMenu.setAttribute('id', `sm-${smartMenuId}-${menuIdent}`);
				$dropdownMenu.setAttribute('aria-hidden', true);
				$dropdownMenu.setAttribute('role', 'group');
				$dropdownMenu.classList.add('dropdown-menu');
				menuIdent++;
			}
		}
	}
}