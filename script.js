/*
EXCEPTIONS:
each skill is named [skillName] except for history, which is named skillHistory
all words meaning "level" are abbreviated as "lvl", except for player.level, which denotes the level of the character

*/
var pcName = document.getElementById("nameInput");
var pcRace = document.getElementById("pcRace");
var pcClass = document.getElementById("pcClass");
var pcBackground = document.getElementById("pcBackground");
var pcLevel = document.getElementById("pcLevel");
var pcAlignment = document.getElementById("pcAlignment");

var creator = document.getElementById("creator");
var sheet = document.getElementById("sheet");

//Spell lists
var cantrip1 = document.getElementById("cantrip1");
var cantrip2 = document.getElementById("cantrip2");
var cantrip3 = document.getElementById("cantrip3");
var cantrip4 = document.getElementById("cantrip4");

var cantrips = [cantrip1,cantrip2,cantrip3,cantrip4];

var lvl1Spell1 = document.getElementById("lvl1Spell1");
var lvl1Spell2 = document.getElementById("lvl1Spell2");
var lvl1Spell3 = document.getElementById("lvl1Spell3");
var lvl1Spell4 = document.getElementById("lvl1Spell4");
var lvl1Spell5 = document.getElementById("lvl1Spell5");
var lvl1Spell6 = document.getElementById("lvl1Spell6");

var lvl1Spells = [lvl1Spell1,lvl1Spell2,lvl1Spell3,lvl1Spell4,lvl1Spell5,lvl1Spell6];


var standardArray = [15,14,13,12,10,8];

var player = {
    name: "empty",
    class: "empty",
    race: "empty",
    background: "empty",
    level: 1,
    alignment: "empty",
    speed:30,
    spellcaster: false,

    //Spellcasting stats
    spellAbility:0,
    spellSaveDC:8 + this.spellAbility + this.profBonus,
    spellAtkBonus:this.spellAbility + this.profBonus,

    //Other abilites
    speed: 30,
    hp: 0,
    hitDice:0,
    ac:0,
    //Ability Scores
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
    //Ability score modifiers
    mSTR: 0,
    mDEX: 0,
    mCON: 0,
    mINT: 0,
    mWIS: 0,
    mCHA: 0,
    //Saving throws
    sSTR: this.mSTR,
    sDEX: this.mDEX,
    sCON: this.mCON,
    sINT: this.mINT,
    sWIS: this.mWIS,
    mCHA: this.mCHA,

    //Skills and proficiencies
    profBonus:2,
    profArmor:[],
    profWeapons:[],
    profSkills:[],

    //Inventory
    weapons:[],
    inventory:"",
    pp:0,
    gp:0,
    sp:0,
    cp:0,
    ep:0,

    //Spells
    cantrips:[],
    lvl1Spells:[],
};

var AS = [player.STR,player.CON,player.DEX,player.INT,player.WIS,player.CHA];
var mAS = [player.mSTR,player.mCON,player.mDEX,player.mINT,player.mWIS,player.mCHA];

//SKILLS
//0-16 ^

var acrobatics = {
    baseAbility: player.mDEX,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetAcrobatics"),
    tr: document.getElementById("trAcrobatics"),
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetAcrobatics").innerHTML += player.mDEX + player.profBonus;
            document.getElementById("trAcrobatics").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetAcrobatics").innerHTML = player.mDEX;
        }
    }
};
var animalHandling = {
    baseAbility: player.mWIS,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetAnimalHandling"),
    tr: document.getElementById("trAnimalHandling"),
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetAnimalHandling").innerHTML += player.mWIS + player.profBonus;
            document.getElementById("trAnimalHandling").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetAnimalHandling").innerHTML += player.mWIS;
        }
    }
};
var arcana = {
    baseAbility: player.mINT,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetArcana"),
    tr: document.getElementById("trArcana"),
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetArcana").innerHTML += player.mINT + player.profBonus;
            document.getElementById("trArcana").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetArcana").innerHTML += player.mINT;
        }
    }
};
var athletics = {
    baseAbility: player.mSTR,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetAthletics"),
    tr: document.getElementById("trAthletics"),
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetAthletics").innerHTML = player.mSTR + player.profBonus;
            document.getElementById("trAthletics").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetAthletics").innerHTML += player.mSTR;
        }
    }
};
var deception = {
    baseAbility: player.mCHA,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetDeception"),
    tr: document.getElementById("trDeception"),
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetDeception").innerHTML += player.mCHA + player.profBonus;
            document.getElementById("trDeception").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetDeception").innerHTML += player.mCHA;
        }
    }
};
var skillHistory = {
    baseAbility: player.mINT,
    proficiency: false,
    expertise: false,
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetHistory").innerHTML = player.mINT + player.profBonus;
            document.getElementById("trHistory").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetHistory").innerHTML = player.mINT;
        }
    }
};

