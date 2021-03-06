

const container = document.getElementById('container')

                document.getElementById('detail').innerHTML=null
const startSearch =()=>{  
    const inputValue = document.getElementById(`inputValue`).value
    if(inputValue.length<2){
        fetchLink=`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`;
 
        fetcha(fetchLink,inputValue);
    }
    else{
        fetchLink=`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
        fetcha(fetchLink,inputValue);
    }
}

const fetcha=(link,inputValue)=>{
    fetch(fetchLink)
    .then(res=>res.json())
    .then(data=>{
        if(data.meals==null){
            container.innerHTML =null
         document.getElementById('detail').innerHTML=null
            // alert(`Sorry, we don't have ${inputValue}`)
            
            document.getElementById('notFound').innerHTML=`
            <h2>Nothing found</h2>
            <h2>Please search something else</h2>
            `
            document.getElementById('notFound').style.display='block'
          
        }
        else{
            container.innerHTML =null
            document.getElementById('notFound').style.display='none'
            data.meals.forEach(item => {
                const newDiv = document.createElement('div')
                newDiv.className='newDiv'
                const hemlTem = `
                <div onclick="detail(${item.idMeal})">
                <img src="${item.strMealThumb}" alt="">
                <h3>${item.strMeal}</h3>
                </div>`
                newDiv.innerHTML = hemlTem;
                
                container.appendChild(newDiv)
            });
        }
  
  })

}

   
const detail =id=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res=>res.json())
    .then(data=>{
       
    const item = data.meals[0];
    const detail = document.getElementById('detail')
    const newDetail = document.createElement('div')
    document.getElementById('detail').innerHTML=null
    const htmlTem = `
                    <img src="${item.strMealThumb}" alt="">
                    <h2>${item.strMeal}</h2>
                    <h3>Ingredients</h3>
                    <ul id="ul"></ul> 
                      `  
    newDetail.innerHTML= htmlTem;
    detail.appendChild(newDetail)
    for (let i = 1; i < 15; i++) {
        let element = i;
        let ingredients =item['strIngredient'+i]
       
        if(!(ingredients==null || ingredients=='')){
            const ul = document.getElementById('ul')
            const li =  document.createElement('li')
            console.log(ingredients);
            li.innerText= ingredients
            ul.appendChild(li)  
        }         
      }
   })
}
   

