let bornDay = document.querySelector("#inputDay");
const bornMonth = document.querySelector("#inputMonth");
const bornYear = document.querySelector("#inputYear");
const showAge = document.querySelector("#btn-result");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

console.log(year);

function calculate() {
  const age = {
    bornDay: parseInt(bornDay.value, 10),
    bornMonth: parseInt(bornMonth.value, 10),
    bornYear: parseInt(bornYear.value, 10),
  };

  let daysOld = day - age.bornDay;
  let monthsOld = month - age.bornMonth;
  let yearsOld = year - age.bornYear;

  // se o dia do aniversario ainda nao passou, adicionamos +30 ao calculo do dia, para que nao fique negativo e tiramos 1 do mes, porque emprestamos os dias
  if (day < age.bornDay) {
    daysOld +=30;
    monthsOld--;
  }

  //se o mes for menor que o mes de nascimento ou o mes for igual mas o dia ainda não tiver chego, o ano diminui 1 e o mes recebe +12 para que o calculo n fique negativo

  if (month < age.bornMonth || (month === age.bornMonth && day < age.bornDay)) {
    yearsOld--;
    monthsOld += 12;
  }

  showAge();

  function showAge() {
    const showYear = document.querySelector("#showYear");
    const showMonth = document.querySelector('#showMonth')
    const showDay = document.querySelector('#showDay')

    showYear.innerHTML = yearsOld;
    showMonth.innerHTML = monthsOld;
    showDay.innerHTML = daysOld;
  }
}
showAge.addEventListener("click", calculate);