var insight = {
    baseAbility: player.mWIS,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetInsight"),
    tr: document.getElementById("trInsight"),
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetInsight").innerHTML += player.mWIS + player.profBonus;
            document.getElementById("trInsight").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetInsight").innerHTML += player.mWIS;
        }
    }
};
var intimidation = {
    baseAbility: player.mCHA,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetIntimidation"),
    tr: document.getElementById("trIntimidation"),
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetIntimidation").innerHTML += player.mCHA + player.profBonus;
            document.getElementById("trIntimidation").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetIntimidation").innerHTML += player.mCHA;
        }
    }
};
var investigation = {
    baseAbility: player.mINT,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetInvestigation"),
    tr: document.getElementById("trInvestigation"),
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetInvestigation").innerHTML += player.mINT + player.profBonus;
            document.getElementById("trInvestigation").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetInvestigation").innerHTML += player.mINT;
        }
    }
};
var medicine = {
    baseAbility: player.mWIS,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetMedicine"),
    tr: document.getElementById("trMedicine"),
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetMedicine").innerHTML += player.mWIS + player.profBonus;
            document.getElementById("trMedicine").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetMedicine").innerHTML += player.mWIS;
        }
    }
};
var nature = {
    baseAbility: player.mINT,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetNature"),
    tr: document.getElementById("trNature"),
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetNature").innerHTML += player.mINT + player.profBonus;
            document.getElementById("trNature").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetNature").innerHTML += player.mINT;
        }
    }
};
var perception = {
    baseAbility: player.mWIS,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetPerception"),
    tr: document.getElementById("trPerception"),
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetPerception").innerHTML += player.mWIS + player.profBonus;
            document.getElementById("trPerception").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetPerception").innerHTML += player.mWIS;
        }
    }
};
var performance = {
    baseAbility: player.mCHA,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetPerformance"),
    tr: document.getElementById("trPerformance"),
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetPerformance").innerHTML += player.mCHA + player.profBonus;
            document.getElementById("trPerformance").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetPerformance").innerHTML += player.mCHA;
        }
    }
};
var persuasion = {
    baseAbility: player.mCHA,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetPersuasion"),
    tr: document.getElementById("trPersuasion"),
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetPersuasion").innerHTML += player.mCHA + player.profBonus;
            document.getElementById("trPersuasion").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetPersuasion").innerHTML += player.mCHA;
        }
    }
};
var religion = {
    baseAbility: player.mINT,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetReligion"),
    tr: document.getElementById("trReligion"),
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetReligion").innerHTML += player.mINT + player.profBonus;
            document.getElementById("trReligion").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetReligion").innerHTML += player.mINT;
        }
    }
};
var sleightOfHand = {
    baseAbility: player.mDEX,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetSleightOfHand"),
    tr: document.getElementById("trSleightOfHand"),
    calculate: function(){
        if(this.expertise){
            document.getElementById("sheetSleightOfHand").innerHTML += player.mDEX + player.profBonus + player.profBonus;
            document.getElementById("trSleightOfHand").style.fontWeight = "900";
        }
        else if(this.proficiency){
            document.getElementById("sheetSleightOfHand").innerHTML += player.mDEX + player.profBonus;
            document.getElementById("trSleightOfHand").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetSleightOfHand").innerHTML += player.mDEX;
        }
    }
};
var stealth = {
    baseAbility: player.mDEX,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetStealth"),
    tr: document.getElementById("trStealth"),
    calculate: function(){
        if(this.expertise){
            document.getElementById("sheetStealth").innerHTML += player.mDEX + player.profBonus + player.profBonus;
            document.getElementById("trStealth").style.fontWeight = "900";
        }else if(this.proficiency){
            document.getElementById("sheetStealth").innerHTML += player.mDEX + player.profBonus;
            document.getElementById("trStealth").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetStealth").innerHTML += player.mDEX;
        }
    }
};
var survival = {
    baseAbility: player.mWIS,
    proficiency: false,
    expertise: false,
    tdInt: document.getElementById("sheetSurvival"),
    tr: document.getElementById("trSurvival"),
    calculate: function(){
        if(this.proficiency){
            document.getElementById("sheetSurvival").innerHTML += player.mWIS + player.profBonus;
            document.getElementById("trSurvival").style.fontWeight = "900";
        } else if(!this.proficiency){
            document.getElementById("sheetSurvival").innerHTML += player.mWIS;
        }
    },
};

