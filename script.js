
let container = document.querySelector('.container');
let button = document.querySelector('button');

function createGrid(size){
    for(i =0; i<(size*size);i++){
        let div = document.createElement('div');
        div.classList.add('item');
        container.append(div);

        let r = Math.floor(Math.random()*265);
        let g = Math.floor(Math.random()*265);
        let b = Math.floor(Math.random()*265);
        let rgb = `rgb(${r},${g},${b})`;
        
        div.addEventListener('mouseover', function(){
            div.style.backgroundColor = rgb ;
        })
    }

    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    container.style.gridTemplateRows = `repeat(${size},1fr)`;
}



button.addEventListener('click', function(){
    container.innerText ="";
    let gridSize = prompt('Enter the number of squares for your new grid(1-100 inclusive)',16);
    gridSize = Number(gridSize);

    if(gridSize > 0 && gridSize <=100){
        createGrid(gridSize);
    }
    else{
        alert('Enter number between 1-100(INCLUSIVE)');
        createGrid(16);
    }    
});


createGrid(16);