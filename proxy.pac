function FindProxyForURL(url, host) {

	var useSocksFET = ["*.cosng.net", "*.cloudqa.local", "*mgmt.ergogroup.no", "*idar*.evry.com", "*nicap*.evry.com", "*.cosng.net:*", "evry.ipcenter.com", "*10.114.*"];
	var useSocksESN = ["*.dcinf.se"];
	var useSocksGJO = ["*10.133.*", "*hm31*", "*vcsa01-hm31.man.cosng.net"];
        
        for (var i= 0; i < useSocksGJO.length; i++) {
        	if (shExpMatch(host, useSocksGJO[i])) {
            	  return "SOCKS localhost:1082";
        	}
	}

	for (var i=0; i < useSocksESN.length; i++) {
		if (shExpMatch(host, useSocksESN[i])) {
		  return "SOCKS localhost:1081";
		}
	}

	for (var i=0; i < useSocksFET.length; i++) {
		if (shExpMatch(host, useSocksFET[i])) {
		  return "SOCKS localhost:1080";
		}
	}

        // All other requests go directly
        return "DIRECT"; 
}
