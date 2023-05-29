class Card{
    constructor(name, type, cls, rarity, talent){
        this.name = name;
        this.type = type;
        this.cls = cls;
        this.rarity = rarity;
        this.talent = talent;
        const width = 63.5;
        const height = 88.9;

    }

}

class Action extends Card{
    constructor(pitch, cost, def){
        this.pitch = pitch;
        this.cost = cost;
        this.def = def;
    }

}

class Attack extends Action{
    constructor(pwr){
        this.pwr = pwr;
    }
}

class Item extends Action{
    
}

