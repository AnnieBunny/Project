const url = 'http://localhost:4000';

//http://localhost:4000/places/create

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
        .then(res => {
            console.log(2222222)

            console.log(res.json())
        })
        .catch(err => console.log(err))
}
export const getOne = (_id) => {
    return fetch(`${url}/specific/${_id}`,{
        'Content-Type': 'application/json',
    })
        .then(res => {

            console.log(1111111111)
            res.json()
        })
        .catch(error => console.log(error));
};



export const update = (_id, place) => {
    return fetch(`${url}/places/${_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(place)
    });
};