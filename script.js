let button = document.querySelectorAll("button");
let p = document.querySelectorAll(".para");

let score = [0, 0, 0];

button.forEach(function(element, index) {
    element.addEventListener("click", function(){
        console.log("el", element);
        console.log("index", index);
                                                     //which element is getting clicked
        score[index]++;      
                              //which index is getting updated
         p[index].innerHTML = score[index];                    
    })

})