var skills = [acrobatics,animalHandling,arcana,athletics,deception,history,insight,intimidation,investigation,medicine,nature,perception,performance,persuasion,religion,sleightOfHand,stealth,survival];



//SUBMIT FUNCTIONS 

function submitClass(){
    if(player.class == "Fighter"){
        //Assign ability scores
        player.STR = standardArray[0];
        player.DEX = standardArray[2];
        player.CON = standardArray[1];
        player.INT = standardArray[3];
        player.WIS = standardArray[5];
        player.CHA = standardArray[4];
        //Give saving throw & equipment proficiencies
        player.sSTR += player.profBonus;
        player.sCON += player.profBonus;
        player.profWeapons.push(weapons[0],weapons[1]);
        //Give skill proficiencies
        player.profSkills.push(athletics);
        player.profSkills.push(perception);
        athletics.proficiency = true;
        perception.proficiency = true;
        //Give weapons & armor
        player.weapons.push(longSword);
        player.weapons.push(lightCrossbow);
        chainMail.calculate();
        shield.calculate();
        player.ac += 1;
        //Inventory
        player.inventory = "Backpack, crowbar, hammer, 10 pitons, 10 torches, tinderbox, 10 days of rations, waterskin, 50ft. of hempen rope"
        //Hit dice
        player.hitDice = 10;
    } else if (player.class == "Barbarian"){
        //Assign ability scores
        player.STR = standardArray[0];
        player.DEX = standardArray[3];
        player.CON = standardArray[1];
        player.INT = standardArray[4];
        player.WIS = standardArray[5];
        player.CHA = standardArray[2];
        //Give saving throw & equipmenet proficiencies
        player.sSTR += player.profBonus;
        player.sCON += player.profBonus;
        //Give skill proficiencies
        player.profSkills.push(intimidation);
        player.profSkills.push(athletics);
        athletics.proficiency = true;
        intimidation.proficiency = true;
        //Give weapons & armor
        player.weapons.push(greatAxe);
        player.weapons.push(javelin);
        player.ac = 10 + Math.floor((player.DEX-10)/2) + Math.floor((player.CON-10)/2);
        //Inventory
        player.inventory = "Backpack, bedroll, mess kit, tinderbox, 10 torches, 10 days of rations, waterskin, 50ft. of hempen rope"
        //Hit dice
        player.hitDice = 12;

    } else if (player.class == "Sorcerer"){
        player.spellcaster = true;
        //Assign ability scores
        player.STR = standardArray[2];
        player.DEX = standardArray[4];
        player.CON = standardArray[1];
        player.INT = standardArray[5];
        player.WIS = standardArray[3];
        player.CHA = standardArray[0];
        //Give saving throw & equipmenet proficiencies
        player.sCHA += player.profBonus;
        player.sCON += player.profBonus;
        //Give skill proficiencies
        player.profSkills.push(insight);
        player.profSkills.push(persuasion);
        insight.proficiency = true;
        persuasion.proficiency = true;
        //Give weapons
        player.weapons.push(dagger);
        player.weapons.push(lightCrossbow);
        //Inventory
        player.inventory = "A component pouch, backpack, crowbar, hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, a waterskin, 50ft. of hempen rope"
        //Hit dice
        player.hitDice = 6;
        //Give spells
        player.spellAbility = player.mCHA;
        $("#spellAbility").append("CHA");

        player.cantrips.push("Fire Bolt");
        player.cantrips.push("Dancing Lights");
        player.cantrips.push("Minor Illusion");
        player.cantrips.push("Message");

        player.lvl1Spells.push("Charm Person");
        player.lvl1Spells.push("Magic Missile");
    } else if(player.class == "Wizard"){
        player.spellcaster = true;
        //Assign ability scores
        player.STR = standardArray[2];
        player.DEX = standardArray[4];
        player.CON = standardArray[1];
        player.CHA = standardArray[5];
        player.WIS = standardArray[3];
        player.INT = standardArray[0];
        //Give saving throw & equipmenet proficiencies
        player.sINT += player.profBonus;
        player.sWIS += player.profBonus;
        //Give skill proficiencies
        player.profSkills.push(arcana);
        player.profSkills.push(investigation);
        investigation.proficiency = true;
        arcana.proficiency = true;
        //Give weapons
        player.weapons.push(quarterstaff);
        player.ac = Math.floor((player.DEX-10)/2) + 10;
        //Inventory
        player.inventory = "A wand, spellbook, book of lore, bottle of ink, backpack, ink pen, 10 sheets of parchment, little bag of sand, small knife"
        //Hit dice
        player.hitDice = 6;
        //Give spells
        player.spellAbility = player.mINT;
        $("#spellAbility").append("INT");

        player.cantrips.push("Ray of Frost");
        player.cantrips.push("Light");
        player.cantrips.push("Prestidigitation");

        player.lvl1Spells.push("Find Familiar");
        player.lvl1Spells.push("Magic Missile");
        player.lvl1Spells.push("Detect Magic");
        player.lvl1Spells.push("Alarm");
        player.lvl1Spells.push("Mage Armor");
        player.lvl1Spells.push("Thunderwave");


    }else if(player.class == "Bard"){
        player.spellcaster = true;
        //Assign ability scores
        player.STR = standardArray[5];
        player.DEX = standardArray[1];
        player.CON = standardArray[2];
        player.CHA = standardArray[0];
        player.WIS = standardArray[3];
        player.INT = standardArray[4];
        //Give saving throw & equipmenet proficiencies
        player.sDEX += player.profBonus;
        player.sCHA += player.profBonus;
        //Give skill proficiencies
        player.profSkills.push(persuasion);
        player.profSkills.push(stealth);
        player.profSkills.push(acrobatics);
        persuasion.proficiency = true;
        stealth.proficiency = true;
        acrobatics.proficiency = true;
        //Give weapons
        player.weapons.push(rapier);
        player.weapons.push(dagger);
        leather.calculate();
        //Inventory
        player.inventory = "Backpack, bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, a disguise kit, a lyre"
        //Hit dice
        player.hitDice = 8;
        //Give spells
        player.spellAbility = player.mCHA;
        $("#spellAbility").append("CHA");

        player.cantrips.push("Dancing Lights");
        player.cantrips.push("Vicious Mockery");

        player.lvl1Spells.push("Charm Person");
        player.lvl1Spells.push("Healing Word");
        player.lvl1Spells.push("Detect Magic");
        player.lvl1Spells.push("Thunderwave");

        $("#sheetClassAbility").html("Bardic inspiration: d6");
    }else if(player.class == "Cleric"){
        player.class = "Life Domain Cleric"
        player.spellcaster = true;
        //Assign ability scores
        player.STR = standardArray[1];
        player.DEX = standardArray[5];
        player.CON = standardArray[2];
        player.CHA = standardArray[4];
        player.WIS = standardArray[0];
        player.INT = standardArray[3];
        //Give saving throw & equipmenet proficiencies
        player.sWIS += player.profBonus;
        player.sCHA += player.profBonus;
        //Give skill proficiencies
        player.profSkills.push(medicine);
        player.profSkills.push(religion);
        religion.proficiency = true;
        medicine.proficiency = true;
        //Give weapons
        if(player.race === (hillDwarf || mountainDwarf)){
            player.weapons.push(warhammer);
        } else{
            player.weapons.push(mace);
        }
        player.weapons.push(lightCrossbow);
        chainMail.calculate();
        shield.calculate();

        //Inventory
        player.inventory = "A holy symbol of your deity, backpack, blanket, 10 candles, tinderbox, alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, a waterskin"
        //Hit dice
        player.hitDice = 8;
        //Give spells
        player.spellAbility = player.mWIS;
        $("#spellAbility").append("WIS");
    
        player.cantrips.push("Guidance");
        player.cantrips.push("Spare the Dying");
        player.cantrips.push("Sacred Flame")
    
        player.lvl1Spells.push("Cure Wounds");
        player.lvl1Spells.push("Healing Word");
        player.lvl1Spells.push("Bless");
        player.lvl1Spells.push("Guiding Bolt");
        player.lvl1Spells.push("Inflict Wounds");
        player.lvl1Spells.push("Shield of Faith");
    
        $("#sheetClassAbility").html("Disciple of Life: When you use a spell to restore health, the creature regains an additional 2 + the spell's level hitpoints.");
    }
    else if(player.class == "Druid"){
        player.spellcaster = true;
        //Assign ability scores
        player.STR = standardArray[5];
        player.DEX = standardArray[1];
        player.CON = standardArray[2];
        player.CHA = standardArray[4];
        player.WIS = standardArray[0];
        player.INT = standardArray[3];
        //Give saving throw & equipmenet proficiencies
        player.sWIS += player.profBonus;
        player.sINT += player.profBonus;
        //Give skill proficiencies
        player.profSkills.push(animalHandling);
        player.profSkills.push(nature);
        animalHandling.proficiency = true;
        nature.proficiency = true;
        //Give weapons
        player.weapons.push(scimitar);
        leather.calculate();
        shield.calculate();

        //Inventory
        player.inventory = "Druidic focus (a staff), backpack, bedroll, mess kit, tinderbox, 10 torches, 10 days of rations, waterskin, hempen rope (50ft.)"
        //Hit dice
        player.hitDice = 8;
        //Give spells
        player.spellAbility = player.mWIS;
        $("#spellAbility").append("WIS");
    
        player.cantrips.push("Druidcraft");
        player.cantrips.push("Thunderclap");
    
        player.lvl1Spells.push("Goodberry");
        player.lvl1Spells.push("Jump");
        player.lvl1Spells.push("Earth Tremor");
        player.lvl1Spells.push("Faerie Fire");
    
        $("#sheetClassAbility").html("Druidic: You can speak a language only fellow druids understand.");
    }else if(player.class == "Monk"){
        //Assign ability scores
        player.STR = standardArray[3];
        player.DEX = standardArray[0];
        player.CON = standardArray[2];
        player.INT = standardArray[4];
        player.WIS = standardArray[1];
        player.CHA = standardArray[5];
        //Give saving throw & equipment proficiencies
        player.sSTR += player.profBonus;
        player.sDEX += player.profBonus;
        //Give skill proficiencies
        player.profSkills.push(acrobatics);
        player.profSkills.push(insight);
        acrobatics.proficiency = true;
        insight.proficiency = true;
        //Give weapons & armor
        player.weapons.push(shortSword);
        player.weapons.push(dart);
        player.ac = 10 + Math.floor((player.WIS-10)/2) + Math.floor((player.DEX-10)/2);
        //Inventory
        player.inventory = "Backpack, bedroll, mess kit, tinderbox, 10 torches, 10 days of rations, waterskin, hempen rope (50ft.)"
        //Hit dice
        player.hitDice = 8;
    }
    else if(player.class == "Paladin"){
        //Assign ability scores
        player.STR = standardArray[0];
        player.DEX = standardArray[5];
        player.CON = standardArray[2];
        player.INT = standardArray[4];
        player.WIS = standardArray[3];
        player.CHA = standardArray[1];
        //Give saving throw & equipment proficiencies
        player.sWIS += player.profBonus;
        player.sCHA += player.profBonus;
        //Give skill proficiencies
        player.profSkills.push(religion);
        player.profSkills.push(persuasion);
        religion.proficiency = true;
        persuasion.proficiency = true;
        //Give weapons & armor
        player.weapons.push(longSword);
        player.weapons.push(javelin);
        chainMail.calculate();
        shield.calculate();
        //Inventory
        player.inventory = "Holy symbol, backpack, blanket, 10 candles, tinderbox, alms box, 2 blocks of incense, censer, vestments, 2 days of rations, waterskin"
        //Hit dice
        player.hitDice = 10;
        $("#sheetClassAbility").html("Lay on Hands: Your blessed touch can heal wounds. You have a pool of healing that replenishes every long rest, you may heal 5 x your paladin level hit points by touch.")
    }
    else if(player.class == "Ranger"){
        player.spellcaster = false;
        //Assign ability scores
        player.STR = standardArray[3];
        player.DEX = standardArray[0];
        player.CON = standardArray[2];
        player.INT = standardArray[5];
        player.WIS = standardArray[1];
        player.CHA = standardArray[4];
        //Give saving throw & equipment proficiencies
        player.sSTR += player.profBonus;
        player.sDEX += player.profBonus;
        //Give skill proficiencies
        player.profSkills.push(survival);
        player.profSkills.push(nature);
        player.profSkills.push(stealth);
        nature.proficiency = true;
        survival.proficiency = true;
        stealth.proficiency = true;
        //Give weapons & armor
        player.weapons.push(longbow);
        player.weapons.push(shortSword);
        leather.calculate();
        //Inventory
        player.inventory = "Backpack, quiver with 20 arrows, crowbar, hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, waterskin, hempen rope (50ft.)"
        //Hit dice
        player.hitDice = 10;
        $("#sheetClassAbility").html("Natural Explorer & Favoured Enemey: You have advantage on tracking one kind of enemy, and are familiar with one type of environment, making it easier to traverse it.")
    }
    else if(player.class == "Rogue"){
        player.spellcaster = false;
        //Assign ability scores
        player.STR = standardArray[5];
        player.DEX = standardArray[0];
        player.CON = standardArray[3];
        player.INT = standardArray[2];
        player.WIS = standardArray[4];
        player.CHA = standardArray[1];
        //Give saving throw & equipment proficiencies
        player.sINT += player.profBonus;
        player.sDEX += player.profBonus;
        //Give skill proficiencies
        player.profSkills.push(stealth);
        player.profSkills.push(sleightOfHand);
        player.profSkills.push(deception);
        player.profSkills.push(investigation);
        stealth.proficiency = true;
        sleightOfHand.proficiency = true;
        deception.proficiency = true;
        investigation.proficiency = true;
        stealth.expertise = true;
        sleightOfHand.expertise = true;
        //Give weapons & armor
        player.weapons.push(rapier);
        player.weapons.push(shortbow);
        leather.calculate();
        //Inventory
        player.inventory = "Thieves' tools, 2 daggers, quiver with 20 arrows"
        //Hit dice
        player.hitDice = 10;
        $("#sheetClassAbility").html("Sneak attack: You know how to strike subtly to exploit a foe's distraction. Once per turn you can deal an extra 1d6 damage to one creature you hit with an attack, if you have advantage on the attack roll.")
    }
    else if(player.class == "Warlock"){
        player.class = "Fiend Warlock"
        player.spellcaster = true;
        //Assign ability scores
        player.STR = standardArray[5];
        player.DEX = standardArray[2];
        player.CON = standardArray[1];
        player.CHA = standardArray[0];
        player.WIS = standardArray[4];
        player.INT = standardArray[3];
        //Give saving throw & equipmenet proficiencies
        player.sWIS += player.profBonus;
        player.sCHA += player.profBonus;
        //Give skill proficiencies
        player.profSkills.push(arcana);
        player.profSkills.push(deception);
        arcana.proficiency = true;
        deception.proficiency = true;
        //Give weapons
        player.weapons.push(lightCrossbow);
        leather.calculate();

        //Inventory
        player.inventory = "A component pouch, 20 crossbow bolts, backpack, crowbar, hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, a waterskin, hempen rope (50ft.)"
        //Hit dice
        player.hitDice = 8;
        //Give spells

        $("#lvl1SpellSlots").html("Slots: 1")
        player.spellAbility = Math.floor((player.CHA-10)/2);
        $("#spellAbility").append("CHA");
    
        player.cantrips.push("Eldritch Blast");
        player.cantrips.push("Chill Touch");
    
        player.lvl1Spells.push("Witch Bolt");
        player.lvl1Spells.push("Charm Person");
    
        $("#sheetClassAbility").html("Dark One's Blessing: When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1).");
    }
    if(player.spellcaster){
        $("#sheetSpells").show();
    }
    console.log("submitClass() end");
}


