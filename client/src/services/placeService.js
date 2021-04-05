const url = 'http://localhost:4000';

//http://localhost:4000/places/

//-------GET All PLACES---------//


export const getAll = () => {
    return fetch(`${url}/places`)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const create = (country, description, imageUrl) => {


    let place = {
        country,
        description,
        imageUrl
    };

    return fetch(`${url}/places/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(place)
    })

};


export const deletePlace = (_id) => {

    return fetch(`${url}/places/delete/${_id}`, {
        method: "GET"
    })
    .then(() => {
        
    })
        .catch(err => console.log(err))
}
export const getOne = (_id) => {
    return fetch(`${url}/places/specific/${_id}`,{
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(res => res.json())
        .catch(error => console.log(error));
};



export const update = (_id, place) => {
    console.log(_id, place);
    return fetch(`${url}/places/edit-place/${_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(place)
    });
};