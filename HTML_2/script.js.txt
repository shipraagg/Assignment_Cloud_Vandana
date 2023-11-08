const form = document.getElementById('survey-form');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const popupResults = document.getElementById('popup-results');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    displayResults();
});

resetButton.addEventListener('click', function () {
    form.reset();
});

closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
    form.reset();
});

function displayResults() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dateOfBirth = document.getElementById('date-of-birth').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelectorAll('input[name="gender"]:checked').length > 0
        ? document.querySelector('input[name="gender"]:checked').value
        : 'Not specified';
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    const results = [
        { label: 'First Name', value: firstName },
        { label: 'Last Name', value: lastName },
        { label: 'Date of Birth', value: dateOfBirth },
        { label: 'Country', value: country },
        { label: 'Gender', value: gender },
        { label: 'Profession', value: profession },
        { label: 'Email', value: email },
        { label: 'Mobile Number', value: mobile },
    ];

    const resultsHTML = results.map(item => `<div class="popup-results-item"><label>${item.label}:</label> ${item.value}</div>`).join('');

    popupResults.innerHTML = resultsHTML;
    popup.style.display = 'block';
}