function submitRace(){
    if(player.race == "Human"){
        player.race = human;
    } else if (player.race == "hillDwarf"){
        player.race = hillDwarf;
    } else if (player.race == "highElf"){
        player.race = highElf;
    } else if (player.race == "lightfootHalfling"){
        player.race = lightfootHalfling;
    } else if (player.race == "dragonborn"){
        player.race = dragonborn;
    } else if (player.race == "rockGnome"){
        player.race = rockGnome;
    } else if (player.race == "halfElf"){
        player.race = halfElf;
    } else if (player.race == "halfOrc"){
        player.race = halfOrc;
    } else if (player.race == "tiefling"){
        player.race = tiefling;
    }
    player.race.as();
};

function submitBackground(){
    if(player.background === "Acolyte"){
        player.background = acolyte;
        acolyte.calculate();
    } else if(player.background === "Criminal"){
        player.background = criminal;
        criminal.calculate();
    } else if(player.background === "Spy"){
        player.background = spy;
        spy.calculate();
    } else if(player.background === "Entertainer"){
        player.background = entertainer;
        entertainer.calculate();
    } else if(player.background === "FolkHero"){
        player.background = folkHero;
        folkHero.calculate();
    } else if(player.background === "GuildArtisan"){
        player.background = guildArtisan;
        guildArtisan.calculate();
    } else if(player.background === "Hermit"){
        player.background = hermit;
        hermit.calculate();
    } else if(player.background === "Noble"){
        player.background = noble;
        noble.calculate();
    } else if(player.background === "Outlander"){
        player.background = outlander;
        outlander.calculate();
    } else if(player.background === "Sage"){
        player.background = sage;
        sage.calculate();
    } else if(player.background === "Sailor"){
        player.background = sailor;
        sailor.calculate();
    } else if(player.background === "Soldier"){
        player.background = soldier;
        soldier.calculate();
    } else if(player.background === "Urchin"){
        player.background = urchin;
        urchin.calculate();
    } 
}

