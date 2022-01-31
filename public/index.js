document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form');
    var popup = document.getElementById('modal');
    var header = document.getElementById('header');
    var description = document.getElementById('description');
    var button = document.getElementById('subButton');

    var inputs = [
        document.getElementById('name'),
        document.getElementById('lastName'),
        document.getElementById('occupation'),
        document.getElementById('bloodType'),
        document.getElementById('favoriteSong'),
        document.getElementById('postCode'),
        document.getElementById('shoeSize'),
        document.getElementById('zodiak'),
        document.getElementById('peniseSize'),
        document.getElementById('agree'),
    ];

    form.addEventListener('keyup', function() {
        for (var i = 0; i < inputs.length; ++i) {
            var input = inputs[i];

            if (!input.value) {
                button.setAttribute('disabled', 'true');

                return;
            }
        }

        button.removeAttribute('disabled');
    })

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
        for (var i = 0; i < inputs.length; ++i) {
            var input = inputs[i];

            input.value = '';
        }

        button.setAttribute('disabled', 'true');
        popup.classList.remove('show');
    })
});
