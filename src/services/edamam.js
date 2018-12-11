const axios = require('axios');

export function fetchData(searchCriteria){
    return axios.get("https://api.edamam.com/search?q=" + searchCriteria + "&app_id=c32356f0&app_key=3d35835b0683ae7b530beb1de8e1857b&hits=recipe&dietLabels=balanced" );
}





