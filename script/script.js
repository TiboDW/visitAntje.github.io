function toggleGrid(){
    console.log("test");

    var hiddenGrid1 = document.getElementById("gridhidden1")
    var hiddenGrid2 = document.getElementById("gridhidden2")
    var hiddenGrid3 = document.getElementById("gridhidden3")
    var button = document.getElementById("buttonHidden")
    

    if(hiddenGrid1.classList.contains("hidden")){
        hiddenGrid1.classList.remove("hidden")
        hiddenGrid2.classList.remove("hidden")
        hiddenGrid3.classList.remove("hidden")
        button.classList.add("hidden")

    }
}