
//document.getElementById("filterbutton").addEventListener("click",filterByRegionLogic);
let data = [];
let fecthCountries = async () => {
  // make an API
  let r1= await fetch(`https://restcountries.com/v3.1/all`);
  let data=await r1.json();

  return data;
};

let countryCard = (el) => {
  let cardDiv = document.createElement("div");
data.push(el);
cardDiv.setAttribute("class","cardDiv")
  // create a div element for each card and append the details
 let img=document.createElement("img");
  img.src=el.flags.png;
  let name=document.createElement("p");
  let population=document.createElement("p");
  let region=document.createElement("p");
  let capital=document.createElement("p");
  name.textContent=el.name.common;
  population.textContent=el.population;
  region.textContent=el.region;
  capital.textContent=el.capital;
  cardDiv.append(img);
  cardDiv.append(name);
  cardDiv.append(capital);
  cardDiv.append(population);
  cardDiv.append(region);

  return cardDiv;
};

let renderData = (data) => {
  let container = document.getElementById("all_countries");
  for(let i=0;i<data.length;i++){
       let div=countryCard(data[i])
    
       container.append(div);
    
  }

  // loop through the cards and append to main container
  return container;
};

let sortLogic = (order, data) => {
  // handle sort logic here and return sorted data
  // it expectes two arguments type of sort (asc or desc) and data
  return data;
};

let  filterByRegionLogic = async() => {
  // handle filter logic here and return filtered data
  // it expectes two arguments data and region
  // return filteredData
  let container=document.getElementById("all_countries");
  let div;
  container.innerHTML="";

let population=document.getElementById("sort_population").value;
let region=document.getElementById("filter_region").value;

if(population==" " && region!==" "){
  //console.log(population,region);
  for(let i=0;i<data.length;i++){
    if(data[i].region==region){
      let cardDiv = document.createElement("div");
      cardDiv.setAttribute("class","cardDiv")
        // create a div element for each card and append the details
       let img=document.createElement("img");
        img.src=data[i].flags.png;
        let name=document.createElement("p");
        let population=document.createElement("p");
        let region=document.createElement("p");
        let capital=document.createElement("p");
        name.textContent=data[i].name.common;
        population.textContent=data[i].population;
        region.textContent=data[i].region;
        capital.textContent=data[i].capital;
        cardDiv.append(img);
        cardDiv.append(name);
        cardDiv.append(capital);
        cardDiv.append(population);
        cardDiv.append(region);
        container.append(cardDiv);
    }
  }
}
 else if(region==" " && population!==" "){
  //console.log(region,population);
let data1=[];
for(let k=0;k<data.length;k++){
    data1.push(data[k].population);
}


function quicksortDescending(arr, low, high) {
  if (low < high) {
    const partitionIndex = partitionDescending(arr, low, high);
    quicksortDescending(arr, low, partitionIndex - 1);
    quicksortDescending(arr, partitionIndex + 1, high);
  }
}

function partitionDescending(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] > pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

quicksortDescending(data1, 0, data1.length - 1);
console.log("Sorted array in descending order:", data1);

if(population=="hightolow"){
  for(let i of data1){
    for(let j=0;j<data.length;j++){
      if(i==data[j].population){
        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class","cardDiv")
          // create a div element for each card and append the details
         let img=document.createElement("img");
          img.src=data[j].flags.png;
          let name=document.createElement("p");
          let population=document.createElement("p");
          let region=document.createElement("p");
          let capital=document.createElement("p");
          name.textContent=data[j].name.common;
          population.textContent=data[j].population;
          region.textContent=data[j].region;
          capital.textContent=data[j].capital;
          cardDiv.append(img);
          cardDiv.append(name);
          cardDiv.append(capital);
          cardDiv.append(population);
          cardDiv.append(region);
          container.append(cardDiv);
      }
    }
  }
}

else{
  console.log("low");
  for(let i=data1.length-1;i>0;i--){
     for(let g=0;g<data.length;g++){
      if(data1[i]==data[g].population){
        let cardDiv = document.createElement("div");
cardDiv.setAttribute("class","cardDiv")
  // create a div element for each card and append the details
 let img=document.createElement("img");
  img.src=data[g].flags.png;
  let name=document.createElement("p");
  let population=document.createElement("p");
  let region=document.createElement("p");
  let capital=document.createElement("p");
  name.textContent=data[g].name.common;
  population.textContent=data[g].population;
  region.textContent=data[g].region;
  capital.textContent=data[g].capital;
  cardDiv.append(img);
  cardDiv.append(name);
  cardDiv.append(capital);
  cardDiv.append(population);
  cardDiv.append(region);   
  container.append(cardDiv)
      }
     }
  }
}

}


 
 else{
  //console.log(region,population);
  // write two filter working logic side by side
  let filteredregionpop=[];
  for (let i=0;i<data.length;i++){
      if(data[i].region==region){
           filteredregionpop.push(data[i].population)
      }
  }
  
function quicksortDescending(arr, low, high) {
  if (low < high) {
    const partitionIndex = partitionDescending(arr, low, high);
    quicksortDescending(arr, low, partitionIndex - 1);
    quicksortDescending(arr, partitionIndex + 1, high);
  }
}

function partitionDescending(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] > pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

quicksortDescending(filteredregionpop, 0, filteredregionpop.length - 1);


if(population=="hightolow"){

   for(let i=0;i<filteredregionpop.length;i++){
    for(let j=0;j<data.length;j++){
      if(filteredregionpop[i]==data[j].population){

        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class","cardDiv")
          // create a div element for each card and append the details
         let img=document.createElement("img");
          img.src=data[j].flags.png;
          let name=document.createElement("p");
          let population=document.createElement("p");
          let region=document.createElement("p");
          let capital=document.createElement("p");
          name.textContent=data[j].name.common;
          population.textContent=data[j].population;
          region.textContent=data[j].region;
          capital.textContent=data[j].capital;
          cardDiv.append(img);
          cardDiv.append(name);
          cardDiv.append(capital);
          cardDiv.append(population);
          cardDiv.append(region);
          container.append(cardDiv)
      }
    }
   }
}

else if(population=="lowtohigh"){
  for(let i=filteredregionpop.length-1;i>0;i--){
    for(let j=0;j<data.length;j++){
      if(filteredregionpop[i]==data[j].population){
        
        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class","cardDiv")
          // create a div element for each card and append the details
         let img=document.createElement("img");
          img.src=data[j].flags.png;
          let name=document.createElement("p");
          let population=document.createElement("p");
          let region=document.createElement("p");
          let capital=document.createElement("p");
          name.textContent=data[j].name.common;
          population.textContent=data[j].population;
          region.textContent=data[j].region;
          capital.textContent=data[j].capital;
          cardDiv.append(img);
          cardDiv.append(name);
          cardDiv.append(capital);
          cardDiv.append(population);
          cardDiv.append(region);
          container.append(cardDiv)
      }
    }
  }
}

 }
 
 
};





window.onload = function () {
 let d =fecthCountries()
 .then(function(d){
     d.json;
     renderData(d);
 })

  
  // onload fetch Countries from the `https://restcountries.com/v3.1/all`
  // add change event listeners to sort and filter
};
function handleSortAndFilter(){
  
}

if (typeof exports !== "undefined") {
  module.exports = {
    renderData,
    handleSortAndFilter,
    sortLogic,
    filterByRegionLogic,
    fecthCountries,
  };
}
