const url = 'http://localhost:4000';

//http://localhost:4000/places/create

//-------GET All PLACES---------//

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