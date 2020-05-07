export const sendPUtRequest = (data, cb) => {
    let xhr = new XMLHttpRequest();
    let shuffleArray = Json.stringify(data); 

    xhr.open("PUT", "/setItems")
    xhr.setRequestHeader("Content-type", "application-json");
    xhr.send(shuffleArray);  
} 

export const sendGetRequest  = (data,cb) => {
    let xhr = new XMLHttpRequest();
    let dataInJson = Json.parse(data);

    xhr.open("GET", "/getItems");
    xhr.setRequestHeader("Content-type", "application-json");
    xhr.send(dataInJson); 
}