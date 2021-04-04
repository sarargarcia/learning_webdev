const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS 

let rainbow = document.querySelectorAll('span');
for(let i=0; i<=colors.length; i++){
    rainbow[i].style.color=colors[i];
}