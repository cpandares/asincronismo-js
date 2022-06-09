const fetchData = require('../utils/fetchData');

const Api = "https://rickandmortyapi.com/api/character/";

const getAllCharacters = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(Api + data.results[0].id);
        const origin = await fetchData(character.origin.url);
        
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    } catch (error) {
        console.log(error);
    }
}


console.log("before");
getAllCharacters(Api);
console.log("after");