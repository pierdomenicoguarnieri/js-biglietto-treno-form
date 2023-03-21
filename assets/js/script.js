const generate = document.getElementById("generate");

const name = document.getElementById("name");

const km = document.getElementById("km");

const age = document.getElementById("ageRange");

const outputOffcanvas = document.getElementById("outputOffcanvas");

const outputName = document.getElementById("jsName");

const outputOffert = document.getElementById("jsOffert");

const outputCarriage = document.getElementById("jsCarriage");

const outputTicketCode = document.getElementById("jsTicketCode");

const outputCost = document.getElementById("jsCost");

generate.addEventListener("click", function(){

  const priceRegular = ((km.value) * 0.21);

  const priceUnderage = priceRegular * (1- (20/100));

  const priceOver65 = priceRegular * (1- (40/100));

console.log(priceRegular);

  if((age.value) == 2){

    outputName.innerHTML = name.value;

    outputOffert.innerHTML = "Biglietto Junior";

    outputCarriage.innerHTML = Math.floor(Math.random( ) * 10) + 1;

    outputCost.innerHTML =`
    ${priceUnderage.toFixed(2)} &euro;
    `

    outputOffcanvas.innerHTML = `
    <span class="py-2">Il totale da pagare è: <span class="fw-semibold">${priceUnderage.toFixed(2)}€</span>.</span>
    `
  }else if((age.value) == 3){

    outputName.innerHTML = name.value;

    outputOffert.innerHTML = "Biglietto Senior";

    outputCarriage.innerHTML = Math.floor(Math.random( ) * 10) + 1;

    outputCost.innerHTML = `
    ${priceOver65.toFixed(2)} &euro;
    `
    
    outputOffcanvas.innerHTML = `
    <span class="py-2">Il totale da pagare è: <span class="fw-semibold">${priceOver65.toFixed(2)}€</span>.</span>
    `
  }else{

    outputName.innerHTML = name.value;

    outputOffert.innerHTML = "Biglietto Standard";

    outputCarriage.innerHTML = Math.floor(Math.random( ) * 10) + 1;

    outputCost.innerHTML =`
      ${priceRegular.toFixed(2)} &euro;
    `

    outputOffcanvas.innerHTML = `
    <span class="py-2">Il totale da pagare è: <span class="fw-semibold">${priceRegular.toFixed(2)}€</span>.</span>
    `
  }

  name.value = "";
  km.value = "";
  age.value = "1";
})