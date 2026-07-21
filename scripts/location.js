document.addEventListener('DOMContentLoaded', () => {
  const btnCurrentLocation = document.getElementById('btnCurrentLocation');
  const btnManualLocation = document.getElementById('btnManualLocation');
  const btnSkip = document.getElementById('btnSkip');
  
  const statusContainer = document.getElementById('permissionStatus');
  const statusIcon = statusContainer.querySelector('.status-icon');
  const statusText = statusContainer.querySelector('.status-text');

  // Helper to show status messages
  const showStatus = (type, message, icon) => {
    statusContainer.className = `permission-status ${type}`;
    statusText.textContent = message;
    statusIcon.textContent = icon;
  };

  // Handle "Use Current Location"
  btnCurrentLocation.addEventListener('click', () => {
    // Check if Geolocation is supported
    if (!navigator.geolocation) {
      showStatus('error', 'Geolocation is not supported by your browser.', 'error');
      return;
    }

    // UI Loading State
    btnCurrentLocation.classList.add('loading');
    statusContainer.classList.add('hidden'); // Hide previous messages

    // Request Location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Success
        btnCurrentLocation.classList.remove('loading');
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        
        showStatus('success', 'Location found successfully!', 'check_circle');
        
        console.log(`Location accessed: Lat: ${lat}, Lng: ${lng}`);
        
        // Simulate redirect to Home after 1 second
        setTimeout(() => {
          console.log('Redirecting to Home Screen...');
          // window.location.href = 'home.html';
        }, 1000);
      },
      (error) => {
        // Error / Permission Denied
        btnCurrentLocation.classList.remove('loading');
        let errorMsg = 'Unable to retrieve your location.';
        
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMsg = 'Location permission denied. Please enable it in your settings.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMsg = 'Location information is unavailable right now.';
            break;
          case error.TIMEOUT:
            errorMsg = 'The request to get your location timed out.';
            break;
        }
        
        showStatus('error', errorMsg, 'location_off');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  });

  // Handle "Select Manually"
  btnManualLocation.addEventListener('click', () => {
    console.log('Navigating to Map / Manual Selection Screen...');
    // window.location.href = 'map-selection.html';
  });

  // Handle "Skip"
  btnSkip.addEventListener('click', () => {
    console.log('Skipping location setup. Using default location...');
    // window.location.href = 'home.html';
  });
});
