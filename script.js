function add(){
	$('#chargers tbody').append('<div>'+'<td>'+document.getElementById('date').value +'</td>'+'<td>'+document.getElementById('grade').value +'</td>'+'<td>'+document.getElementById('name').value +'</td>'+'<input type="button" value="Remove" onclick="remove()">'+'</div>');
}
