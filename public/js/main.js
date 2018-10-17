
// $(document).ready(function() {
// //     var editor = new Simditor({
// //         textarea: $('#editor'),
// //         cleanPaste: true,
// //         placeholder: 'Hello World...'
// //     });
// // });

var formSubmit = document.getElementById('button-submit');
var modal = document.getElementById('modal-success');
var modalClose = document.getElementById('modal-close');
var successLink = document.getElementById('success-link');
var editor = new Simditor({
    textarea: $('#editor'),
    placeholder: 'Hello World...'
});

formSubmit.onclick = function () {

    $.post('api/articles', $('form').serialize(), function (data) {

        successLink.href = data.uriId;
        successLink.innerText = data.uriId;
        // console.log(data.uriId);
        modal.classList.add('is-active');

    })

};

modalClose.onclick = function () {

    modal.classList.remove('is-active');

};

