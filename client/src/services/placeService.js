const url = 'http://localhost:4000';

//http://localhost:4000/places/create

//-------GET All PLACES---------//


export const getAll = () => {
    return fetch(`${url}/places`)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const create = (country, description, imageUrl) =>{
   

    let place = {
        country, 
        description, 
        imageUrl
    };

    return fetch(`${url}/places/create`,{
        method: "POST",
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify(place)
    })
        
};