function writeSheet(){
    //ability scores
    $("#sheetSTR").append(player.STR);
    $("#sheetDEX").append(player.DEX);
    $("#sheetCON").append(player.CON);
    $("#sheetINT").append(player.INT);
    $("#sheetWIS").append(player.WIS);
    $("#sheetCHA").append(player.CHA);

    //race class level
    $("#sheetRaceClass").html(player.race.title + " " + player.class + " " + player.level);
    $("#sheetBackground").append(player.background.displayName);

    player.mSTR = Math.floor((player.STR-10)/2);
    player.mDEX = Math.floor((player.DEX-10)/2);
    player.mCON = Math.floor((player.CON-10)/2);
    player.mWIS = Math.floor((player.WIS-10)/2);
    player.mINT = Math.floor((player.INT-10)/2);
    player.mCHA = Math.floor((player.CHA-10)/2);

    player.hp = player.hitDice + player.mCON;

    $("#sheetHP").append(player.hp);

    $("#sheetmSTR").append(player.mSTR);
    $("#sheetmDEX").append(player.mDEX);
    $("#sheetmCON").append(player.mCON);
    $("#sheetmINT").append(player.mINT);
    $("#sheetmWIS").append(player.mWIS);
    $("#sheetmCHA").append(player.mCHA);

    $("#sheetAC").append(player.ac);
    $("#sheetSpeed").append(player.speed + "ft.")

    $("#inventory").append(player.inventory);
};

