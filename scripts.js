const buttonShowAll = document.querySelector(".show-all")
const buttonMap = document.querySelector(".descont")
const allValuesButton = document.querySelector(".all-values")
const veganButton = document.querySelector(".filter-vegan")
const myList = document.querySelector("ul")

function fomartCoin(value){
   const newValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
   return newValue
}

function showAll(myItens) {
   let list = ''
   myItens.forEach(itens => {
      list += `    
          <li>
               <img src = ${itens.src}>
               <p>${itens.name}</p>
                <p class ="item-price">${fomartCoin(itens.price)}</p>
          </li>`
   })
   myList.innerHTML = list     //aqui joga o conteudo dos produtos dentro da UL lá dos LI feito no each acima
}
function descont() {
   const descont = menuOptions.map((value) => ({
      ...value,
      price: value.price - value.price / 10
   }))
   showAll(descont)
}

function allValues() {
   const values = menuOptions.reduce((acc, val) => acc + val.price, 0) // 0= valor do ACUMULADOR
   myList.innerHTML = `
          <li>
                <p>O valor total do cárdapio é de:${fomartCoin(values)}</p>
          </li>`
}
function vegan() {
   let list = ''
   const showVegans = menuOptions.filter(vegans => {
      if (vegans.vegan === true) {
         list += `
             <li>
               <img src = ${vegans.src}>
               <p>${vegans.name}</p>
                <p class ="item-price">${fomartCoin(vegans.price)}</p>
          </li>`}
      myList.innerHTML = list
   })
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMap.addEventListener('click', descont)
allValuesButton.addEventListener('click', allValues)
veganButton.addEventListener('click', vegan)




