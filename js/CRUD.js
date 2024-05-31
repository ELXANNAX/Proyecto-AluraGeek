export const getProducts = async () =>{
    try {
        const res = await fetch("http://localhost:3001/productos",{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        });
        const response = await res.json();
        return await response;
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async(id)=>{
    try {
        const res = await fetch(`http://localhost:3001/productos/${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        });

        const response = await res.json();
        return await response;
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = async(body)=>{
    try {
        const res = await fetch(`http://localhost:3001/productos`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:body
        })
    } catch (error) {
        console.log(error);
    }
}