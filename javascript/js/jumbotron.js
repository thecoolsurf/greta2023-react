function jumbotron(title, date) {
    let html = '';
    html += '<div class="container">';
    html += '<h1>' + title + ' - ' + date + '</h1>';
    html += '<p>Best practices in Javascript<b id="username"></b></p>';
    html += '</div>';
    document.getElementById('jumbotron').innerHTML = html;
}
jumbotron('Lesson #9','2023-11-15');