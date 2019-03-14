
function goToByScroll(item) {
	var id = $(item).attr("data-goto");
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top - 50
    }, 'slow');
}