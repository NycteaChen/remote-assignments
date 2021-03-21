// Assignment 2: Callback Function and Advanced HTML DOM
// Complete the functions below to make AJAX call to a URL by GET method, and show the
// response data in the page. You may render UI with any style.

function ajax(src, callback){
    // your code here
    var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if(request.readyState === 4 && request.status === 200) {
                var cellphones = JSON.parse(request.responseText);
                callback(cellphones);
            }
        };
    request.open('GET', src);
    request.send();
} 


    function render(data){
    // your code here.
    // document.createElement() and appendChild() are preferred. No innerHTML or
    // something alike
        for ( let i =0; i < data.length; i++){
            var div = document.createElement('div');
            var h1 = document.createElement('h1');
            var h3 = document.createElement('h3');
            var p = document.createElement('p');

            h1.textContent = data[i].name;
            h3.textContent = 'Price:' + data[i].price;
            p.textContent = data[i].description;

            div.appendChild(h1);
            div.appendChild(h3);
            div.appendChild(p);
            div.style.display = "inline-block";
            div.style.margin = "100px";
            div.style.padding = "15px";
            const body = document.querySelector("body");
            body.appendChild(div);
            body.style.textAlign="center";
        } 
    
    }

ajax("https://cwpeng.github.io/live-records-samples/data/products.json",function(response){render(response);}); 

    // you should get product information in JSON format and render data in the page

