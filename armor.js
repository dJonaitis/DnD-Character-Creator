var padded = {
    displayName:"Padded",
    baseAC:11,
    calculate(){
        player.ac = this.baseAC + Math.floor((player.DEX-10)/2);
    }
}
var leather = {
    displayName:"Leather",
    baseAC:11,
    calculate(){
        player.ac = this.baseAC + Math.floor((player.DEX-10)/2);
    }
}
var studdedLeather = {
    displayName:"Studded leather",
    baseAC:12,
    calculate(){
        player.ac = this.baseAC + Math.floor((player.DEX-10)/2);
    }
}
var hide = {
    displayName:"Hide",
    baseAC:12,
    maxBonusAC:2,
    calculate(){
        player.ac = this.baseAC;
        if(Math.floor((player.DEX-10)/2) >= this.maxBonusAC){
            player.ac += this.maxBonusAC;
        } else{
            player.ac += Math.floor((player.DEX-10)/2);
        }
    }
}
var chainShirt = {
    displayName:"Chain shirt",
    baseAC:13,
    maxBonusAC:2,
    calculate(){
        player.ac = this.baseAC;
        if(Math.floor((player.DEX-10)/2) >= this.maxBonusAC){
            player.ac += this.maxBonusAC;
        } else{
            player.ac += Math.floor((player.DEX-10)/2);
        }
    }
}
var scaleMail = {
    displayName:"Scale mail",
    baseAC:14,
    maxBonusAC:2,
    calculate(){
        player.ac = this.baseAC;
        if(Math.floor((player.DEX-10)/2) >= this.maxBonusAC){
            player.ac += this.maxBonusAC;
        } else{
            player.ac += Math.floor((player.DEX-10)/2);
        }
    }
}
var breastplate = {
    displayName:"Breastplate",
    baseAC:14,
    maxBonusAC:2,
    calculate(){
        player.ac = this.baseAC;
        if(Math.floor((player.DEX-10)/2) >= this.maxBonusAC){
            player.ac += this.maxBonusAC;
        } else{
            player.ac += Math.floor((player.DEX-10)/2);
        }
    }
}
var halfPlate = {
    displayName:"Half plate",
    baseAC:15,
    maxBonusAC:2,
    calculate(){
        player.ac = this.baseAC;
        if(Math.floor((player.DEX-10)/2) >= this.maxBonusAC){
            player.ac += this.maxBonusAC;
        } else{
            player.ac += Math.floor((player.DEX-10)/2);
        }
    }
}
var ringMail = {
    displayName:"Ring mail",
    baseAC:14,
    bonusAC:0,
    calculate(){
        player.ac = this.baseAC + this.bonusAC;
    }
}
var chainMail = {
    displayName:"Chain mail",
    baseAC:16,
    bonusAC:0,
    calculate(){
        player.ac = this.baseAC + this.bonusAC;
    }
}
var splint = {
    displayName:"Splint",
    baseAC:17,
    bonusAC:0,
    calculate(){
        player.ac = this.baseAC + this.bonusAC;
    }
}
var plate = {
    displayName:"Plate",
    baseAC:18,
    bonusAC:0,
    calculate(){
        player.ac = this.baseAC + this.bonusAC;
    }
}
var shield = {
    displayName:"Shield",
    baseAC:0,
    bonusAC:2,
    calculate(){
        player.ac += this.baseAC + this.bonusAC;
    }
}

