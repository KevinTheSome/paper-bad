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
const problem1 = document.getElementById("problem1")
const problem2 = document.getElementById("problem2")
const problem3 = document.getElementById("problem3")
const fixproblem = document.getElementById("fixproblem")
const fixproblem1 = document.getElementById("fixproblem1")
const fixproblem2 = document.getElementById("fixproblem2")
const fixproblem3 = document.getElementById("fixproblem3")
const fixproblem4 = document.getElementById("fixproblem4")


function lv()
{
    titel.innerHTML = "Taupi papīru"
    why.innerHTML = "Kāpēc mēs izvēlējāmies papīru?"
    whyDesc.innerHTML = "Mēs dzīvojam valstī ar lielu mežu platību, un papīrs ir vainīgs pie 26% no visa piesārņojuma. Cilvēki izmanto pārāk daudz papīra priekš elektroniskā laikmeta, piemēram, 1 dienā tiek nogriezti 200 miljoni koku(viens koks 2.5 sekundēs). Globāli mēs izmantojam 1 miljonu tonnu papīra dienā. "
    problem.innerHTML = "Problēmas ko izraisa papīrs"
    problem1.innerHTML = "1. Koku izsciršana"
    problem2.innerHTML = "2. Dabas piesārņošana"
    problem3.innerHTML = "3. Koki mums dod skābekl"
    fixproblem.innerHTML = "Ko darīt lai samazinātu šīs problēmas?"
    fixproblem1.innerHTML = "Skolas ir viena no iestādēm kur var ļoti atteikties no papīra, piemēram, skolēniem tiktu piešķirta elektroniska ierīce kur iespējams pierakstīt, lasīt un pildīt uzdevumus. Ierīcēm būtu ierobežojumi uz jebkādām aplikācijām kas novērstu studentu no mācībām."
    fixproblem2.innerHTML = "Skatoties vairāk elektroniskos materiālus un video priekš mācībām, skolas ar to var ietaupīt lielus daudzumus papīra, kā jau vairāk tiek lietotas aplikācijas, piemēram, skola2030, e-klase vai soma.lv."
    fixproblem3.innerHTML = "3. Visus iespējamos papīrus pārstrādāt, 1 tonna pārstrādāta papīra ietaupa 1400 litrus eļļas, 26'500 litrus ūdens un 17 kokus."
    fixproblem4.innerHTML = "4.Papīra ietaupīšanu nav jādara tikai skolās, Amerikas birojos izmanto 12 triljardus papīra katru gadu(12'000'000'000'000)! Visi domāja ka papīra izmantošana samazināsies elektroniskajā laikmetā, nekas nemainījās, ir pieņemts ka papīra vajadzība dubultosies 2030 gadā."
}

function rus()
{
    titel.innerHTML = "Экономь бумагу"
    why.innerHTML = "Почему мы выбрали бумагу?"
    whyDesc.innerHTML = "Мы живем в стране с большой площадью лесов, и бумага виновата в 26% всего загрязнения. Люди используют слишком много бумаги для электронной эры, например, за 1 день срезается 200 миллионов деревьев (одно дерево за 2.5 секунды). Глобально мы используем 1 млн тонн бумаги в день."
    problem.innerHTML = "Проблемы, вызванные бумагой"
    problem1.innerHTML = "1. Вырубка деревьев"
    problem2.innerHTML = "2. Загрязнение природы"
    problem3.innerHTML = "3. Деревья дают нам кислород"
    fixproblem.innerHTML = "Что делать, чтобы минимизировать эти проблемы?"
    fixproblem1.innerHTML = "Школы - одно из учреждений, где можно очень отказаться от бумаги, например, ученикам предоставили бы электронное устройство, где можно записать, прочитать и выполнить задания. Устройства имели бы ограничения на любые приложения, которые бы отвлекали студента от учебы."
    fixproblem2.innerHTML = "Если смотреть больше электронных материалов и видео для учебы, школы могут сэкономить на этом большие количества бумаги, как уже больше применяются приложения, например, \"skola-2030\", \"e-klase\" или \"soma.lv\"."
    fixproblem3.innerHTML = "3. Все возможные бумаги переработать, 1 тонна переработанной бумаги экономит 1400 литров масла, 26'500 литров воды и 17 деревьев."
    fixproblem4.innerHTML = "4. Экономия бумаги не должна производиться только в школах, в американских офисах используют 12 триллиярдов бумаги ежегодно (12'000'000'000'000)! Все думали, что использование бумаги сократится в электронную эпоху, ничего не изменилось, принято, что потребность в бумаге удвоится k 2030 году."
}