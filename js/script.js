// Include form validation functions here
function validateForm() {
    var title = document.editForm.movieName;
    var price = document.editForm.gross;
    var dateOfLaunch = document.editForm.dateOfLaunch;
    var category = document.editForm.genre;

    if (title.value == null || title.value == '') {
        alert('Enter Name of the Movie');
        return false;
    } else if (title.value.length <= 2 || title.value.length >= 65) {
        alert('Length of Movie name field should be between 2 and 65 characters');
        return false;
    } else if (price.value.length == 0) {
        alert("Enter Gross cost of Movie '"+ title.value+"' in Dollars");
        return false;
    } else if (isNaN(price.value)) {
        alert('Enter only numeric value in price field');
        return false;
    } else if (dateOfLaunch.value.length == 0) {
        alert('Enter Date of Launch');
        return false;
    } else if (!category.value) {
        alert('Select any category');
        return false;
    }

    return true;
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}