document.getElementById('next').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').append(lists[0]); //appendChild
}
document.getElementById('prev').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// auto 
autoslide()

function autoslide() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').append(lists[0]); //apendChild

    setTimeout(autoslide, 5000);
}