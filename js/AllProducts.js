import { CardsProducts } from "./Product.js";
import { deleteProduct } from "./CRUD.js";

export default{

    ShowAllProducts (){

        const contenedor = document.querySelector("#lista-card");

        const render = async()=>{

            const cards = await CardsProducts();
    
            contenedor.innerHTML = cards

            const deleteButtons = document.querySelectorAll(".delete-button");

            deleteButtons.forEach(button => {
                button.addEventListener("click", (e)=>{
                    const data = e.target.dataset.id;
                    deleteFunction(data);
                })
            });


            const deleteFunction = async(data)=>{
                await deleteProduct(data);
            }
        }

        render();


    }


}