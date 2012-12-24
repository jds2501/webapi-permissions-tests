function installHostedApp(manifest) {
  var request = navigator.mozApps.install(manifest);

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
  document.getElementById('hostedapptc2').onclick = function() {
    installHostedApp("http://jds2501.github.com/webapi-permissions-tests/noicon.webapp");
  };
  document.getElementById('hostedapptc3').onclick = function() {
    installHostedApp("http://jds2501.github.com/webapi-permissions-tests/japanese.webapp");
  };
});
