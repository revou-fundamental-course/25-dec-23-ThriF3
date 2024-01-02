var kategori_rumus = document.getElementById('kategori-rumus');
var hasil_luas = document.getElementById('hasil-luas');
var alas_result = document.getElementById('alas-result');
var keliling_result = document.getElementById('keliling-result');

function luas() {
    const alas = document.getElementById('alas').value
    const tinggi = document.getElementById('tinggi').value
    var result = (alas * tinggi)/2;

    hasil_luas.innerHTML = result;
    keliling_result.style.setProperty("background-color", '#010B19ff')
    alas_result.style.setProperty("background-color", '#05377bff')
}

function keliling() {
    const a = parseInt(document.getElementById('a').value)
    const b = parseInt(document.getElementById('b').value)
    const c = parseInt(document.getElementById('c').value)
    let result = a + b + c;

    hasil_keliling.innerHTML = result;
    alas_result.style.setProperty("background-color", '#010B19ff')
    keliling_result.style.setProperty("background-color", '#05377bff')
}