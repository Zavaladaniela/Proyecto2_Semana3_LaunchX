class spiderman{
    constructor(name,age,actor,movies,studio){
        this.name =name
        this.age =age
        this.actor =actor
        this.movies =movies
        this.studio =studio
    }

    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
        return `Hey,I'm ${this.name} from ${this.studio} studio`
    }
}

module.exports = spiderman