const qMinesweeper = document.getElementById('q-minesweeper');

const aMinesweeper = document.getElementById('a-minesweeper');

// Show hidden DIV on hover
qMinesweeper.addEventListener('mouseover', function handleMouseOver() {
    aMinesweeper.style.visibility = 'visible';;
});
// Hide when mouse is away    
qMinesweeper.addEventListener('mouseout', function handleMouseOut() {
    aMinesweeper.style.visibility = 'hidden';

});

const qDuolingo = document.getElementById('q-duolingo');

const aDuolingo = document.getElementById('a-duolingo');

// Show hidden DIV on hover
qDuolingo.addEventListener('mouseover', function handleMouseOver() {
    aDuolingo.style.visibility = 'visible';;
});
// Hide when mouse is away    
qDuolingo.addEventListener('mouseout', function handleMouseOut() {
    aDuolingo.style.visibility = 'hidden';

});