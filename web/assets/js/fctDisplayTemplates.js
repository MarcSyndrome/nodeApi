window.onload = () => {
    displayHeader();
}

function displayHeader() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/Users/admin/Documents/JS/TP-alex/web/views/templates/header.html", true);
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            document.querySelector("section").insertAdjacentHTML("beforeend", this.responseText);
        }
    };
    xhr.send();
}