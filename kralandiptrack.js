// @name          Tracker d'IP KI
// @description   Un script qui enregistre les IPs, les IDs et les noms sur la page.


var datas = '';

//Pour le forum
$(".post_container").each(function(){
	var ip= '';
	var name= '';
	var idcomp= '';
    ip=$(this).children(".post_foot").children("font").children("a").text();
	name=$(this).children(".post_left").children("p:first-child").children("a").text();
	idcomp=$(this).children(".post_left").children("p:first-child").children("a").attr("href");
	idcomp = idcomp.replace(/main.php\?page=1;(.+)p1=(.+)/g, "$2");
	datas+=idcomp+","+name+","+ip+";";
});

//Pour la page d'activation
$("tr:has(td.gametd)").each(function(){

	var ip= '';
	var name= '';
	var idcomp= '';
    ip=$(this).children("td:last-child").children("a").text();
	name=$(this).children("td[class='gametd']").children("a").text();
	idcomp=$(this).children("td[class='gametd']").children("a").attr("href");
	idcomp = idcomp.replace(/main.php\?page=5;(.+)p1=(.+)/g, "$2");
	datas+=idcomp+","+name+","+ip+";";
	$(this).append("<a href='http://kraland.casstoa.fr/IPtrack/index.php?ip="+ip+"' target='_blank'><img src='http://www.eurolocation.fr/images/icon_loupe.gif' /></a>");

});

if (datas){
    chrome.extension.sendMessage({
        type: "trackIP",
        params: "datas="+datas
    },
    function(response) {

    });
}
