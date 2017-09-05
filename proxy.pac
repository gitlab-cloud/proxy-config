function FindProxyForURL(url, host) {

	var useSocks = ["*.cosng.net", "*mgmt.ergogroup.no", "*idar*.evry.com", "*nicap*.evry.com", "*.cosng.net:*"];

	for (var i= 0; i < useSocks.length; i++) {
        	if (shExpMatch(host, useSocks[i])) {
            	  return "SOCKS localhost:1080";
        	}
	}

        // All other requests go directly
        return "DIRECT"; 
}
