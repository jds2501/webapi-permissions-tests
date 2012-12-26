function alarmTest() {
	var output = document.getElementById('alarmsoutput');
	var request = navigator.mozAlarms.getAll();

	request.onsuccess = function (e) { 
		output.textContent = "Successful: " + e.target.result;
	};
	request.onerror = function (e) {
		output.textContent = "Error: " + e.target.error.name; 
	};
}

function contactTest() {
  var contact = new mozContact();
  contact.init({name: "Tom"});
  var request = navigator.mozContacts.save(contact);

  var output = document.getElementById('contactsoutput');

  request.onsuccess = function() {
    output.textContent = "Successful addition of a contact";
  };
  request.onerror = function() {
    output.textContent = "Failed to add a contact";
  };
}

function desktopNotificationTest() {
  var notification = navigator.mozNotification.createNotification(
		"Sample title", "Sample description", "qalogo.png");
  notification.show();
}

function deviceStorageTest(type) {
  var storage = navigator.getDeviceStorage(type);
  var result = storage.enumerate();
  var output = document.getElementById('devicestorageoutput');
  output.textContent = "";

  result.onsuccess = function(obj) {

    if(obj.target.result === null) {
      output.textContent = output.textContent + "|| enumerate for type " + type + " has finished";
    } else {
      var filename = e.target.result.name;
      output.textContent = output.textContent + "|| enumerate for type " + type + " found " + filename;
      object.target.continue();
    }

  };

  result.onerror = function(err) {
    output.textContent = "enumerate failed on type " + type + " with " + err.target.error.name;
  };
}

function fmradioTest() {
  var antennaAvailable = navigator.mozFMRadio.antennaAvailable;
  var enabled = navigator.mozFMRadio.enabled;
  var frequency = navigator.mozFMRadio.frequency;

  var output = document.getElementById('fmradiooutput');
  output.textContent = "antennaAvailable: " + antennaAvailable + ", enabled: " + enabled + ", frequency: " + frequency;
}

function geolocationTest() {
  var output = document.getElementById('geolocationoutput');

  navigator.geolocation.getCurrentPosition(function(position) {
    output.textContent = position.coords.latitude + " " + position.coords.longitude;
  }, function(error) {
    output.textContent = error.message;
  }, {enableHighAccuracy: false, timeout: 6000});
}

function goFullscreen() {
	var webapiBody = document.getElementById('webapibody');
	webapiBody.mozRequestFullScreen();
}

window.addEventListener("DOMContentLoaded", function() {
	document.getElementById('fullscreen').onclick = goFullscreen;
	document.getElementById('alarm').onclick = alarmTest;
  document.getElementById('contacts').onclick = contactTest;
  document.getElementById('notification').onclick = desktopNotificationTest;
  document.getElementById('geolocation').onclick = geolocationTest;
  document.getElementById('fmradio').onclick = fmradioTest;

  document.getElementById('device storage pictures').onclick = function() {
    deviceStorageTest('pictures');
  };

  document.getElementById('device storage music').onclick = function() {
    deviceStorageTest('music');
  };

  document.getElementById('device storage sdcard').onclick = function() {
    deviceStorageTest('sdcard');
  };

  document.getElementById('device storage videos').onclick = function() {
    deviceStorageTest('videos');
  };
});