window.addEventListener('beforeunload', function (e) {
  // Cancel the event
  e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
  // Chrome requires returnValue to be set
  e.returnValue = 'oh no';
});
function add(){
	alert("Page refresh will remove all listings!");
	var toSet = '<tr>'+'<td>' + document.getElementById("date").value + '</td>' + '<td>'+document.getElementById("grade").value + '</td>' + '<td class="final">' + document.getElementById("name").value + '</td>'+'</tr>';
	$('#chargers tbody').append(toSet);
	$('#chargers tbody tr').append('<td><input type="button" value="Remove" onclick="remove(this)"></td>');
	document.getElementById("date").value = '';
	document.getElementById("grade").value = '';
	document.getElementById("name").value = '';
}
function remove(e){
	e.parentElement.parentElement.remove();
}
