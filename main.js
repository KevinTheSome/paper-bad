const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}


const button = document.getElementById("lang")
var lang = "RUS"

button.onclick = changeLang

function changeLang() {
    if(lang == "LV"){
        button.innerHTML = "🇷🇺"
        lang = "RUS"
        console.log(lang);
        lv()
    }else{
        button.innerHTML = "🇱🇻"
        lang = "LV"
        console.log(lang);
        rus()
    }
}

const titel = document.getElementById("title")
const why = document.getElementById("why")
const whyDesc = document.getElementById("whyDesc")
const problem = document.getElementById("problem")
const problem2 = document.getElementById("problem2")
const problem3 = document.getElementById("problem3")
const fixproblem = document.getElementById("fixproblem")
const fixproblem1 = document.getElementById("fixproblem1")
const fixproblem2 = document.getElementById("fixproblem2")
const fixproblem3 = document.getElementById("fixproblem3")
const fixproblem4 = document.getElementById("fixproblem4")
const fixproblem5 = document.getElementById("fixproblem5")


function lv()
{
    titel.innerHTML = "Taupi papīru"
    why.innerHTML = "kapēc mes Izvēlējāmies papīru"
    whyDesc.innerHTML = "Jo mēs dzivojot valstij kur liela daļa no zemes ir mežš mums rūp mūsu un ekosistēmas veselība"
    problem.innerHTML = "problemas ko izraisa papīrs"
    problem2.innerHTML = "2. izciršana"
    problem3.innerHTML = "3. piesārņošana"
    fixproblem.innerHTML = "iemesli ko darit lai salabotu problemu"
    fixproblem1.innerHTML = "Katram studentam iedot skolas planšeti kur var pierakstīt, lasīt materiālus un pildīt uzdevumus. Planšetēm ir ierobežojumi uz jebkādām citām aplikācijām kas var novērst studentu no mācībām."
    fixproblem2.innerHTML = "Izmantot video un citus materiālus nevis papīra lapas."
    fixproblem3.innerHTML = "3. Darīt pārbaudes darbus uz datoriem/telefoniem nevis uz lapām."
    fixproblem4.innerHTML = "4. pārstrādāt papīru kad beiguši izmantot (iemest speciālaja kastē/papīrgrozā)."
    fixproblem5.innerHTML = "5. varbut darīt darbus vairāk datorklasē vai strādāt vairāk ar elektroniskajām grāmatām, piemēram, skola2030 vai soma.lv"
}

function rus()
{
    titel.innerHTML = "Растрата бумаги"
    why.innerHTML = "kapēc mes Izvēlējāmies papīru"
    whyDesc.innerHTML = "Jo mēs dzivojot valstij kur liela daļa no zemes ir mežš mums rūp mūsu un ekosistēmas veselība"
    problem.innerHTML = "problemas ko izraisa papīrs"
    problem2.innerHTML = "2. izciršana"
    problem3.innerHTML = "3. piesārņošana"
    fixproblem.innerHTML = "iemesli ko darit lai salabotu problemu"
    fixproblem1.innerHTML = "Katram studentam iedot skolas planšeti kur var pierakstīt, lasīt materiālus un pildīt uzdevumus. Planšetēm ir ierobežojumi uz jebkādām citām aplikācijām kas var novērst studentu no mācībām."
    fixproblem2.innerHTML = "Izmantot video un citus materiālus nevis papīra lapas."
    fixproblem3.innerHTML = "3. Darīt pārbaudes darbus uz datoriem/telefoniem nevis uz lapām."
    fixproblem4.innerHTML = "4. pārstrādāt papīru kad beiguši izmantot (iemest speciālaja kastē/papīrgrozā)."
    fixproblem5.innerHTML = "5. varbut darīt darbus vairāk datorklasē vai strādāt vairāk ar elektroniskajām grāmatām, piemēram, skola2030 vai soma.lv"
}