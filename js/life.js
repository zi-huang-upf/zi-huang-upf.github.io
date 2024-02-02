const qMinesweeper = document.getElementById('q-minesweeper');

const aMinesweeper = document.getElementById('a-minesweeper');

// Show hidden DIV on click
qMinesweeper.addEventListener('click', function handleClick() {
    aMinesweeper.style.visibility = 'visible';
    aMinesweeper.style.opacity = 1;
});

const qJustin = document.getElementById('q-justin');

const aJustin = document.getElementById('a-justin');

// Show hidden DIV on click
qJustin.addEventListener('click', function handleClick() {
    aJustin.style.visibility = 'visible';
    aJustin.style.opacity = 1;
});


const qDuolingo = document.getElementById('q-duolingo');

const aDuolingo = document.getElementById('a-duolingo');

// Show hidden DIV on click
qDuolingo.addEventListener('click', function handleClick() {
    aDuolingo.style.visibility = 'visible';
    aDuolingo.style.opacity = 1;
});

const qClassical = document.getElementById('q-classical');

const aClassical = document.getElementById('a-classical');

// Show hidden DIV on click
qClassical.addEventListener('click', function handleClick() {
    aClassical.style.visibility = 'visible';
    aClassical.style.opacity = 1;
});

const qFloribunda = document.getElementById('q-floribunda');

const aFloribunda = document.getElementById('a-floribunda');

// Show hidden DIV on click
qFloribunda.addEventListener('click', function handleClick() {
    aFloribunda.style.visibility = 'visible';
    aFloribunda.style.opacity = 1;
});

const qRavel = document.getElementById('q-ravel');

const aRavel = document.getElementsByClassName('ravel');

qRavel.addEventListener('mouseover', function handleMouseOver() {
    for(var i = 0; i < aRavel.length; i++)
        {aRavel[i].style.backgroundColor = "#b9c6c5";}
});

qRavel.addEventListener('mouseout', function handleMouseOut() {
    for(var i = 0; i < aRavel.length; i++)
        {aRavel[i].style.backgroundColor = "transparent";}
});