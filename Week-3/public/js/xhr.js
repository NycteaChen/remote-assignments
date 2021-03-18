var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200) {
        let numberHTML = xhr.responseText;
        document.getElementById('sumHTML').innerHTML = numberHTML;
    }
}
xhr.open('GET', '/getData?number=10');
xhr.send();


function getSum() {
    var getNumber= new XMLHttpRequest();
    getNumber.onreadystatechange = function(){
        if(getNumber.readyState === 4 && getNumber.status === 200) {
            let numberHTML = getNumber.responseText;
            if (numberHTML > 0){
                document.getElementById('getNumber').innerHTML = `<h2>You got ${numberHTML}!</h2>`;
            } else{
                document.getElementById('getNumber').innerHTML = `<h2>${numberHTML}!</h2>`;
            }
        }  
    }; 
    let number = document.getElementById('number').value;
    getNumber.open('GET', `/getData?number=${number}`);
    getNumber.send();

};

function remove () {
    document.getElementById('getNumber').innerHTML = "";
}