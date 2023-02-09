window.onload = () => {
    displayOneUser();
}

function displayOneUser() {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    let id = params.get('id');
    let urlapi = "http://localhost:8765/user/" + id;
    axios.get(urlapi).then(async function (response) {
        const user = response.data;
        document.getElementById('tableUser2').innerHTML +=
            '<tr id=" user.id" style="border-bottom: 1px solid blue;"><td class="p-4">' +
            user.id +
            '</td><td class="p-4">' +
            user.name +
            '</td><td class="p-4">' +
            user.age +
            '</td><td class="p-4">' +
            user.salary +
            '</td><td><a href="/' +
            user.id +
            '"id="displayButton" class="btn btn-danger mx-5">Supprimer</a></td></tr>'
    })
        .catch(err => console.error(err))
}