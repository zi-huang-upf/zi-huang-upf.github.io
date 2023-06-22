const inputArea = document.getElementById("inputArea");
const outputArea = document.getElementById("outputArea");

const btnFrench = document.getElementById("btnFrench");
const btnGerman = document.getElementById("btnGerman");
const btnMixed= document.getElementById("btnMixed");

const reLetterOnly = /[a-zA-Z]+/g;
const reMixed = /[0-9a-zA-Z]+/g;

const oneLetterFrench = {
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    e: 'E',
    f: 'F',
    g: 'G',
    h: 'A',
    i: 'B',
    j: 'C',
    k: 'D',
    l: 'E',
    m: 'F',
    n: 'G',
    o: 'A',
    p: 'B',
    q: 'C',
    r: 'D',
    s: 'E',
    t: 'F',
    u: 'G',
    v: 'A',
    w: 'B',
    x: 'C',
    y: 'D',
    z: 'E',
}

const oneLetterGerman = {
    a: 'A',
    b: 'B-flat',
    c: 'C',
    d: 'D',
    e: 'E',
    f: 'F',
    g: 'G',
    h: 'B',
    s: 'E-flat',
}

const combinations = {
    'do': 'C',
    're': 'D',
    'mi': 'E',
    'fa': 'F',
    'sol': 'G',
    'la': 'A',
    'si': 'B',
    'ti': 'B',
    'ut': 'C',
    'es': 'E-flat',
    'ces': 'C-flat',
    'cis': 'C-sharp',
    'des': 'D-flat',
    'dis': 'D-sharp',
    'eis': 'E-sharp',
    'fes': 'F-flat',
    'fis': 'F-sharp',
    'ges': 'G-flat',
    'gis': 'G-sharp',
    'as': 'A-flat',
    'ais': 'A-sharp',
    'bes': 'B-flat',
    'bis': 'B-sharp',
    'his': 'B-sharp'
}

const numbers = {
    '0': 'B',
    '1': 'C',
    '2': 'D',
    '3': 'E',
    '4': 'F',
    '5': 'G',
    '6': 'A',
    '7': 'B',
    '8': 'C',
    '9': 'D'
}

const turnFrench = function(s) {
    let output = [];
    for (let letter of s) {
        output.push(letter + '\t' + oneLetterFrench[letter])
    }
    return output;
}

const turnGerman = function(s) {
    let output = [];
    let i = 0;
    while (i < s.length) {
        if (s.slice(i, i+3) in combinations) {
            output.push(s.slice(i, i+3) + '\t' + combinations[s.slice(i, i+3)]);
            i += 3;
        }
        else if (s.slice(i, i+2) in combinations) {
            output.push(s.slice(i, i+2) + '\t' + combinations[s.slice(i, i+2)]);
            i += 2;
        }
        else if (s[i] in oneLetterGerman) {
            output.push(s[i] + '\t' + oneLetterGerman[s[i]]);
            i ++;
        }
        else i++;
    }
    return output;
}

const turnMixed = function(s) {
    let output = [];
    let i = 0;
    while (i < s.length) {
        if (s.slice(i, i+3) in combinations) {
            output.push(s.slice(i, i+3) + '\t' + combinations[s.slice(i, i+3)]);
            i += 3;
        }
        else if (s.slice(i, i+2) in combinations) {
            output.push(s.slice(i, i+2) + '\t' + combinations[s.slice(i, i+2)]);
            i += 2;
        }
        else if (s[i] in oneLetterGerman) {
            output.push(s[i] + '\t' + oneLetterGerman[s[i]]);
            i ++;
        }
        else if (s[i] in oneLetterFrench) {
            output.push(s[i] + '\t' + oneLetterFrench[s[i]]);
            i ++;
        }
        else if (s[i] in numbers) {
            output.push(s[i] + '\t' + numbers[s[i]]);
            i ++;
        }
        else i++;
    }
    return output;
}

btnFrench.addEventListener("click", function() {
    let inputName = inputArea.value;
    inputName = inputName.match(reLetterOnly).join('').toLowerCase();
    outputMotif = turnFrench(inputName);
    outputArea.innerHTML = outputMotif.join('\n');
});

btnGerman.addEventListener("click", function() {
    let inputName = inputArea.value;
    inputName = inputName.match(reLetterOnly).join('').toLowerCase();
    outputMotif = turnGerman(inputName);
    outputArea.innerHTML = outputMotif.join('\n');
});

btnMixed.addEventListener("click", function() {
    let inputName = inputArea.value;
    inputName = inputName.match(reLetterOnly).join('').toLowerCase();
    outputMotif = turnMixed(inputName);
    outputArea.innerHTML = outputMotif.join('\n');
});