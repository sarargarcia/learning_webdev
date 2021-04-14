const form = document.querySelector('form');
const ul = document.querySelector("ul");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const quanInput = form.elements.qty;
    const prodInput = form.elements.product;
    addGrocItem(quanInput.value, prodInput.value);
    quanInput.value = '';
    prodInput.value = '';
});
 
const addGrocItem = (quanInput, prodInput) =>{
    const li = document.createElement('li');
    li.innerText =  `${quanInput} ${prodInput}`;
    ul.appendChild(li);
};
