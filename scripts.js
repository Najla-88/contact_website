// api url
const api_url =
    "http://localhost:3000/contacts";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    // if (response) {
    // 	hideloader();
    // }
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let container = document.getElementsByClassName('container')[0];

    console.log(data)

    // Loop to access all rows
    for (let r of data) {
        container.innerHTML += `
        <div class="card">
            <img src="default_profile.png" alt="Person" class="card__image">
            <p class="card__name">${r.name}</p>
            <div class="grid-container">

                <div class="grid-child-posts">
                    ${r.phone}
                </div>
                
                <div class="grid-child-posts">
                    ${r.email}
                </div>
            </div>
            <button class="btn draw-border">Delete</button>
            <button class="btn draw-border">Edit</button>
        </div>
        <tr>
</tr>`;
    }
    // console.log(container)
    // Setting innerHTML as tab variable
    // document.body.appendChild(container);
}