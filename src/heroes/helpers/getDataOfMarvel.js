
export const getDataOfMarvel = async (typeOfData) =>{
    const apikey = 'c7f464c69d07d97c49da306f506c5130';
    
    const petition = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=c7f464c69d07d97c49da306f506c5130`)

    const data = await petition.json();
    return data
}