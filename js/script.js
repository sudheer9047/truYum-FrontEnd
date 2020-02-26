// Include truYum form validation functions here
var foodDatas = [
    { id: 1, prodname: 'Sandwich', price: 99, active: 'Yes', dateOfLaunch: '2017-03-15', category: 'Main Course', freeDelivery: 'Yes' },
    { id: 2, prodname: 'Burger', price: 129, active: 'Yes', dateOfLaunch: '2017-04-12', category: 'Main Course', freeDelivery: 'No' },
    { id: 3, prodname: 'Pizza', price: 149, active: 'Yes', dateOfLaunch: '2017-02-15', category: 'Main Course', freeDelivery: 'No' },
    { id: 4, prodname: 'French Fries', price: 57, active: 'No', dateOfLaunch: '2017-04-25', category: 'Starters', freeDelivery: 'Yes' },
    { id: 5, prodname: 'Chocolate Brownies', price: 32, active: 'Yes', dateOfLaunch: '2017-05-07', category: 'Dessert', freeDelivery: 'Yes' }
];
localStorage.setItem('foodDatas', foodDatas);

id = '';
currentData = {};
var cart = [];

function admin() {
    displayDataAdmin(foodDatas);
}

function customer() {
    let adminContent = document.getElementById('admin-content');
    let customerContent = document.getElementById('customer-content');

    adminContent.style.display = 'none';
    customerContent.style.display = 'block';
    displayDataCustomer(foodDatas);
}

const displayDataCustomer = function (foodDatas) {
    let tBody = document.getElementById('customer-table');
    tBody.innerHTML = '';

    for (let foodData of foodDatas) {

        let row = document.createElement('tr');
        let col1 = document.createElement('td');
        let col2 = document.createElement('td');
        let col3 = document.createElement('td');
        let col4 = document.createElement('td');
        let col5 = document.createElement('td');
        let addToCart = document.createElement('a');

        col1.textContent = foodData.name;
        row.appendChild(col1);

        col2.textContent = foodData.freeDelivery;
        row.appendChild(col2);

        col3.textContent = foodData.price;
        row.appendChild(col3);

        col4.textContent = foodData.category;
        row.appendChild(col4);

        addToCart.href = "menu-item-list-customer-notification.html";
        addToCart.onclick = function () {
            cart.push(foodData);
        }
        addToCart.textContent = "Add to Cart";
        // addToCart.classList.add('mdl-button','mdl-js-button');

        col5.appendChild(addToCart);
        row.appendChild(col5);
        tBody.appendChild(row);

    }
}

const displayDataAdmin = function (foodDatas) {
    let tBody = document.getElementById('tBodyAdmin');
    tBody.innerHTML = '';

    for (let foodData of foodDatas) {
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
        edit.href = "edit-menu-item.html?id=" + foodData.id;
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
    let ind = foodDatas.findIndex(item => item.id == id);
    if (ind === -1) {
        return
    }
    const foodData = foodDatas[ind];
    const idsList = ['price', 'dateOfLaunch', 'category', 'prodname'];
    for (const iterator of idsList) {
        document.getElementById(iterator).value = foodData[iterator];
    }
    document.getElementById('freeDelivery').checked = foodData['freeDelivery'] === 'Yes';
    foodData['active'] === 'Yes' ? document.getElementById('active_yes').checked = true : document.getElementById('active_no').checked = true
}

function onSave() {
    currentData = {
        id: +id,
        prodname: document.getElementById('prodname').value,
        price: document.getElementById('price').value,
        active: document.getElementById('active_yes').checked ? 'Yes' : 'No',
        dateOfLaunch: document.getElementById('dateOfLaunch').value,
        category: document.getElementById('category').value,
        freeDelivery: document.getElementById('freeDelivery').checked ? 'Yes' : 'No'
    };
    let ind = foodDatas.findIndex(item => item.id == id);
    if (ind > -1) {
        foodDatas[ind] = currentData;
    }
}

