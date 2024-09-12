const div = document.getElementById('box');

window.addEventListener('keydown', function (e) {
    div.innerHTML = `<table style="width:100%">
        <tr>
            <th>key</th>
            <th>Key-Code</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>`
})