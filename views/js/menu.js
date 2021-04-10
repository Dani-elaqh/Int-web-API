//File of doing the ajax call to the server request for the menu and injec it to the page
//JQuery code , only one function draw_table
function draw_table(){
    $("#result").empty();
    $.getJSONuncached = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#result").append(html);
                select_row();
            }
        });
    };
    //calling 
    $.getJSONuncached("/get/html")
};
//click any room and highlight the row, as selected, taking selection and entree coming from the id
function select_row()
{
	$("#menuTable tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var section = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
		var entree = $(this).attr("id") - 1;
		delete_row(section, entree);
	})
};
//are end point passing 2 variable section number and entree number
function delete_row(sec, ent)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				section: sec,
				entree: ent
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};
//calling the code when loading the page
$(document).ready(function(){
    draw_table(); 
});