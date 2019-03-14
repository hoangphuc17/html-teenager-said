function openMenu() {
	$('.mobi-menu').css('right','0');
	$('.bg-overlay').addClass('active');
	bodyScrollLock.disableBodyScroll();
}
function closeMenu() {
	$('.mobi-menu').css('right','-310px');
	$('.bg-overlay').removeClass('active');
	bodyScrollLock.enableBodyScroll();
}