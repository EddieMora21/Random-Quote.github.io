document.addEventListener("DOMContentLoaded" , function(){
    const Author = document.getElementById("Autor")
    const Outs = document.getElementById("TEXT")
    const tags = document.getElementById("Famous Quotes")
    const slug = document.getElementById("Slug")
    const buttongroup=document.getElementById("Regroup")
    const buttonlink=document.getElementById("link")
    let content;
    function api(){
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            Author.innerHTML=data.author;
            Outs.innerHTML="''"+data.content+"''";
            const Tags=data.tags;
            for (let i = 0; i < Tags.length; i++) {
                tags.innerHTML=Tags[0];
                if(Tags[1]===undefined){
                    slug.innerHTML=data.authorSlug
                }else{
                    slug.innerHTML=Tags[1]
                }
                
            }
            content=data.content;
            
            
        })
        .catch(error => {
            console.log(error)
        })
    }
    api();

    buttongroup.addEventListener("click",function(){
        api();
    })

    buttonlink.addEventListener("click", function() {
        // Crear un elemento de entrada de texto temporal
        let tempInput = document.createElement("input");
    
        // Asignar el contenido a copiar al valor del elemento temporal
        tempInput.value = content;
    
        // Agregar el elemento temporal al documento (fuera de la vista)
        document.body.appendChild(tempInput);
    
        // Seleccionar el texto en el elemento temporal
        tempInput.select();
    
        // Copiar el texto al portapapeles
        document.execCommand("copy");
    
        // Eliminar el elemento temporal
        document.body.removeChild(tempInput);
    
        // Notificar al usuario que el texto ha sido copiado
        alert("Texto copiado al portapapeles: ");

    })




})