function whosBuyingLunch(){
    let friends = ["sankalp", "lol", "anubhav", "singh", "Bassi"];
    const random = Math.floor(Math.random() * friends.length);
    console.log(friends[random] + " is going to buy lunch today!");
}
