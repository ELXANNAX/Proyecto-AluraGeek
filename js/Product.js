import { getProducts } from "./CRUD.js"

export const CardsProducts = async () =>{

    try {
        const products = await getProducts();

        const cards = await Promise.all(products.map(async(product)=>{
            
            const plantilla = `
                <div class="card">
                    <figure>
                        <img class="producto-img" src=${product.imagen} alt="img"/>
                        <figcaption class="card-container--info">${product.nombre}</figcaption>
                    </figure>
                    <div class="card-container--value">
                        <p>COP/${product.precio} </p>
                        <button class="delete-button" data-id="${product.id}">
                        <img class="delete_logo"  src="imagenes/eliminar.png" alt="eliminar"/>
                        </button>
                        </div>
                </div>
            `;

            return plantilla;
            
        }));

        const data = cards.join("");

        return data;

    } catch (error) {
        console.log(error);
    }
    



}

CardsProducts();