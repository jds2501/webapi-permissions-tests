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
  document.getElementById('hostedapptc10').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/multipleicons.webapp");
  };
  document.getElementById('hostedapptc11').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/nopermissions.webapp");
  };
  document.getElementById('hostedapptc12').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/geolocationonly.webapp");
  };
  document.getElementById('hostedapptc13').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/nodeveloperinfoandperms.webapp");
  };
  document.getElementById('hostedapptc14').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/geolocationonlywithnodevinfo.webapp");
  };
  document.getElementById('hostedapptc15').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/portraitprimaryorientationlock.webapp");
  };
  document.getElementById('hostedapptc16').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/landscapeprimaryorientationlock.webapp");
  };
  document.getElementById('hostedapptc17').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/portraitsecondaryorientationlock.webapp");
  };
  document.getElementById('hostedapptc18').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/landscapesecondaryorientationlock.webapp");
  };
  document.getElementById('hostedapptc19').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/portraitorientationlock.webapp");
  };
  document.getElementById('hostedapptc20').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/landscapeorientationlock.webapp");
  };
  document.getElementById('hostedapptc21').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/fullscreen.webapp");
  };
  document.getElementById('hostedapptc22').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/browserinhostedapp.webapp");
  };
  document.getElementById('hostedapptc23').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/manyperms.webapp");
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
  document.getElementById('packagedapptc7').onclick = function() {
    installPackagedApp(SERVER + "webapi-permissions-tests/localeoverride.manifest");
  };
  document.getElementById('packagedapptc8').onclick = function() {
    installPackagedApp(SERVER + "webapi-permissions-tests/noicon.manifest");
  };
  document.getElementById('packagedapptc9').onclick = function() {
    installPackagedApp(SERVER + "webapi-permissions-tests/doesnotexist.manifest");
  };
  document.getElementById('packagedapptc10').onclick = function() {
    installPackagedApp(SERVER + "webapi-permissions-tests/invalidfiletype.manifest");
  };
  document.getElementById('packagedapptc11').onclick = function() {
    installPackagedApp(SERVER + "webapi-permissions-tests/invalidmanifest.manifest");
  };
  document.getElementById('packagedapptc12').onclick = function() {
    installPackagedApp(SERVER + "webapi-permissions-tests/invalidminimanifest.manifest");
  };
  document.getElementById('packagedapptc13').onclick = function() {
    installPackagedApp(SERVER + "webapi-permissions-tests/uitestswebtype.manifest");
  };
  document.getElementById('packagedapptc14').onclick = function() {
    installPackagedApp(SERVER + "webapi-permissions-tests/nodeveloper.manifest");
  };
  document.getElementById('hostedappupdatetc1').onclick = function() {
    installHostedApp(SERVER + "webapi-permissions-tests/simple_appcache_update/manifest.webapp");
  };
  document.getElementById('packagedappupdatetc1').onclick = function() {
    installPackagedApp(SERVER + "webapi-permissions-tests/simple_packaged_update/simple_packaged_update.manifest");
  };
});
