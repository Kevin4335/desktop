var cheese = false;
var sauce = false;
var pepperoni = false;
var ham = false;
var pineapple = false;
var square = false;
var deep = false;
var seafood = false;
var anchovies = false;
var vegetables = false;
var meat = false;
var very = false;


document.querySelector("#Cheese").addEventListener("click",function(){
    
    if(this.checked){
        cheese = true;
         ("very");
    }else{
        cheese = false;
    }

    if(cheese && sauce && pepperoni &&ham && pineapple && square && deep && seafood && anchovies && vegetables && meat && very){
        document.querySelector("#pizzaOutput").textContent = "Everything Pizza";
    }
    else if(ham && pineapple ){
        document.querySelector("#pizzaOutput").textContent = "Hawaian Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }else if(cheese && sauce && pepperoni){
        document.querySelector("#pizzaOutput").textContent = "Pepperoni Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && very){
        document.querySelector("#pizzaOutput").textContent = "Marinara Pizza";
    }else if(cheese && sauce && pepperoni && deep){
        document.querySelector("#pizzaOutput").textContent = "Deep Dish Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "White Clam Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && (seafood || anchovies) && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Sicilian Pizza";
    }else if(vegetables){
        document.querySelector("#pizzaOutput").textContent = "Veggie Pizza";
    }else if(very){
        document.querySelector("#pizzaOutput").textContent = "White Pizza";
    }
    else if(square){
        document.querySelector("#pizzaOutput").textContent = "Detroit Pizza";
    }
    else if(!cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "";
    }
    else{
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }
});

document.querySelector("#Sauce").addEventListener("click",function(){
    if(this.checked){
        sauce = true;
         ("very");
    }else{
        sauce = false;
    }

    if(cheese && sauce && pepperoni &&ham && pineapple && square && deep && seafood && anchovies && vegetables && meat && very){
        document.querySelector("#pizzaOutput").textContent = "Everything Pizza";
    }
    else if(ham && pineapple ){
        document.querySelector("#pizzaOutput").textContent = "Hawaian Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }else if(cheese && sauce && pepperoni){
        document.querySelector("#pizzaOutput").textContent = "Pepperoni Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && very){
        document.querySelector("#pizzaOutput").textContent = "Marinara Pizza";
    }else if(cheese && sauce && pepperoni && deep){
        document.querySelector("#pizzaOutput").textContent = "Deep Dish Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "White Clam Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && (seafood || anchovies) && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Sicilian Pizza";
    }else if(vegetables){
        document.querySelector("#pizzaOutput").textContent = "Veggie Pizza";
    }else if(very){
        document.querySelector("#pizzaOutput").textContent = "White Pizza";
    }
    else if(square){
        document.querySelector("#pizzaOutput").textContent = "Detroit Pizza";
    }
    else if(!cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "";
    }
    else{
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }
    
});

document.querySelector("#Pepperoni").addEventListener("click",function(){
    if(this.checked){
        pepperoni = true;
         ("very");
    }else{
        pepperoni = false;
    }

    if(cheese && sauce && pepperoni &&ham && pineapple && square && deep && seafood && anchovies && vegetables && meat && very){
        document.querySelector("#pizzaOutput").textContent = "Everything Pizza";
    }
    else if(ham && pineapple ){
        document.querySelector("#pizzaOutput").textContent = "Hawaian Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }else if(cheese && sauce && pepperoni){
        document.querySelector("#pizzaOutput").textContent = "Pepperoni Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && very){
        document.querySelector("#pizzaOutput").textContent = "Marinara Pizza";
    }else if(cheese && sauce && pepperoni && deep){
        document.querySelector("#pizzaOutput").textContent = "Deep Dish Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "White Clam Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && (seafood || anchovies) && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Sicilian Pizza";
    }else if(vegetables){
        document.querySelector("#pizzaOutput").textContent = "Veggie Pizza";
    }else if(very){
        document.querySelector("#pizzaOutput").textContent = "White Pizza";
    }
    else if(square){
        document.querySelector("#pizzaOutput").textContent = "Detroit Pizza";
    }
    else if(!cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "";
    }
    else{
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }
});

