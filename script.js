function calculateBMR() {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Calculate BMR using the Mifflin-St Jeor formula
    const genderFactor = (gender === 'male') ? 5 : -161;
    const bmr = (10 * weight) + (6.25 * height) - (5 * age) + genderFactor;

    document.getElementById('bmrResult').innerText = `${bmr.toFixed(2)} kcal/天`;

    // Update TDEE calculation results
    updateTDEE(bmr);

    // Hide the calculate button after calculation
    const button = document.getElementById('interactiveButton');
    button.style.display = 'none';
}

function updateTDEE(bmr) {
    document.getElementById('tdee1').innerText = (bmr * 1.2).toFixed(2) + " kcal/天";
    document.getElementById('tdee2').innerText = (bmr * 1.375).toFixed(2) + " kcal/天";
    document.getElementById('tdee3').innerText = (bmr * 1.55).toFixed(2) + " kcal/天";
    document.getElementById('tdee4').innerText = (bmr * 1.725).toFixed(2) + " kcal/天";

    document.getElementById('weightLoss1').innerText = (bmr * 1.2 - 300).toFixed(2) + " kcal/天";
    document.getElementById('weightLoss2').innerText = (bmr * 1.375 - 300).toFixed(2) + " kcal/天";
    document.getElementById('weightLoss3').innerText = (bmr * 1.55 - 300).toFixed(2) + " kcal/天";
    document.getElementById('weightLoss4').innerText = (bmr * 1.725 - 300).toFixed(2) + " kcal/天";
}

function showGeneral() {
    document.getElementById('generalPage').style.display = 'block';
    document.getElementById('weightLossPage').style.display = 'none';

    // Set the "General" button as sunken and the "Weight Loss" button as raised
    const generalButton = document.getElementById('generalButton');
    const weightLossButton = document.getElementById('weightLossButton');

    generalButton.classList.add('sunken');
    generalButton.classList.remove('raised');

    weightLossButton.classList.add('raised');
    weightLossButton.classList.remove('sunken');
}

function showWeightLoss() {
    document.getElementById('generalPage').style.display = 'none';
    document.getElementById('weightLossPage').style.display = 'block';

    // Set the "Weight Loss" button as sunken and the "General" button as raised
    const generalButton = document.getElementById('generalButton');
    const weightLossButton = document.getElementById('weightLossButton');

    weightLossButton.classList.add('sunken');
    weightLossButton.classList.remove('raised');

    generalButton.classList.add('raised');
    generalButton.classList.remove('sunken');
}

// Add form submit event listener
document.getElementById('bmrForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    calculateBMR(); // Execute BMR calculation function
});

// Add button interaction effects
const button = document.getElementById('interactiveButton');
button.addEventListener('mouseover', () => {
    button.classList.add('sunken');
    button.classList.remove('raised');
});

button.addEventListener('mouseout', () => {
    button.classList.add('raised');
    button.classList.remove('sunken');
});