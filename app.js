const food = [
    {code:"B1001", name:"Classic Burger (Large)", price:750},
    {code:"B1002", name:"Classic Burger (Regular)", price:1500, discount:15},
    {code:"B1003", name:"Turkey Burger", price:1600},
    {code:"B1004", name:"Chicken Burger (Large)", price:1400},
    {code:"B1005", name:"Chicken Burger (Regular)", price:800, discount:20},
    {code:"B1006", name:"Cheese Burger (Large)", price:1000},
    {code:"B1007", name:"Cheese Burger (Regular)", price:600},
    {code:"B1008", name:"Bacon Burger", price:650, discount:15},
    {code:"B1009", name:"Shawarma Burger", price:800},
    {code:"B1010", name:"Olive Burger", price:1800},
    {code:"B1012", name:"Double-Cheese Burger", price:1250, discount:20},
    {code:"B1013", name:"Crispy Chicken Burger (Reguler)", price:1200},
    {code:"B1014", name:"Crispy Chicken Burger (Large)", price:1600, discount:10},
    {code:"B1015", name:"Paneer Burger", price:900},

    {code:"B1016", name:"Crispy Chicken Submarine (Large)", price:2000},
    {code:"B1017", name:"Crispy Chicken Submarine (Reguler)", price:1500},
    {code:"B1018", name:"Chicken Submarine (Large)", price:1800, discount:3},
    {code:"B1019", name:"Chicken Submarine (Reguler)", price:1400},
    {code:"B1020", name:"Grinder Submarine", price:2300},
    {code:"B1021", name:"Cheese Submarine", price:2200},
    {code:"B1022", name:"double cheesen Chicken Submarine", price:1900, discount:16},
    {code:"B1023", name:"Special Horgie Submarine", price:2800},
    {code:"B1024", name:"MOS Special Submarine", price:3000},

    {code:"B1025", name:"Steak Fries (Large)", price:1200},
    {code:"B1026", name:"Steak Fries (Medium)", price:600},
    {code:"B1027", name:"French Fries (Large)", price:800},
    {code:"B1028", name:"French Fries (Medium)", price:650},
    {code:"B1029", name:"French Fries (Small)", price:450},
    {code:"B1030", name:"Sweet Potato Fries (Large)", price:600},

    {code:"B1031", name:"Chicken Cheese Pasta", price:1600, discount:15},
    {code:"B1032", name:"Chicken Penne Pasta", price:1700},
    {code:"B1033", name:"Ground Turkey Pasta Bake", price:2900, discount:10},
    {code:"B1034", name:"Creamy Shrim Pasta", price:2000},
    {code:"B1035", name:"Lemon Butter Pasta", price:1950},
    {code:"B1036", name:"Tagliatelle Pasta", price:2400, discount:1},
    {code:"B1037", name:"Baked Ravioli", price:2000, discount:1},

    {code:"B1038", name:"Fries Chicken (Small)", price:1200},
    {code:"B1039", name:"Fries Chicken (Regular)", price:2300, discount:10},
    {code:"B1040", name:"Fries Chicken (Large)", price:3100, discount:5},
    {code:"B1041", name:"Hot Wings (Large)", price:2400},
    {code:"B1042", name:"Devilled Chicken (Large)", price:900},
    {code:"B1043", name:"BBQ Chicken (Regular)", price:2100},

    {code:"B1044", name:"Pepsi (330ml)", price:990, discount:5},
    {code:"B1045", name:"Coca-Cola (330ml)", price:1230},
    {code:"B1046", name:"Sprite (330ml)", price:1500, discount:3},
    {code:"B1047", name:"Mirinda (330ml)", price:850, discount:7},
]

const cart = []