document.querySelector("#Ham").addEventListener("click",function(){
    if(this.checked){
        ham = true;
         ("very");
    }else{
        ham = false;
    }

    if(cheese && sauce && pepperoni &&ham && pineapple && square && deep && seafood && anchovies && vegetables && meat && very){
        document.querySelector("#pizzaOutput").textContent = "Everything Pizza";
    }
    else if(ham && pineapple ){
        document.querySelector("#pizzaOutput").textContent = "Hawaian Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }else if(cheese && sauce && pepperoni){
        document.querySelector("#pizzaOutput").textContent = "Pepperoni Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && very){
        document.querySelector("#pizzaOutput").textContent = "Marinara Pizza";
    }else if(cheese && sauce && pepperoni && deep){
        document.querySelector("#pizzaOutput").textContent = "Deep Dish Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "White Clam Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && (seafood || anchovies) && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Sicilian Pizza";
    }else if(vegetables){
        document.querySelector("#pizzaOutput").textContent = "Veggie Pizza";
    }else if(very){
        document.querySelector("#pizzaOutput").textContent = "White Pizza";
    }
    else if(square){
        document.querySelector("#pizzaOutput").textContent = "Detroit Pizza";
    }
    else if(!cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "";
    }
    else{
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }
});

document.querySelector("#Pineapple").addEventListener("click",function(){
    if(this.checked){
        pineapple = true;
         ("very");
    }else{
        pineapple = false;
    }

    if(cheese && sauce && pepperoni &&ham && pineapple && square && deep && seafood && anchovies && vegetables && meat && very){
        document.querySelector("#pizzaOutput").textContent = "Everything Pizza";
    }
    else if(ham && pineapple ){
        document.querySelector("#pizzaOutput").textContent = "Hawaian Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }else if(cheese && sauce && pepperoni){
        document.querySelector("#pizzaOutput").textContent = "Pepperoni Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && very){
        document.querySelector("#pizzaOutput").textContent = "Marinara Pizza";
    }else if(cheese && sauce && pepperoni && deep){
        document.querySelector("#pizzaOutput").textContent = "Deep Dish Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "White Clam Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && (seafood || anchovies) && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Sicilian Pizza";
    }else if(vegetables){
        document.querySelector("#pizzaOutput").textContent = "Veggie Pizza";
    }else if(very){
        document.querySelector("#pizzaOutput").textContent = "White Pizza";
    }
    else if(square){
        document.querySelector("#pizzaOutput").textContent = "Detroit Pizza";
    }
    else if(!cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "";
    }
    else{
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }
});

document.querySelector("#Square").addEventListener("click",function(){
    if(this.checked){
        square = true;
         ("very");
    }else{
        square = false;
    }

    if(cheese && sauce && pepperoni &&ham && pineapple && square && deep && seafood && anchovies && vegetables && meat && very){
        document.querySelector("#pizzaOutput").textContent = "Everything Pizza";
    }
    else if(ham && pineapple ){
        document.querySelector("#pizzaOutput").textContent = "Hawaian Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }else if(cheese && sauce && pepperoni){
        document.querySelector("#pizzaOutput").textContent = "Pepperoni Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && very){
        document.querySelector("#pizzaOutput").textContent = "Marinara Pizza";
    }else if(cheese && sauce && pepperoni && deep){
        document.querySelector("#pizzaOutput").textContent = "Deep Dish Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "White Clam Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && (seafood || anchovies) && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Sicilian Pizza";
    }else if(vegetables){
        document.querySelector("#pizzaOutput").textContent = "Veggie Pizza";
    }else if(very){
        document.querySelector("#pizzaOutput").textContent = "White Pizza";
    }
    else if(square){
        document.querySelector("#pizzaOutput").textContent = "Detroit Pizza";
    }
    else if(!cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "";
    }
    else{
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }
});

