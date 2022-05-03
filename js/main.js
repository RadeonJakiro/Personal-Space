function showOrhide(x) {
    var docToHide = document.getElementById(x);
    if (docToHide.style.display === 'none') {
        docToHide.style.display = 'block';
    } else {
        docToHide.style.display = 'none';
    }
}