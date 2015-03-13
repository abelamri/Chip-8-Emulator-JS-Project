	$document.ready(onReady);
	$("#bind").click(function () 
		{ 
			$("body").on("click", "#monid", aClick).find("#theone").text("Actif");
		}); 
		$(#unbind).click(function() 
		{
			$("body").off("click", "#monid", aClick).find("#theone").text("Inactif...");
		}); 
		function aClick() 
		{ 
			$("div").show().fadeOut("slow");
		}
	);	