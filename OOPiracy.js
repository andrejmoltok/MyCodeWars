function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}
   
Ship.prototype.isWorthIt = function() {
    return (this.draft - (this.crew * 1.5)) > 20;
}

let aWorthyShip = new Ship(100,20);
let emptyShip = new Ship(0,0);

console.log(aWorthyShip.isWorthIt()); // true
console.log(emptyShip.isWorthIt()); // false