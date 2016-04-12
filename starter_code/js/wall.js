$(document).ready(function()
{
	$("#post-btn").click(function() {
		var message ="<br/><div class='row'><div class='col-md-2'><img src='http://cdn0.dailydot.com/uploaded/images/original/2014/8/18/pusheen.gif' width='50px'><div/>" +"<div class=' col-md-10'>";
		message += "<h3>Shay allDay<h3/>";
		message += $("#message").val().trim();
		message += '</div></div>'
		
	$("#wall").prepend(message);
	  
      });
      

	// YOUR CODE GOES HERE
});