function writeValues(){
    player.name = $('#nameInput').val();
    player.class = $('#pcClass :selected').val();
    player.race = $('#pcRace :selected').val();
    player.background = $('#pcBackground :selected').val();
    player.alignment = $('#pcAlignment :selected').html();

    console.log("Class: "+player.class);
    console.log("Race: "+player.race);
    console.log("Background: "+player.background);
    console.log("Level: "+player.level);
    console.log("Alignment: "+player.alignment);
    console.log("Name: "+player.name);
    $("#sheetName").append(player.name);

    
};

function writeSkills(){
    acrobatics.calculate();
    animalHandling.calculate();
    arcana.calculate();
    athletics.calculate();
    deception.calculate();
    skillHistory.calculate();
    insight.calculate();
    intimidation.calculate();
    investigation.calculate();
    medicine.calculate();
    nature.calculate();
    perception.calculate();
    performance.calculate();
    persuasion.calculate();
    religion.calculate();
    sleightOfHand.calculate();
    stealth.calculate();
    survival.calculate();
}

function writeWeapons(){
    player.weapons[0].calculate();
    player.weapons[1].calculate();
}

function writeSpells(){
    if(player.class == "Sorcerer" || player.class == "Bard" || player.class == "Fiend Warlock" || player.class == "Paladin"){
        player.spellAbility = player.mCHA;
    } else if(player.class == "Wizard"){
        player.spellAbility = player.mINT;
    } else if(player.class == "Life Domain Cleric" || "Cleric" || "Druid"){
        player.spellAbility = player.mWIS;
    }
    player.spellSaveDC = 8 + player.spellAbility + player.profBonus;
    player.spellAtkBonus = player.spellAbility + player.profBonus;
    console.log(player.spellSaveDC);
    $("#spellAtkBonus").append(player.spellAtkBonus);
    $("#spellSaveDC").append(player.spellSaveDC);

    for(var i = 0; i < player.cantrips.length; i++){
        cantrips[i].innerHTML = player.cantrips[i];
    }
    for(var i = 0; i < player.lvl1Spells.length; i++){
        lvl1Spells[i].innerHTML = player.lvl1Spells[i];
    }
}


function submit(){
    $("#creator").hide();
    $("#sheet").show();
    writeValues();
    submitClass();
    submitRace();
    submitBackground();
    writeSheet();
    writeSkills();
    writeWeapons();
    writeSpells();

    $("#sheetAlignment").append(player.alignment)

    $("#weaponName1").html(player.weapons[0].name);
    $("#weaponBonus1").html(player.weapons[0].attackBonus);
    $("#weaponDamage1").html(player.weapons[0].damageDice + " + " + player.weapons[0].damageBonus + " " + player.weapons[0].damageType);

    $("#weaponName2").html(player.weapons[1].name);
    $("#weaponBonus2").html(player.weapons[1].attackBonus);
    $("#weaponDamage2").html(player.weapons[1].damageDice + " + " + player.weapons[1].damageBonus + " " + player.weapons[1].damageType);
}

function creatorAbout(){
    $("#creator").hide();
    $("#about").show();
}
function aboutCreator(){
    $("#creator").show();
    $("#about").hide();
}