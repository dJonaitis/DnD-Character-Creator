var weapons = ["Simple","Martial","Longsword","Shortsword","Shortbow","Longbow"];


//Simple Melee
var dart = {
    name: "Dart",
    damageDice: "1d4",
    damageType:"piercing",
    type:"simpleRanged",
    finesse:true,
    range:true,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }    
    }
}
var club = {
    name: "Club",
    damageDice: "1d4",
    damageType:"bludgeoning",
    type:"simpleMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }
    }
}
var dagger = {
    name: "Dagger",
    damageDice: "1d4",
    damageType:"piercing",
    type:"simpleMelee",
    finesse:true,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }    
    }
}
var greatclub = {
    name: "Greatclub",
    damageDice: "1d8",
    damageType:"bludgeoning",
    type:"simpleMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }    
    }
}
var handaxe = {
    name: "Handaxe",
    damageDice: "1d6",
    damageType:"slashing",
    type:"simpleMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}
var javelin = {
    name: "Javelin",
    damageDice: "1d6",
    damageType:"piercing",
    type:"simpleMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }    
    }
}
var lightHammer = {
    name: "Light hammer",
    damageDice: "1d4",
    damageType:"bludgeoning",
    type:"simpleMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }    
    }
}
var mace = {
    name: "Mace",
    damageDice: "1d6",
    damageType:"bludgeoning",
    type:"simpleMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }   
    }
}
var quarterstaff = {
    name: "Quarterstaff",
    damageDice: "1d6",
    damageType:"bludgeoning",
    type:"simpleMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }   
    }
}
var sickle = {
    name: "Sickle",
    damageDice: "1d4",
    damageType:"slashing",
    type:"simpleMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }   
    }
}
var spear = {
    name: "Spear",
    damageDice: "1d6",
    damageType:"piercing",
    type:"simpleMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }    
    }
}

//Simple Ranged
var lightCrossbow = {
    name: "Light crossbow",
    damageDice: "1d8",
    damageType: "piercing",
    type:"simpleRanged",
    finesse:false,
    range:"80/320",
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var lightCrossbow = {
    name: "Light crossbow",
    damageDice: "1d8",
    damageType: "piercing",
    type:"simpleRanged",
    finesse:false,
    range:"80/320",
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var shortbow = {
    name:"Shortbow",
    damageDice: "1d6",
    damageType: "piercing",
    type:"simpleRanged",
    finesse:false,
    range:"80/320",
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var sling = {
    name:"Sling",
    damageDice: "1d4",
    damageType:"bludgeoning",
    type:"simpleRanged",
    finesse:false,
    range:"30/120",
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

//Martial Melee

var battleAxe = {
    name:"Battleaxe",
    damageDice: "1d8",
    damageType:"slashing",
    type:"martialMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var flail = {
    name:"Flail",
    damageDice: "1d8",
    damageType:"bludgeoning",
    type:"martialMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var glaive = {
    name:"Glaive",
    damageDice: "1d10",
    damageType:"slashing",
    type:"martialMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var greatAxe = {
    name:"Greataxe",
    damageDice: "1d12",
    damageType:"slashing",
    type:"martialMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var greatSword = {
    name:"Greatsword",
    damageDice: "2d6",
    damageType:"slashing",
    type:"martialMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var halberd = {
    name:"Halberd",
    damageDice: "1d10",
    damageType:"slashing",
    type:"martialMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var lance = {
    name:"Lance",
    damageDice: "1d12",
    damageType:"piercing",
    type:"martialMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var longSword = {
    name:"Longsword",
    damageDice: "1d8",
    damageType:"slashing",
    type:"martialMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var maul = {
    name:"Maul",
    damageDice: "2d6",
    damageType:"bludgeoning",
    type:"martialMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var morningStar = {
    name:"Morningstar",
    damageDice: "1d8",
    damageType:"piercing",
    type:"martialMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var pike = {
    name:"Pike",
    damageDice: "1d10",
    damageType:"piercing",
    type:"martialMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var rapier = {
    name:"Rapier",
    damageDice: "1d8",
    damageType:"piercing",
    type:"martialMelee",
    finesse:true,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var scimitar = {
    name:"Scimitar",
    damageDice: "1d6",
    damageType:"slashing",
    type:"martialMelee",
    finesse:true,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var shortSword = {
    name:"Shortsword",
    damageDice: "1d6",
    damageType:"slashing",
    type:"martialMelee",
    finesse:true,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var trident = {
    name:"Trident",
    damageDice: "1d6",
    damageType:"piercing",
    type:"martialMelee",
    finesse:false,
    range:"20/60",
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }  
}

var warPick = {
    name:"War Pick",
    damageDice: "1d8",
    damageType:"piercing",
    type:"martialMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var warhammer = {
    name:"Warhammer",
    damageDice: "1d8",
    damageType:"bludgeoning",
    type:"martialMelee",
    finesse:false,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var whip = {
    name:"Whip",
    damageDice: "1d4",
    damageType:"slashing",
    type:"martialMelee",
    finesse:true,
    range:false,
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

//Ranged Martial Weapons

var blowgun = {
    name:"Blowgun",
    damageDice: "1",
    damageType:"piercing",
    type:"martialRanged",
    finesse:false,
    range:"25/100",
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var crossbowHand = {
    name:"Hand Crossbow",
    damageDice: "1d6",
    damageType:"piercing",
    type:"martialRanged",
    finesse:false,
    range:"30/120",
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var crossbowHeavy = {
    name:"Heavy Crossbow",
    damageDice: "1d10",
    damageType:"piercing",
    type:"martialRanged",
    finesse:false,
    range:"30/120",
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}

var longbow = {
    name:"Longbow",
    damageDice: "1d8",
    damageType:"piercing",
    type:"martialRanged",
    finesse:false,
    range:"150/600",
    damageBonus:"",
    attackBonus:"+",
    calculate: function(){
        player.weapons.push(this);
        if(player.DEX >= player.STR && this.finesse){
            this.attackBonus += player.mDEX + player.profBonus;
            this.damageBonus = player.mDEX;
        } else if (player.STR > player.DEX || !this.finesse){
            this.attackBonus += player.mSTR + player.profBonus;
            this.damageBonus = player.mSTR;
        }     
    }
}