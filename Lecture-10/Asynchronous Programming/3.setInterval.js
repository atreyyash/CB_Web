let id = setInterval(function () {
    console.log("Naacho");
}, 1);



setTimeout(function () {
    clearInterval(id);
}, 5000);



console.log(id);

// id mei interval number hota hai
// id interval k reference k liye hai
 
// setTimeout mei clearInterval krne se interval ko check krna band kr dega

// < !--set interval - web api mei baar baar jayega fri queue mei fir stcak mei baar baar-- >