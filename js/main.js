document.getElementById('check').onclick = function() {
    document.getElementById('check').classList.toggle('active');
}

function showFileInput() {
    var fileInput = document.getElementById("fileInput");
    fileInput.click();
}


let tab = function() {
    let tabNav = document.querySelectorAll(".price__box"),
        tabContent = document.querySelectorAll(".bill__inner_right"),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    })

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('cheked')
        });
        this.classList.add('cheked');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('cheked') :
                item.classList.remove('cheked');

        })
    }
};

tab();

let meth = function() {
    let tabNav = document.querySelectorAll(".bw-1 , .bw-2 , .bw-3 , .bw-4 , .bw-5 , .bw-6");

    tabNav.forEach(item => {
        item.addEventListener('click', selectMethod)
    })

    function selectMethod() {
        tabNav.forEach(item => {
            item.classList.remove('cheked')
        });
        this.classList.add('cheked');

    }

};


meth();



function input_onchange(me) {
    if (me.value.length < me.getAttribute('maxlength') - 1) {
        return;
    }
    let i;
    let elements = me.form.elements;
    for (i = 0, numElements = elements.length; i < numElements; i++) {
        if (elements[i] == me) {
            break;
        }
    }
    elements[i + 1].focus();
}




/*
var inp = document.getElementById("card5");

var old = 0;

inp.onkeydown = function() {
    var curLen = inp.value.length;

    if (curLen < old) {
        old--;
        return;
    }
    if (curLen == 2)
        inp.value = inp.value + "/";

    old++;
}*/