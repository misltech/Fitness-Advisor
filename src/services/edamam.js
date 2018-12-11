const axios = require('axios');

export function fetchData(searchCriteria){
    // return new Promise(function (resolve, reject) {
      
    //     var data = null;
    //   axios.get("https://api.edamam.com/search?q=" + searchCriteria + "&app_id=c32356f0&app_key=3d35835b0683ae7b530beb1de8e1857b&hits=recipe&dietLabels=balanced", ).then(res =>{
    //   console.log(res);
    //   data = res.data.hits;
    //   resolve(data);
    //   });
      
    // })

    
    return axios.get("https://api.edamam.com/search?q=" + searchCriteria + "&app_id=c32356f0&app_key=3d35835b0683ae7b530beb1de8e1857b&hits=recipe&dietLabels=balanced" );




}





