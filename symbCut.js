function parse(htmlString){
	    console.log(htmlString);
	    if(htmlString.indexOf("(&)") != -1){
		    console.log("found");
		    return htmlString;
	    }
	    else{
		    htmlString = htmlString.replace('&', '(&)');
		    return parse(htmlString);
	    }
}

console.log(parse('&lt'));