class ObjetoInterativo{
    constructor(id,typeInteract,name,data){
        this.id = id;
        this.typeInteract = typeInteract;
        this.name = name;
        this.data = data;
    }
    getId()
    {
        return this.id;
    }
    getTypeInteract()
    {
        return this.typeInteract;
    }
    getName()
    {
        return this.name;
    }
    getData()
    {
        return this.data;
    }
}