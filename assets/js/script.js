const generate = document.getElementById("generate");

const remove = document.getElementById("cancel");

const pay = document.getElementById("pay");

const name = document.getElementById("name");

const km = document.getElementById("km");

const age = document.getElementById("ageRange");

const outputOffcanvas = document.getElementById("outputOffcanvas");

const outputName = document.getElementById("jsName");

const outputOffert = document.getElementById("jsOffert");

const outputCarriage = document.getElementById("jsCarriage");

const outputTicketCode = document.getElementById("jsTicketCode");

const outputCost = document.getElementById("jsCost");

const ticketShow = document.querySelector(".pg-ticket-container");

const removeFacSimile = document.querySelector(".pg-ticket-overlay");


generate.addEventListener("click", function(){

  let validForm = true;

  const priceRegular = ((km.value) * 0.21);

  const priceUnderage = priceRegular * (1- (20/100));

  const priceOver65 = priceRegular * (1- (40/100));

  if((name.value).lenght < 3) validForm = false;
  
  if(isNaN(parseInt(km.value))) validForm = false;

  if(validForm){
    if((age.value) == 2){

      outputName.innerHTML = name.value;

      outputOffert.innerHTML = "Biglietto Junior";

      outputCarriage.innerHTML = Math.floor(Math.random( ) * 10) + 1;

      outputCost.innerHTML =`
      <span class="text-decoration-line-through">${priceRegular.toFixed(2)} &euro;</span> ${priceUnderage.toFixed(2)} &euro;
      `

      outputOffcanvas.innerHTML = `
      <span class="py-2">Il totale da pagare è: <span class="fw-semibold">${priceUnderage.toFixed(2)}€</span>.</span>
      `

      ticketShow.classList.remove("d-none");
    }else if((age.value) == 3){

      outputName.innerHTML = name.value;

      outputOffert.innerHTML = "Biglietto Senior";

      outputCarriage.innerHTML = Math.floor(Math.random( ) * 10) + 1;

      outputCost.innerHTML = `
      <span class="text-decoration-line-through">${priceRegular.toFixed(2)} &euro;</span> ${priceOver65.toFixed(2)} &euro;
      `
      
      outputOffcanvas.innerHTML = `
      <span class="py-2">Il totale da pagare è: <span class="fw-semibold">${priceOver65.toFixed(2)}€</span>.</span>
      `

      ticketShow.classList.remove("d-none");
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

      ticketShow.classList.remove("d-none");
    }
  }else{
    alert("Inserisci dei dati vaidi.");
  }
  

  name.value = "";
  km.value = "";
  age.value = "1";
})

cancel.addEventListener("click", function(){
  ticketShow.classList.add("d-none");

  removeFacSimile.classList.remove("d-none");
})

pay.addEventListener("click", function(){
  removeFacSimile.classList.add("d-none");

  outputTicketCode.innerHTML = Math.floor(Math.random() * (99000 - 10000 +1)) + 10000;
})