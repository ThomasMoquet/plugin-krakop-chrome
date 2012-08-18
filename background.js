chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		switch (request.type)
		{
		    case "trackIP":
	            var url = "http://kraland.casstoa.fr/Scripts/upload.php";
		        var xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4) {
						if (xhr.status == 200)
						{	    
							sendResponse({data: xhr.responseText});
						}
					}
				}
				xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.setRequestHeader("Content-length", request.params.length);
                xhr.setRequestHeader("Connection", "close");
				xhr.send(request.params);
				return true;
		        break;
		}
	}
);