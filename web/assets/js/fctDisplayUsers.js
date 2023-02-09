window.onload = () => {
    displayAllUsers();
}

function displayAllUsers() {
    axios.get('http://localhost:8765/users').then(async function (response) {
        const users = response.data;
        users.forEach((user => {
            document.getElementById('tableUser').innerHTML +=
                '<tr id=" user.id" style="border-bottom: 1px solid blue;">' +
                '<td class="p-4">' +
                user.name +
                '</td>' +
                '<td class="p-4">' +
                user.age +
                '</td> ' +
                '<td class="p-4">' +
                user.salary +
                '</td>' +
                '<td>' +
                '<a href="/Users/admin/Documents/JS/TP-alex/web/views/userDetail.html?id=' + user.id + '" id="displayButton" class="btn btn-warning mx-5">Afficher</a>' +
                '<a href="/Users/admin/Documents/JS/TP-alex/web/views/userDetail.html?id=' + user.id + '" id="displayButton" class="btn btn-danger mx-5">Supprimer</a>' +
                '</td>' +
                '</tr>'
        }))
    }).catch(err => console.error(err))
} 