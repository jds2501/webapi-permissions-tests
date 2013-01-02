var SERVER = "http://jds2501.github.com/";

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
    installHostedApp(SERVER + "webapi-permissions-tests/manifest.webapp");
  };
  document.getElementById('hostedappperms').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/manifest.webapp");
  };
  document.getElementById('hostedapptc2').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/noicon.webapp");
  };
  document.getElementById('hostedapptc3').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/japanese.webapp");
  };
  document.getElementById('hostedapptc4').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/developernameonly.webapp");
  };
  document.getElementById('hostedapptc5').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/developerurlonly.webapp");
  };
  document.getElementById('hostedapptc6').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/singlelocaleoverride.webapp");
  };
  document.getElementById('hostedapptc7').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/doublelocaleoverride.webapp");
  };
  document.getElementById('hostedapptc8').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/privileged.webapp");
  };
  document.getElementById('hostedapptc9').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/certified.webapp");
  };
  document.getElementById('appcachepreloadtc1').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/smallappcachepreload.webapp");
  };
  document.getElementById('appcachepreloadtc2').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/mediumappcachepreload.webapp");
  };
  document.getElementById('appcachepreloadtc3').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/invalidappcachepreload.webapp");
  };
  document.getElementById('appcachepreloadtc4').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/largeappcachepreload.webapp");
  };
  document.getElementById('packagedapptc1').onclick = function() {
    installPackagedApp(SERVER + "webapi-permissions-tests/privilegedappnosigning.manifest");
  };
  document.getElementById('packagedapptc2').onclick = function() {
    installPackagedApp(SERVER + "webapi-permissions-tests/webpackagedappwithperms.manifest");
  };
  document.getElementById('packagedapptc3').onclick = function() {
    installPackagedApp(SERVER + "webapi-permissions-tests/largesizeinminimanifest.manifest");
  };
  document.getElementById('packagedapptc4').onclick = function() {
    installPackagedApp(SERVER + "webapi-permissions-tests/certifiedappnosigning.manifest");
  };
  document.getElementById('packagedapptc5').onclick = function() {
    installPackagedApp(SERVER + "webapi-permissions-tests/largepackagedappwithsize.manifest");
  };
  document.getElementById('packagedapptc6').onclick = function() {
    installPackagedApp(SERVER + "webapi-permissions-tests/largepackagedappwithoutsize.manifest");
  };
  document.getElementById('hostedappupdatetc1').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/simple_appcache_update/manifest.webapp");
  };
});
