const add = document.querySelectorAll('.add');

add.forEach(e => {
    e.addEventListener('click',()=>{
        const p= e.previousElementSibling.lastElementChild; //its targetting p element with class hide
        const itemadd = e.firstElementChild;
        const itemrmv = e.lastElementChild;
        e.classList.toggle('none');
        itemadd.classList.toggle('hide');
        itemrmv.classList.toggle('hide');
        p.classList.toggle('show');
    })
}

)