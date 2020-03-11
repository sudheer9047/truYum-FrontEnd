// -- Include form validation functions here

var movies = [
    { id: 1, title: 'Avatar', 'boxOffice': '$ 2,787,965,087', active: 'Yes', genre: 'Science Fiction', dateOfLaunch: '2017-03-15', 'hasTeaser': 'Yes' },
    { id: 2, title: 'The Avengers', 'boxOffice': '$ 1,518,812,988', active: 'Yes', genre: 'Superhero', dateOfLaunch: '2017-12-23', 'hasTeaser': 'No' },
    { id: 3, title: 'Titanic', 'boxOffice': '$ 2,187,463,944', active: 'Yes', genre: 'Romance', dateOfLaunch: '2017-08-21', 'hasTeaser': 'No' },
    { id: 4, title: 'Jurassic World', 'boxOffice': '$ 1,167,713,208', active: 'No', genre: 'Science Fiction', dateOfLaunch: '2017-02-07-', 'hasTeaser': 'Yes' },
    { id: 5, title: 'Avengers: End Game', 'boxOffice': '$ 2,750,760,348', active: 'Yes', genre: 'Superhero', dateOfLaunch: '2017-02-28', 'hasTeaser': 'Yes' },
];
function validateForm() {
    var title = document.editForm.movieName;
    var price = document.editForm.gross;
    var dateOfLaunch = document.editForm.dateOfLaunch;
    var category = document.editForm.genre;
    console.log(dateOfLaunch);
    if (title.value == null || title.value == '') {
        alert('Enter Name of the Movie');
        return false;
    } else if (title.value.length <= 2 || title.value.length >= 65) {
        alert('Length of Movie name field should be between 2 and 65 characters');
        return false;
    } else if (price.value.length == 0) {
        alert("Enter Gross cost of Movie '" + title.value + "' in Dollars");
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

function loadAdminData() {
    let tBody = document.getElementById('tBodyAdmin');
    tBody.innerHTML = '';

    for (let foodData of movies) {
        let row = document.createElement('tr');
        for (const key in foodData) {
            if (foodData.hasOwnProperty(key) && key !== 'id') {
                let col1 = document.createElement('td');
                col1.setAttribute('style', 'text-align:left');
                col1.textContent = foodData[key];
                row.appendChild(col1);
            }
        }
        let col7 = document.createElement('td');
        let edit = document.createElement('a');
        edit.href = "edit-movie.html?id=" + foodData.id;
        edit.textContent = "Edit";
        edit.id = foodData.id;
        col7.appendChild(edit);
        row.appendChild(col7);
        tBody.appendChild(row);
    }
}

function editData() {
    let ids = window.location.search.split('=');
    id = ids[ids.length - 1];
    let ind = movies.findIndex(item => item.id == id);
    if (ind === -1) {
        return
    }
    const foodData = movies[ind];
    const idsList = ['title', 'boxOffice', 'genre', 'dateOfLaunch'];
    for (const iterator of idsList) {
        document.getElementById(iterator).value = foodData[iterator];
    }
    document.getElementById('has-teaser').checked = foodData['hasTeaser'] === 'Yes';
    foodData['active'] === 'Yes' ? document.getElementById('active_yes').checked = true : document.getElementById('active_no').checked = true
}