$(document).ready(function () {

    var hrefParas = document.location.pathname.split('/');
    var uriId = hrefParas[1];
    var title = document.getElementById('title');

    $.get("api/articles/" + uriId, function (data) {

        var a = document.createElement('div');
        a.innerHTML = data.htmlContent;
        a.classList.add('container');
        document.getElementById('content').appendChild(a);

        title.innerText = data.title;

    });



});
