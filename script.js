

const container = document.getElementById('container')

const startSearch =()=>{
    const inputValue = document.getElementById(`inputValue`).value
    if(inputValue.length<2){

        fetchLink=`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`;
        fetcha(fetchLink);
    }
    else{
        fetchLink=`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
        fetcha(fetchLink);
    }
}

const fetcha=link=>{
    fetch(fetchLink)
    .then(res=>res.json())
    .then(data=>{ 
    for(let i =0; i <data.meals.length; i++){
        const value = data.meals[i]
        const newDiv = document.createElement('div')
        newDiv.className='newDiv'
        const hemlTem = `
        <div onclick="detail(${value.idMeal})">
        <img src="${value.strMealThumb}" alt="">
        <h3>${value.strMeal}</h3>
  
        </div>`
        newDiv.innerHTML = hemlTem;
        container.appendChild(newDiv)
        }    
    })

}
   
    
   
const detail =id=>{
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
    <h3>Ingredients</h3>
    <ul id="ul"></ul>   `
    newDetail.innerHTML= htmlTem;
    detail.appendChild(newDetail)
    const ul = document.getElementById('ul')
    const li =  document.createElement('li')
    li.innerText= value.strIngredient[i]
    console.log(value.strIngredient1);
    ul.appendChild(li)   
})
   }
   
   