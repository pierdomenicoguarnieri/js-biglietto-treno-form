const generate = document.getElementById("generate");

const name = document.getElementById("name");

const km = document.getElementById("km");

const age = document.getElementById("ageRange");

const output = document.getElementById("content");

const outputOffcanvas = document.getElementById("outputOffcanvas");

generate.addEventListener("click", function(){

const priceRegular = ((km.value) * 0.21);

const priceUnderage = priceRegular * (1- (20/100));

const priceOver65 = priceRegular * (1- (40/100));

console.log(priceRegular);

if((age.value) == 2){
    output.innerHTML = `
    <span class="fs-4 py-3">Hai scelto di percorrere ${km.value}km e rientri nella fascia d'età: "Minorenni"</span> 
    <p class="fs-5 pb-3">Il prezzo del biglietto originalmente è di <span class="text-decoration-line-through">${priceRegular.toFixed(2)}€</span>. Dopo aver applicato lo sconto del 20% il prezzo del biglietto è di: <span class="fw-semibold">${priceUnderage.toFixed(2)}€</span>.</p>
    `

    outputOffcanvas.innerHTML = `
    <span class="py-2">Il totale da pagare è: <span class="fw-semibold">${priceUnderage.toFixed(2)}€</span>.</span>
    `
  }else if((age.value) == 3){
    output.innerHTML = `
    <span class="fs-4 py-3">Hai scelto di percorrere ${km.value}km e rientri nella fascia d'età: "Over 65"</span> 
    <p class="fs-5 pb-3">Il prezzo del biglietto originalmente è di <span class="text-decoration-line-through">${priceRegular.toFixed(2)}€</span>. Dopo aver applicato lo sconto del 40% il prezzo del biglietto è di: <span class="fw-semibold">${priceOver65.toFixed(2)}€</span>.</p>
    `

    outputOffcanvas.innerHTML = `
    <span class="py-2">Il totale da pagare è: <span class="fw-semibold">${priceOver65.toFixed(2)}€</span>.</span>
    `
  }else{
    output.innerHTML = `
    <span class="fs-4 py-3">Hai scelto di percorrere ${km.value}km e rientri nella fascia d'età: "Maggiorenni"</span> 
    <p class="fs-5 pb-3">Il prezzo del biglietto è di: <span class="fw-semibold">${priceRegular.toFixed(2)}€</span>. Non è stato applicato nessuno sconto.</p>
    `

    outputOffcanvas.innerHTML = `
    <span class="py-2">Il totale da pagare è: <span class="fw-semibold">${priceRegular.toFixed(2)}€</span>.</span>
    `
  }

  name.value = "";
  km.value = "";
  age.value = "1";
})