document.querySelector("#Deep").addEventListener("click",function(){
    if(this.checked){
        deep = true;
         ("very");
    }else{
        deep = false;
    }

    if(cheese && sauce && pepperoni &&ham && pineapple && square && deep && seafood && anchovies && vegetables && meat && very){
        document.querySelector("#pizzaOutput").textContent = "Everything Pizza";
    }
    else if(ham && pineapple ){
        document.querySelector("#pizzaOutput").textContent = "Hawaian Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }else if(cheese && sauce && pepperoni){
        document.querySelector("#pizzaOutput").textContent = "Pepperoni Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && very){
        document.querySelector("#pizzaOutput").textContent = "Marinara Pizza";
    }else if(cheese && sauce && pepperoni && deep){
        document.querySelector("#pizzaOutput").textContent = "Deep Dish Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "White Clam Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && (seafood || anchovies) && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Sicilian Pizza";
    }else if(vegetables){
        document.querySelector("#pizzaOutput").textContent = "Veggie Pizza";
    }else if(very){
        document.querySelector("#pizzaOutput").textContent = "White Pizza";
    }
    else if(square){
        document.querySelector("#pizzaOutput").textContent = "Detroit Pizza";
    }
    else if(!cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "";
    }
    else{
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }
});

document.querySelector("#Seafood").addEventListener("click",function(){
    if(this.checked){
        seafood = true;
         ("very");
    }else{
        seafood = false;
    }

    if(cheese && sauce && pepperoni &&ham && pineapple && square && deep && seafood && anchovies && vegetables && meat && very){
        document.querySelector("#pizzaOutput").textContent = "Everything Pizza";
    }
    else if(ham && pineapple ){
        document.querySelector("#pizzaOutput").textContent = "Hawaian Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }else if(cheese && sauce && pepperoni){
        document.querySelector("#pizzaOutput").textContent = "Pepperoni Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && very){
        document.querySelector("#pizzaOutput").textContent = "Marinara Pizza";
    }else if(cheese && sauce && pepperoni && deep){
        document.querySelector("#pizzaOutput").textContent = "Deep Dish Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "White Clam Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && (seafood || anchovies) && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Sicilian Pizza";
    }else if(vegetables){
        document.querySelector("#pizzaOutput").textContent = "Veggie Pizza";
    }else if(very){
        document.querySelector("#pizzaOutput").textContent = "White Pizza";
    }
    else if(square){
        document.querySelector("#pizzaOutput").textContent = "Detroit Pizza";
    }
    else if(!cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "";
    }
    else{
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }
});

document.querySelector("#Anchovies").addEventListener("click",function(){
    if(this.checked){
        anchovies = true;
         ("very");
    }else{
        anchovies = false;
    }

    if(cheese && sauce && pepperoni &&ham && pineapple && square && deep && seafood && anchovies && vegetables && meat && very){
        document.querySelector("#pizzaOutput").textContent = "Everything Pizza";
    }
    else if(ham && pineapple ){
        document.querySelector("#pizzaOutput").textContent = "Hawaian Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }else if(cheese && sauce && pepperoni){
        document.querySelector("#pizzaOutput").textContent = "Pepperoni Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && very){
        document.querySelector("#pizzaOutput").textContent = "Marinara Pizza";
    }else if(cheese && sauce && pepperoni && deep){
        document.querySelector("#pizzaOutput").textContent = "Deep Dish Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "White Clam Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && (seafood || anchovies) && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Sicilian Pizza";
    }else if(vegetables){
        document.querySelector("#pizzaOutput").textContent = "Veggie Pizza";
    }else if(very){
        document.querySelector("#pizzaOutput").textContent = "White Pizza";
    }
    else if(square){
        document.querySelector("#pizzaOutput").textContent = "Detroit Pizza";
    }
    else if(!cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "";
    }
    else{
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }
});

