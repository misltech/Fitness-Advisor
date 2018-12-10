
export function fetchData(searchCriteria){
    var data = null;
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {

        //console.log(this.responseText);
        //result = this.responseText;
        return this.responseText;
      }
    });
    
    xhr.open("GET", "https://api.edamam.com/search?q=" + searchCriteria + "&app_id=c32356f0&app_key=3d35835b0683ae7b530beb1de8e1857b&hits=recipe&dietLabels=balanced");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "5315e645-a337-905b-6c0a-d925f0c1b1f9");
    
    xhr.send(data);
    

}







