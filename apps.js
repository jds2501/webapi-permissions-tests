function installHostedApp(manifest) {
  var request = navigator.mozApps.install(manifest);

  request.onsuccess = function() {
    alert("Success installing app : " + request.result.manifest.name);
  };

  request.onerror = function() {
    alert("Error installing app : " + request.error.name);
  };
}

function installPackagedApp(minimanifest) {
	var request = navigator.mozApps.installPackage(minimanifest);

  request.onsuccess = function() {
    alert("Success installing app : " + request.result.manifest.name);
  };

  request.onerror = function() {
    alert("Error installing app : " + request.error.name);
  };
}

window.addEventListener("DOMContentLoaded", function() {
  document.getElementById('hostedapptc1').onclick = function() {
    installHostedApp("http://jds2501.github.com/webapi-permissions-tests/manifest.webapp");
  };
  document.getElementById('hostedappperms').onclick = function() {
    installHostedApp("http://jds2501.github.com/webapi-permissions-tests/manifest.webapp");
  };
  document.getElementById('hostedapptc2').onclick = function() {
    installHostedApp("http://jds2501.github.com/webapi-permissions-tests/noicon.webapp");
  };
  document.getElementById('hostedapptc3').onclick = function() {
    installHostedApp("http://jds2501.github.com/webapi-permissions-tests/japanese.webapp");
  };
  document.getElementById('hostedapptc4').onclick = function() {
    installHostedApp("http://jds2501.github.com/webapi-permissions-tests/developernameonly.webapp");
  };
  document.getElementById('hostedapptc5').onclick = function() {
    installHostedApp("http://jds2501.github.com/webapi-permissions-tests/developerurlonly.webapp");
  };
  document.getElementById('hostedapptc6').onclick = function() {
    installHostedApp("http://jds2501.github.com/webapi-permissions-tests/singlelocaleoverride.webapp");
  };
  document.getElementById('hostedapptc7').onclick = function() {
    installHostedApp("http://jds2501.github.com/webapi-permissions-tests/doublelocaleoverride.webapp");
  };
  document.getElementById('hostedapptc8').onclick = function() {
    installHostedApp("http://jds2501.github.com/webapi-permissions-tests/privileged.webapp");
  };
  document.getElementById('hostedapptc9').onclick = function() {
    installHostedApp("http://jds2501.github.com/webapi-permissions-tests/certified.webapp");
  };
  document.getElementById('appcachepreloadtc1').onclick = function() {
    installHostedApp("http://jds2501.github.com/webapi-permissions-tests/smallappcachepreload.webapp");
  };
  document.getElementById('appcachepreloadtc2').onclick = function() {
    installHostedApp("http://jds2501.github.com/webapi-permissions-tests/mediumappcachepreload.webapp");
  };
  document.getElementById('appcachepreloadtc3').onclick = function() {
    installHostedApp("http://jds2501.github.com/webapi-permissions-tests/invalidappcachepreload.webapp");
  };
	document.getElementById('packagedapptc1').onclick = function() {
		installPackagedApp("http://jds2501.github.com/webapi-permissions-tests/privilegedappnosigning.manifest");
	};
	document.getElementById('packagedapptc2').onclick = function() {
		installPackagedApp("http://jds2501.github.com/webapi-permissions-tests/webpackagedappwithperms.manifest");
	};
	document.getElementById('packagedapptc3').onclick = function() {
		installPackagedApp("http://jds2501.github.com/webapi-permissions-tests/largesizeinminimanifest.manifest");
	};
	document.getElementById('hostedappupdatetc1').onclick = function() {
		installHostedApp("http://jds2501.github.com/webapi-permissions-tests/simple_appcache_update/manifest.webapp");
	};
});
