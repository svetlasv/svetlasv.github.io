function openFeedback(id) {
	var elem = document.getElementById('feedback');
	elem.style.display = "block";
	var inputs = document.querySelectorAll('form > input');
	
}

function closeFeedback (id) {
	var elem = document.getElementById('feedback');
	elem.style.display = "none";
}
