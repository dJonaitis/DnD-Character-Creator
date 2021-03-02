var human = {
    title: "Human",
    darkvision: false,

    as(){
        player.STR += 1;
        player.DEX += 1;
        player.CON += 1;
        player.INT += 1;
        player.WIS += 1;
        player.CHA += 1; 
    }
}

var hillDwarf = {
    title: "Hill Dwarf",
    darkvision: true,

    as(){
        player.CON += 2;
        player.WIS += 1;
        player.hp += player.level;
    }
}

var mountainDwarf = {
    title: "Mountain Dwarf",
    darkvision: true,

    as(){
        player.CON += 2;
        player.STR += 2;
        var randomAS = Math.floor(Math.random()*4);
        if(randomAS === 0){
            player.DEX += 2;
        } else if (randomAS == 1){
            player.WIS += 2;
        } else if (randomAS == 2){
            player.CHA += 2;
        } else if (randomAS == 3){
            player.INT += 2;
        }
    }
}

var woodElf = {
    title: "Wood Elf",
    darkvision: true,


    as(){
        player.DEX += 2;
        player.WIS += 1;
        player.profSkills.push(perception);
        perception.proficiency = true;
        player.speed += 5;
    }
}

var highElf = {
    title: "High Elf",
    darkvision: true,

    as(){
        player.DEX += 2;
        player.INT += 1;
        player.cantrips.push("True Strike");
    }
}

var lightfootHalfling = {
    title: "Lightfoot Halfling",
    darkvision: false,

    as(){
        player.DEX += 2;
        player.CHA += 1;
        player.speed -= 5;
    }
}

var dragonborn = {
    title: "Dragonborn",
    darkvision: false,

    as(){
        player.STR += 2;
        player.CHA += 1;
    }
}

var rockGnome = {
    title: "Rock Gnome",
    darkvision: true,

    as(){
        player.INT += 2;
        player.CON += 1;
        player.speed -= 5;
    }
}

var halfElf = {
    title: "Half-Elf",
    darkvision: true,

    as(){
        player.CHA += 2;
        player.DEX += 1;
        player.CON += 1;
    }
}

var halfOrc = {
    title: "Half-Orc",
    darkvision: true,

    as(){
        player.STR += 2;
        player.CON += 1;
    }
}

var tiefling = {
    title: "Tiefling",
    darkvision: true,

    as(){
        player.INT += 1;
        player.CHA += 2;
    }
}