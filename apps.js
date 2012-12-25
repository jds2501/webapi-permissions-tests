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
	document.getElementById('packagedapptc1').onclick = function() {
		installPackagedApp("http://jds2501.github.com/webapi-permissions-tests/privilegedappnosigning.manifest");
	};
});
