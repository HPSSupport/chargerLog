$.getJSON('log.json', function(data){
	$.each(data.entry, function(i, f){
		var tblRow = "<tr>" + "<td>" + f.date + "</td>" + "<td>" + f.grade + "</td>" + "<td>" + f.name + "</td>" + "</tr>"
		$(tblRow).appendTo("#chargers tbody");
	})
});