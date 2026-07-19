let listContainer = document.querySelector('.listContainer')
let addInput = document.querySelector('.addInput')
let addBtn = document.querySelector('.addBtn')
let list = [];

function renderList(arr){
    listContainer.innerHTML = '' // Purani list clear kar raha hai

    arr.map(obj => {
        let divElem = document.createElement('div');
        divElem.classList.add('list');

        divElem.innerHTML = `
        <p>${obj.text}</p>
        `

        let buttonElem = document.createElement('button');
        buttonElem.innerText = '❌'

        divElem.appendChild(buttonElem)

        // Delete button click hone par item delete hoga
        buttonElem.onclick = () =>{
            handleRemoveList(obj.id)
        }

        listContainer.append(divElem)
    })
}

renderList(list);

function handleAddList(){

    // Naya object bana raha hai
    let obj = {
        id: Date.now(), // Unique id
        text: addInput.value // Input ka text
    }

    list.unshift(obj); // Item ko array ke start me add kar raha hai
    addInput.value = ""; // Input clear
    renderList(list); // List update
}

function handleRemoveList(id) {

    // Selected item ko array se remove kar raha hai
    list = list.filter(obj=>{
        return obj.id !== id
    })

    renderList(list); // Updated list dikhana
}

addInput.addEventListener('keydown', function(event) {

    // Enter press karne par item add hoga
    if (event.key === 'Enter') {
        handleAddList();
    }
})

addBtn.addEventListener('click', handleAddList)