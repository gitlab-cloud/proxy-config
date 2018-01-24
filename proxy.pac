function FindProxyForURL(url, host) {

	var useSocksFET = ["*.cosng.net", "*.cloudqa.local", "*mgmt.ergogroup.no", "*idar*.evry.com", "*nicap*.evry.com", "*.cosng.net:*", "evry.ipcenter.com"];
	var useSocksESN = ["*.dcinf.se"];

	for (var i= 0; i < useSocksFET.length; i++) {
        	if (shExpMatch(host, useSocksFET[i])) {
            	  return "SOCKS localhost:1080";
        	}
	}

	for (var i=0; i < useSocksESN.length; i++) {
		if (shExpMatch(host, useSocksESN[i])) {
		  return "SOCKS localhost:1081";
		}
	}

        // All other requests go directly
        return "DIRECT"; 
}
