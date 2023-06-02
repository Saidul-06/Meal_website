const loadMEals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
    .then((Res) => Res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const ParentDiv = document.getElementById("Container");
  meals.forEach((meal) => {
    console.log(meal);
    const mealdiv = document.createElement("div");
    mealdiv.classList.add("col");
    mealdiv.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        `;
    ParentDiv.appendChild(mealdiv);
  });
};



 SearchMeal = () => {
    console.log('clicked');
    const searchText =  document.getElementById('Search_input').value;
    // search meals
    console.log(searchText);
    
}



loadMEals('rice');
