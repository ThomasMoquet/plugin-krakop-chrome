var dictionnary = { '88.181.228.220':'Ernie','88.166.203.103':'Ernie','134.214.238.242':'Ernie',
                    '90.17.192.144':'Giorgio Addams' , '90.17.193.129':'Giorgio Addams' ,'90.17.195.179':'Giorgio Addams' , '90.23.245.28':'Giorgio Addams' , '90.23.247.198':'Giorgio Addams' , '90.51.133.230':'Giorgio Addams' , '90.51.198.153':'Giorgio Addams' ,'81.249.73.202':'Giorgio Addams' , '81.249.99.75':'Giorgio Addams',
                    '62.39.144.154':'Bahamut' , '92.144.98.203':'Bahamut',
                    '85.171.238.156':'Hyperion' , '85.171.226.117':'Hyperion',
                    '82.125.132.165':'Urza' , '90.13.237.220':'Urza' , '149.6.166.214':'Urza' , '82.125.151.190':'Urza',
                    '193.52.24.125':'Jetro' , '90.13.237.220':'Jetro',
                    '82.125.132.165':'Eden' ,'90.13.237.220':'Eden',
                    '85.171.238.156':'Merhzin' , '85.171.226.117':'Merhzin',
                    '217.108.225.35':'Schneider',
                    '0.0.0.0':'Luc TNT',
                    '90.55.163.2':'La Crampe VampiriKra',
                    '88.85.22.226':'Tip Ardono',
                    '80.13.85.104':'Coyote',
                    '88.165.249.109':'Merlin'
};

$(".post_container .post_foot a").each(function(){
    if (dictionnary[$(this).text()]){
        $(this).parents(".post_container").css("backgroundColor","#FF5E4D").find(".post_left p:first").append(' - ' + dictionnary[$(this).text()]);
    }
});