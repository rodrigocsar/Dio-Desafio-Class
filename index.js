class hero {
    constructor(name, age, type, attack){
       this.nameHero = name
       this.ageHero = age
       this.typeHero= type
       this.attackHero = attack
    }

    atacar() {
        let ataque = "";
    
        switch (this.typeHero) {
          case "mago":
            ataque = "magia";
            break;
          case "guerreiro":
            ataque = "espada";
            break;
          case "monge":
            ataque = "artes marciais";
            break;
          case "ninja":
            ataque = "shuriken";
            break;
          default:
            ataque = "um ataque desconhecido";
        }

        console.log(`O ${this.typeHero} atacou usando ${ataque}`);
    }
}


let atackAction = new hero("", "", "monge", "")

atackAction.atacar()