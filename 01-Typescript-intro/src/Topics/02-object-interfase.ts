



interface Character {
    name: string;
    hp: number;
    skills: string [];
    hometown?: string;
}
const Maximus:Character ={
    name: "Maximus",
    hp: 125,
    skills: ["Fireball", "Buffs"],
}

Maximus.hometown= "Maracaibo"

console.table(Maximus)




export{}