$('textarea').keyup(function (e) {
	let content = $(this).val();

    
    if (content.length == 0) {
    	$('.count').text('0');
    } else {
    	$('.count').text(content.length );
    }
});