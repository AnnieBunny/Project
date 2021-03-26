const url = 'http://localhost:4000/places';


//-------GET All PLACES---------//

export const getAll = () => {
    return fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));
}