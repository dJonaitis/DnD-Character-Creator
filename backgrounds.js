var acolyte = {
    displayName:"Acolyte",
    calculate: function(){
        player.profSkills.push(insight);
        player.profSkills.push(religion);
        insight.proficiency = true;
        religion.proficiency = true;
        player.inventory += ", a holy symbol of your god, prayer book, 5 sticks of incense, vestments, common clothes";
        player.gp += 15;
    }
}
var charlatan = {
    displayName:"Charlatan",
    calculate: function(){
        player.profSkills.push(deception);
        player.profSkills.push(sleightOfHand);
        sleightOfHand.proficiency = true;
        deception.proficiency = true;
        player.inventory += ", fine clothes, a disguise kit, a set of weighted dice";
        player.gp += 15;
    }
}
var criminal = {
    displayName:"Criminal",
    calculate: function(){
        player.profSkills.push(deception);
        player.profSkills.push(stealth);
        deception.proficiency = true;
        stealth.proficiency = true;
        player.inventory += ", crowbar, dark common clothes";
        player.gp += 15;
        //thieves' tools proficiency, playing cards proficiencyy
    }
}
var spy = {
    displayName:"Spy",
    calculate: function(){
        player.profSkills.push(deception);
        player.profSkills.push(stealth);
        deception.proficiency = true;
        stealth.proficiency = true;
        player.inventory += ", crowbar, dark common clothes";
        player.gp += 15;
        //thieves' tools proficiency, playing cards proficiencyy
    }
}
var entertainer = {
    displayName:"Entertainer",
    calculate: function(){
        player.profSkills.push(performance);
        player.profSkills.push(acrobatics);
        performance.proficiency = true;
        acrobatics.proficiency = true;
        player.inventory += ", a lute, a love letter from an admirer, costume clothes";
        player.gp += 15;
    }
}
var folkHero = {
    displayName:"Folk Hero",
    calculate: function(){
        player.profSkills.push(animalHandling);
        player.profSkills.push(survival);
        animalHandling.proficiency = true;
        survival.proficiency = true;
        player.inventory += ", cook's utensils, a shovel, an iron pot, a set of common clothes";
        player.gp += 10;
    }
}
var guildArtisan = {
    displayName:"Guild Artisan",
    calculate: function(){
        player.profSkills.push(insight);
        player.profSkills.push(persuasion);
        insight.proficiency = true;
        persuasion.proficiency = true;
        player.inventory += ", brewer's supplies, a letter from your guild, traveler's clothes";
        player.gp += 15;
    }
}
var hermit = {
    displayName:"Hermit",
    calculate: function(){
        player.profSkills.push(medicine);
        player.profSkills.push(religion);
        medicine.proficiency = true;
        religion.proficiency = true;
        player.inventory += ", a scroll case stuffed with notes from your studies and prayers, a winter blanket, common clothes";
        player.gp += 5;
    }
}
var noble = {
    displayName:"Noble",
    calculate: function(){
        player.profSkills.push(history);
        player.profSkills.push(persuasion);
        history.proficiency = true;
        persuasion.proficiency = true;
        player.inventory += ", fine clothes, a signet ring, a scroll of pedigree";
        player.gp += 25;
    }
}
var outlander = {
    displayName:"Outlander",
    calculate: function(){
        player.profSkills.push(athletics);
        player.profSkills.push(survival);
        athletics.proficiency = true;
        survival.proficiency = true;
        player.inventory += ", a staff, hunting trap, a trophy from an animal you killed, traveler's clothes";
        player.gp += 10;
    }
}
var sage = {
    displayName:"Sage",
    calculate: function(){
        player.profSkills.push(arcana);
        player.profSkills.push(skillHistory);
        arcana.proficiency = true;
        skillHistory.proficiency = true;
        player.inventory += ", bottle of black ink, quill, small knife, a letter from a dead colleague posing a question you have not yet been able to answer, common clothes";
        player.gp += 10;
    }
}
var sailor = {
    displayName:"Sailor",
    calculate: function(){
        player.profSkills.push(athletics);
        player.profSkills.push(perception);
        athletics.proficiency = true;
        perception.proficiency = true;
        player.inventory += ", a club, silk rope (50 feet), rabbit's foot, common clothes";
        player.gp += 10;
    }
}
var soldier = {
    displayName:"Soldier",
    calculate: function(){
        player.profSkills.push(athletics);
        player.profSkills.push(intimidation);
        athletics.proficiency = true;
        intimidation.proficiency = true;
        player.inventory += ", an insignia of rank, a broken blade taken from a fallen enemy, set of playing cards, common clothes";
        player.gp += 10;
    }
}
var urchin = {
    displayName:"Urchin",
    calculate: function(){
        player.profSkills.push(sleightOfHand);
        player.profSkills.push(stealth);
        sleightOfHand.proficiency = true;
        stealth.proficiency = true;
        player.inventory += ", small knife, map of your home town, a token to remember your parents by, common clothes";
        player.gp += 10;
    }
}