function foodcategoryburger(){
    let cardbody = "";
    let card = document.getElementById("card");
    for(let i = 0; i < 14; i++){
        if (food[i].discount == null) {
            cardbody += `<div class="col">
            <div class="card h-10 rounded-5 mb-4">
            <img src="img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" class="card-img-top rounded-5">
            <div class="card-body">
                <h4 class = "card-title">${food[i].name}<button onclick = "addtocart(${i})" class = "addtocart btn ms-4 me-0"><img class="w-50 me-0" src="img/Sidebar/add-to-cart.png"></button></h4>
                <p class = "card-text">$${food[i].price}</p>
            </div>
            </div>
        </div>`
        }else{
            cardbody += `<div class="col">
            <div class="card h-10 rounded-5 mb-4">
            <img src="img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" class="card-img-top rounded-5">
            <div class="card-body">
                <h4 class="card-title">${food[i].name}<button onclick = "addtocart(${i})" class="addtocart btn ms-4 me-0" onclick="addtocart()"><img class="w-50 me-0" src="img/Sidebar/add-to-cart.png"></button></h4>
                <p class="card-text">$${food[i].price}</p>
                <p>${food[i].discount}off!</p>
            </div>
            </div>
        </div>`
        }
    }
    card.innerHTML = cardbody;
}

function foodcategorysubmarines(){
    let cardbody = "";
    let card = document.getElementById("card");
    for(let i = 14; i < 23; i++){
        if (food[i].discount == null) {
            cardbody += `<div class="col">
            <div class="card h-10 rounded-5 mb-4">
            <img src="img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" class="card-img-top rounded-5">
            <div class="card-body">
                <h4 class = "card-title">${food[i].name}<button onclick = "addtocart(${i})" class = "addtocart btn ms-4 me-0"><img class="w-50 me-0" src="img/Sidebar/add-to-cart.png"></button></h4>
                <p class = "card-text">$${food[i].price}</p>
            </div>
            </div>
        </div>`
        }else{
            cardbody += `<div class="col">
            <div class="card h-10 rounded-5 mb-4">
            <img src="img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" class="card-img-top rounded-5">
            <div class="card-body">
                <h4 class="card-title">${food[i].name}<button  onclick = "addtocart(${i})" class="addtocart btn ms-4 me-0"><img class="w-50 me-0" src="img/Sidebar/add-to-cart.png"></button></h4>
                <p class="card-text">$${food[i].price}</p>
                <p>${food[i].discount}off!</p>
            </div>
            </div>
        </div>`
        }
    }
    card.innerHTML = cardbody;
}

function foodcategoryfries(){
    let cardbody = "";
    let card = document.getElementById("card");
    for(let i = 23; i < 29; i++){
        if (food[i].discount == null) {
            cardbody += `<div class="col">
            <div class="card h-10 rounded-5 mb-4">
            <img src="img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" class="card-img-top rounded-5">
            <div class="card-body">
                <h4 class = "card-title">${food[i].name}<button onclick = "addtocart(${i})" class = "addtocart btn ms-4 me-0"><img class="w-50 me-0" src="img/Sidebar/add-to-cart.png"></button></h4>
                <p class = "card-text">$${food[i].price}</p>
            </div>
            </div>
        </div>`
        }else{
            cardbody += `<div class="col">
            <div class="card h-10 rounded-5 mb-4">
            <img src="img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" class="card-img-top rounded-5">
            <div class="card-body">
                <h4 class="card-title">${food[i].name}<button onclick = "addtocart(${i})" class="addtocart btn ms-4 me-0"><img class="w-50 me-0" src="img/Sidebar/add-to-cart.png"></button></h4>
                <p class="card-text">$${food[i].price}</p>
                <p>${food[i].discount}off!</p>
            </div>
            </div>
        </div>`
        }
    }
    card.innerHTML = cardbody;
}

function foodcategorypasta(){
    let cardbody = "";
    let card = document.getElementById("card");
    for(let i = 29; i < 36; i++){
        if (food[i].discount == null) {
            cardbody += `<div class="col">
            <div class="card h-10 rounded-5 mb-4">
            <img src="img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" class="card-img-top rounded-5">
            <div class="card-body">
                <h4 class = "card-title">${food[i].name}<button onclick = "addtocart(${i})" class = "addtocart btn ms-4 me-0"><img class="w-50 me-0" src="img/Sidebar/add-to-cart.png"></button></h4>
                <p class = "card-text">$${food[i].price}</p>
            </div>
            </div>
        </div>`
        }else{
            cardbody += `<div class="col">
            <div class="card h-10 rounded-5 mb-4">
            <img src="img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" class="card-img-top rounded-5">
            <div class="card-body">
                <h4 class="card-title">${food[i].name}<button onclick = "addtocart(${i})" class="addtocart btn ms-4 me-0"><img class="w-50 me-0" src="img/Sidebar/add-to-cart.png"></button></h4>
                <p class="card-text">$${food[i].price}</p>
                <p>${food[i].discount}off!</p>
            </div>
            </div>
        </div>`
        }
    }
    card.innerHTML = cardbody;
}

