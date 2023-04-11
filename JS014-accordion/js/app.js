document.querySelectorAll('.accordion-content').forEach(item =>{
    item.style.maxHeight = 0;
})

document.querySelectorAll('.accordion-button').forEach((button) =>{

    button.addEventListener('click', () => {
        
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('ativo');

        if(button.classList.contains('ativo')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            
        }else{
            accordionContent.style.maxHeight = 0;
        }
    })
});

