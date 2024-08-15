document.addEventListener('DOMContentLoaded', () => {
    const healthForm = document.getElementById('health-form');
    const healthDataInput = document.getElementById('health-data');
    const healthList = document.getElementById('health-list');
    
    healthForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const healthData = healthDataInput.value;
        if (healthData) {
            const li = document.createElement('li');
            li.textContent = healthData;
            healthList.appendChild(li);
            healthDataInput.value = '';
        }
    });

    const wellnessTipButton = document.getElementById('get-tip');
    const tipText = document.getElementById('tip-text');
    wellnessTipButton.addEventListener('click', () => {
        tipText.textContent = "Drink plenty of water and stay hydrated!";
    });

    const moreTipsButton = document.getElementById('more-tips');
    moreTipsButton.addEventListener('click', () => {
        tipText.textContent = "Exercise regularly and maintain a balanced diet!";
    });

    const reportAlertButton = document.getElementById('report-alert');
    const alertResponse = document.getElementById('alert-response');
    reportAlertButton.addEventListener('click', () => {
        alertResponse.textContent = "Safety alert reported successfully!";
    });

    const locationButton = document.getElementById('get-location');
    const locationInfo = document.getElementById('location-info');
    locationButton.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                locationInfo.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
            }, (error) => {
                locationInfo.textContent = 'Unable to retrieve location';
            });
        } else {
            locationInfo.textContent = 'Geolocation is not supported by this browser.';
        }
    });

    const serviceTypeSelect = document.getElementById('service-type');
    const requestServiceButton = document.getElementById('request-service');
    const serviceRequests = document.getElementById('service-requests');
    requestServiceButton.addEventListener('click', () => {
        const selectedService = serviceTypeSelect.value;
        const li = document.createElement('li');
        li.textContent = `Requested: ${selectedService}`;
        serviceRequests.appendChild(li);
    });
});
