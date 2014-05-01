/* this  below is the script of the home page*/
$("#menu").click(function () {
            if ($("#slider").hasClass("slideup"))
               {
                $("#slider").removeClass("slideup").addClass("slidedown");
                }
            else if($("#slider").hasClass("slidedown"))
               {

              $("#slider").removeClass("slidedown").addClass("slideup");
                }
            });

var menu = document.getElementById("menu");
menu.onclick = function(){
	if(menu.innerHTML =="IBIKUBIYEMO")
	{
		menu.innerHTML="Funga";
	}
	else if (menu.innerHTML=="Funga")
	{
		menu.innerHTML="IBIKUBIYEMO";
	}
};

/* the script of the home page ends here */