document.querySelector("#Vegetables").addEventListener("click",function(){
    if(this.checked){
        vegetables = true;
         ("very");
    }else{
        vegetables = false;
    }

    if(cheese && sauce && pepperoni &&ham && pineapple && square && deep && seafood && anchovies && vegetables && meat && very){
        document.querySelector("#pizzaOutput").textContent = "Everything Pizza";
    }
    else if(ham && pineapple ){
        document.querySelector("#pizzaOutput").textContent = "Hawaian Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }else if(cheese && sauce && pepperoni){
        document.querySelector("#pizzaOutput").textContent = "Pepperoni Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && very){
        document.querySelector("#pizzaOutput").textContent = "Marinara Pizza";
    }else if(cheese && sauce && pepperoni && deep){
        document.querySelector("#pizzaOutput").textContent = "Deep Dish Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "White Clam Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && (seafood || anchovies) && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Sicilian Pizza";
    }else if(vegetables){
        document.querySelector("#pizzaOutput").textContent = "Veggie Pizza";
    }else if(very){
        document.querySelector("#pizzaOutput").textContent = "White Pizza";
    }
    else if(square){
        document.querySelector("#pizzaOutput").textContent = "Detroit Pizza";
    }
    else if(!cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "";
    }
    else{
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }
});

document.querySelector("#Meat").addEventListener("click",function(){
    if(this.checked){
        meat = true;
         ("very");
    }else{
        meat = false;
    }

    if(cheese && sauce && pepperoni &&ham && pineapple && square && deep && seafood && anchovies && vegetables && meat && very){
        document.querySelector("#pizzaOutput").textContent = "Everything Pizza";
    }
    else if(ham && pineapple ){
        document.querySelector("#pizzaOutput").textContent = "Hawaian Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }else if(cheese && sauce && pepperoni){
        document.querySelector("#pizzaOutput").textContent = "Pepperoni Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && very){
        document.querySelector("#pizzaOutput").textContent = "Marinara Pizza";
    }else if(cheese && sauce && pepperoni && deep){
        document.querySelector("#pizzaOutput").textContent = "Deep Dish Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "White Clam Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && (seafood || anchovies) && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Sicilian Pizza";
    }else if(vegetables){
        document.querySelector("#pizzaOutput").textContent = "Veggie Pizza";
    }else if(very){
        document.querySelector("#pizzaOutput").textContent = "White Pizza";
    }
    else if(square){
        document.querySelector("#pizzaOutput").textContent = "Detroit Pizza";
    }
    else if(!cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "";
    }
    else{
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }
});

document.querySelector("#Very").addEventListener("click",function(){
    if(this.checked){
        very = true;
         ("very");
    }else{
        very = false;
    }

    if(cheese && sauce && pepperoni &&ham && pineapple && square && deep && seafood && anchovies && vegetables && meat && very){
        document.querySelector("#pizzaOutput").textContent = "Everything Pizza";
    }
    else if(ham && pineapple ){
        document.querySelector("#pizzaOutput").textContent = "Hawaian Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }else if(cheese && sauce && pepperoni){
        document.querySelector("#pizzaOutput").textContent = "Pepperoni Pizza";
    }else if(cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && very){
        document.querySelector("#pizzaOutput").textContent = "Marinara Pizza";
    }else if(cheese && sauce && pepperoni && deep){
        document.querySelector("#pizzaOutput").textContent = "Deep Dish Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "White Clam Pizza";
    }else if(cheese && sauce && !pepperoni && !ham && !pineapple && !square && !deep && (seafood || anchovies) && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "Sicilian Pizza";
    }else if(vegetables){
        document.querySelector("#pizzaOutput").textContent = "Veggie Pizza";
    }else if(very){
        document.querySelector("#pizzaOutput").textContent = "White Pizza";
    }
    else if(square){
        document.querySelector("#pizzaOutput").textContent = "Detroit Pizza";
    }
    else if(!cheese && !sauce && !pepperoni && !ham && !pineapple && !square && !deep && !seafood && !anchovies && !vegetables && !meat && !very){
        document.querySelector("#pizzaOutput").textContent = "";
    }
    else{
        document.querySelector("#pizzaOutput").textContent = "Cheese Pizza";
    }
});

