let data_js = {
    '2023-11-03': 'Lesson #1',
    '2023-11-06': 'Lesson #2',
    '2023-11-07': 'Lesson #3',
    '2023-11-08': 'Lesson #4',
    '2023-11-09': 'Lesson #5',
    '2023-11-10': 'Lesson #6',
    '2023-11-13': 'Lesson #7',
    '2023-11-14': 'Lesson #8',
    '2023-11-15': 'Lesson #9',
    '2023-11-16': 'Lesson #10',
    '2023-11-17': 'Lesson #11',
};
let data_react = {
    '2023-11-20': 'Lesson #12',
    '2023-11-21': 'Lesson #13',
    '2023-11-22': 'Lesson #14',
    '2023-11-23': 'Lesson #15',
    '2023-11-24': 'Lesson #16',
}
function navbarDropdown(title, data) {
    let html = '';
    html += '<li>';
    html += '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
    html += title;
    html += '</a>';
    html += '<div class="dropdown-menu" aria-labelledby="navbarDropdown">';
    for (let href in data) {
        html += `<a class="dropdown-item" href="../${href}/index.html">${href} - ${data[href]}</a>`;
    };
    html += '</div>';
    html += '</li>'
    return html;
}

function navBarHtml() {
    let html = '';
    html += '<div class="collapse navbar-collapse" id="navbarSupportedContent">';
    html += '<ul class="navbar-nav mr-auto">';
    html += navbarDropdown('Javascript', data_js);
    html += navbarDropdown('ReactJS', data_react);
    html += '</ul>';
    html += '</div>';
    return html;
}

let menus = navBarHtml(data_js);
document.querySelector('nav').innerHTML = menus;
