import { createProduct } from "./CRUD.js";

export default{
    excecute(){
        const form = document.querySelector("#formulario-producto");
        const limpiarButton = document.querySelector("#boton-limpiar");
        
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            const data = new FormData(form);
            const entries = Array.from(data.entries());
            const producto = {};
            
            entries.forEach(function(entries){
                producto[entries[0]] = entries[1];
            });
            
            const jsonData = JSON.stringify(producto);

            
            createFunction(jsonData);
        });

        limpiarButton.addEventListener("click", (e)=>{
            form.reset();
        })

        const createFunction = async(data)=>{
            await createProduct(data);
        };
    }
}