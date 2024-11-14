

const input = document.querySelector('#favchap'); 
const button = document.querySelector('button');   
const list = document.querySelector('#list');      


button.addEventListener('click', function() {
    
    if (input.value.trim() !== '') {
        
        const newChapter = document.createElement('li');
        const deleteButton = document.createElement('button');

        
        newChapter.textContent = input.value.trim(); 
        deleteButton.textContent = '❌'; 
        newChapter.append(deleteButton);

        
        list.appendChild(newChapter);

        
        input.value = '';
        input.focus();

        
        deleteButton.addEventListener('click', function() {
            list.removeChild(newChapter); 
            input.focus(); 
        });
    } else {
        input.focus();
        alert('Please enter a value');
    }
});

