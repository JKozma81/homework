const messageContainer = document.querySelector('.message-container');
const nameAndAddress = document.querySelector('#validation01');
const messageText = document.querySelector('#FormControlTextarea');
const alertSuccess = document.querySelector('.alert-success');
const alertFail = document.querySelector('.alert-danger');

const url = 'http://localhost:3000';

function getMessages(url) {
    fetch(`${url}/inbox`)
        .then(stream => stream.json())
        .then(data => {
            console.log(data);
        })
}

window.addEventListener('load', function () {
    const form = document.querySelector('.needs-validation');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        form.classList.add('was-validated');

        fetch(`${url}/outgoing`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({ nameAndAddress: nameAndAddress.value, message: messageText.value })
        })
            .then(resp => {
                form.classList.remove('was-validated')
                if (resp.status !== 200) {
                    alertFail.classList.add('show');
                    setTimeout(() => alertFail.classList.remove('show'), 3000)
                    return;
                }
                setTimeout(() => alertSuccess.classList.remove('show'), 3000)
                alertSuccess.classList.add('show');
                nameAndAddress.value = '';
                messageText.value = '';

            })
            .catch(err => console.error(err.toString()));
    })
    getMessages(url);
}, false);



/**
 *  Message collapse
 <p>
    <div class="container-fluid row">
        <div class="container-fluid col-6">
            <p><strong>From:</strong>{{from}}</p>
        </div>
        <div class="container-fluid col-6 text-right">
            <button class="btn btn-primary" type="button" data-toggle="collapse"
                data-target={{concat '#collapse' @index}} aria-expanded="false"
                aria-controls={{concat 'collapse' @index}}>
                Details:
            </button>
        </div>
    </div>
</p>
<div class="collapse multi-collapse" id={{concat 'collapse' @index}}>
    <div class="card card-body">
        {{message}}
    </div>
</div>
 */
