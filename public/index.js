document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form');
    var popup = document.getElementById('modal');
    var header = document.getElementById('header');
    var description = document.getElementById('description');

    form.onsubmit = function(event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest(); // у конструктора нет аргументов

        xhr.open('GET', '/api');
        xhr.responseType = 'json';
        xhr.send();

        xhr.onload = function() {
            if (xhr.status != 200) {
                alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            } else {
                header.innerText = xhr.response.title;
                description.innerText = xhr.response.description;

                popup.classList.add('show');
            }
        };
    }

    var submitButton = document.getElementById('modal-sub');

    submitButton.addEventListener('click', function() {
        popup.classList.remove('show');
    })
});
