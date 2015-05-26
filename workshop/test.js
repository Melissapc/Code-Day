
document.getElementById('text_input').addEventListener('keypress', function (event) {
	if(event.which != 13)
		return;

	var list_item = document.createElement('li');
	
	list_item.textContent = document.getElementById('text_input').value;

	document.getElementById('list').appendChild(list_item);

	document.getElementById('text_input').value = "";
})