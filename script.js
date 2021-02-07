

const container = document.getElementById('container')

  function startSearch(){
const inputValue = document.getElementById(`inputValue`).value
if(inputValue.length<2){
console.log(' less 2');

 console.log((fatchValue));
}
else{
console.log('big 2');
}
}


// https://www.themealdb.com/api/json/v1/1/search.php?f=a
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
    .then(res=>res.json())
    .then(data=>{ 
        for(let i =0; i <data.meals.length; i++){
            const value = data.meals[i]
    const newDiv = document.createElement('a')
   
    const hemlTem = `
    <div onclick="detail(${value.idMeal})">
    <img src="${value.strMealThumb}" alt="">
    <h3>${value.strMeal}</h3>
    <p>${value.strInstructions}</p>
    </div>
   
    
    `
    newDiv.innerHTML = hemlTem;
    container.appendChild(newDiv)

      
        }    
    })

    
   
   function detail(id){
console.log(id);
fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
.then(res=>res.json())
.then(data=>{
    
    const value = data.meals[0]
    console.log(value);
    const detail = document.getElementById('detail')
    const newDetail = document.createElement('div')

    const htmlTem = `
    <img src="${value.strMealThumb}" alt="">
    <h2>${value.strMeal}</h2>
    <ul id="ul"></ul>
    `
    newDetail.innerHTML= htmlTem;
    detail.appendChild(newDetail)

    const ul = document.getElementById('ul')
  const li =  document.createElement('li')
  
      
    
    li.innerText= value.strIngredient[i]
    console.log(value.strIngredient1);
    ul.appendChild(li)
  


        
    
})
   }
   
   
//    // search by name
//     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
//     .then(res=>res.json())
//     .then(data=>{
//        // console.log(data.meals[0].strInstructions)
//     })
    
    
//     //search by first letter
//             fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
//             .then(res=>res.json())
//             .then(data=>{
//             //    console.log(data.meals[1])
//                    })
    
// let  input1 = document.getElementById('inputValue');
// // let inputValue = input.value
//  function startSearch(){
//      if(input1.value.length>1){
//         //    search by first letter


// else{
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input1.value}`)
//     .then(res=>res.json())
//     .then(data=>{
//        console.log(data.meals[1])
//            })
//  }
// }

