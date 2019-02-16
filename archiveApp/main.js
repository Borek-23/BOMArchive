const baseAPI = "https://sheetlabs.com/BMAG/bmagremixedv2";

// This will be using a CRUD method (Create, Read, Update, Delete)
// Action       HTTP Method     Definition
//
// Create       POST            Creates a new resource
// Read         GET             Retrieves a resource
// Update       PUT/PATCH       Updates an existing resource
// Delete       DELETE          Deletes a resource

// First need to open a connection to the API
var request = new XMLHttpRequest();

// Now open a new connection
request.open('GET', baseAPI, true);

const app = document.getElementById('output');


request.onload = function () {
    // Here I start to access the data
    var data = JSON.parse(this.response);

    console.log(data);

    if (request.status >= 200 && request.status < 400) {
        // Go through images one by one
        data.forEach(image => {
            const card = document.createElement('div');
            card.innerText = image.imagethumb;
            app.appendChild(card);
        });
    } else {
        console.error("data wasn't read well");
    }
};

// Then must send a request to make thing happen
request.send();