function foodcategorychicken(){
    let cardbody = "";
    let card = document.getElementById("card");
    for(let i = 36; i < 42; i++){
        if (food[i].discount == null) {
            cardbody += `<div class="col">
            <div class="card h-10 rounded-5 mb-4">
            <img src="img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" class="card-img-top rounded-5">
            <div class="card-body">
                <h4 class = "card-title">${food[i].name}<button onclick = "addtocart(${i})" class = "addtocart btn ms-4 me-0"><img class="w-50 me-0" src="img/Sidebar/add-to-cart.png"></button></h4>
                <p class = "card-text">$${food[i].price}</p>
            </div>
            </div>
        </div>`
        }else{
            cardbody += `<div class="col">
            <div class="card h-10 rounded-5 mb-4">
            <img src="img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" class="card-img-top rounded-5">
            <div class="card-body">
                <h4 class="card-title">${food[i].name}<button onclick = "addtocart(${i})" class="addtocart btn ms-4 me-0"><img class="w-50 me-0" src="img/Sidebar/add-to-cart.png"></button></h4>
                <p class="card-text">$${food[i].price}</p>
                <p>${food[i].discount}off!</p>
            </div>
            </div>
        </div>`
        }
    }
    card.innerHTML = cardbody;
}

function foodcategorybeverages(){
    let cardbody = "";
    let card = document.getElementById("card");
    for(let i = 42; i < 46; i++){
        if (food[i].discount == null) {
            cardbody += `<div class="col">
            <div class="card h-10 rounded-5 mb-4">
            <img src="img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" class="card-img-top rounded-5">
            <div class="card-body">
                <h4 class = "card-title">${food[i].name}<button onclick = "addtocart(${i})" class = "addtocart btn ms-4 me-0"><img class="w-50 me-0" src="img/Sidebar/add-to-cart.png"></button></h4>
                <p class = "card-text">$${food[i].price}</p>
            </div>
            </div>
        </div>`
        }else{
            cardbody += `<div class="col">
            <div class="card h-10 rounded-5 mb-4">
            <img src="img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" class="card-img-top rounded-5">
            <div class="card-body">
                <h4 class="card-title">${food[i].name}<button onclick = "addtocart(${i})" class="addtocart btn ms-4 me-0"><img class="w-50 me-0" src="img/Sidebar/add-to-cart.png"></button></h4>
                <p class="card-text">$${food[i].price}</p>
                <p>${food[i].discount}off!</p>
            </div>
            </div>
        </div>`
        }
    }
    card.innerHTML = cardbody ;
}

let cartbody= "";

function addtocart(i) {
    cart.push(food[i]); 
    let carttable = document.getElementById("carttable");

    cartbody += `<tr>
              <th scope="row"><span onclick="removefromcart()" class="remove">-</span><span id="rownumber" class="add">${cart.length}</span></th>
              <td>${food[i].name}</td>
              <td>1x</td>
              <td>$${food[i].price}</td>
            </tr>`
            
    carttable.innerHTML = cartbody ;
}

function removefromcart() {
    let rownumber = document.getElementById("rownumber").value;
    cart.splice(food[rownumber-1]);
    cartbody = "";
    let carttable = document.getElementById("carttable");

    cart.forEach(data => {
        cartbody += `<tr>
              <th scope="row"><span onclick="removefromcart()" class="remove">-</span><span id="rownumber" class="add">1</span></th>
              <td>${data.name}</td>
              <td>1x</td>
              <td>$100</td>
            </tr>`
    });

    carttable.innerHTML = cartbody ;
}