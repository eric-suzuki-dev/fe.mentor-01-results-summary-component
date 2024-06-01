import data from "./JSON/data.json" with { type: "json"};

let arr = ['Reaction', 'Memory', 'Verbal', 'Visual']

arr.forEach(category => {
    data.forEach(item => {
        if(category === item.category){
            const categoryElement = document.getElementById(item.category);

            const newImage = document.createElement('img');
            newImage.src = item.icon;
            newImage.className = 'image';
            newImage.alt = 'Icon for category';
            categoryElement.appendChild(newImage);

            const newCategory = document.createElement('h3');
            newCategory.innerHTML = item.category;
            newCategory.className = 'category';
            categoryElement.appendChild(newCategory);

            const newScore = document.createElement('p');
            newScore.innerHTML = item.score;
            newScore.className = 'point';
            categoryElement.appendChild(newScore);

            const total = document.createElement('p');
            total.innerHTML = '/ 100';
            total.className = 'total';
            categoryElement.appendChild(total);

        }
    });
});