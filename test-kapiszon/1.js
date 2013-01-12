var Jparse=function parseJSON(json,div,version) {
	this.json=json;
	this.div=div;
	
	this.showNEWS = function(req) {
	
		var ile=req.entry.length;	
		var html='<div class="content">';
		html+='<h1><a href="'+req.link+'" title="'+req.subtitle+'">'+req.title+'</a></h1>';
		for (var i=0;i<ile;i++){
			html+='<div class="article">';
				html+='<h3><a href="'+req.entry[i].abslink+'" title="'+req.entry[i].author+'">'+req.entry[i].title+'</a></h3>';
				if (version=='large') {
					html+='<img src="'+req.entry[i].logo+'" alt="'+req.entry[i].author+'" /><br />';
					html+='<p>'+req.entry[i].content+'</p>';
					}
				if (version=='middle'){
					html+='<p>'+req.entry[i].address+'</p>';
					}
			html+='</div>';
		}
		html+='</div>';
		document.getElementById(div).innerHTML+=html;
	}

		this.readJSON  = function(callback){
			this.json+='&callback='+callback;	
			var script=document.createElement('SCRIPT');
			script.type='text/javascript';
			script.src=this.json;
			document.getElementsByTagName('head')[0].appendChild(script);
			}
		
	String.prototype.trunc = function(n){return this.substr(0,n-1)+(this.length>n?'&hellip;':'');};	
} 