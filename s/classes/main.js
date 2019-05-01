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
class DialogoInterativo{
    constructor(id, background, parts){
        this.background = background;
        this.id = id;
        this.parts = parts;
    }
    getBackground()
    {
        return this.background;
    }
    getId()
    {
        return this.id;
    }
    getParts()
    {
        return this.parts;
    }
}
class DialogoParte{
    constructor(text, extra){
        this.text = text;
        this.extra = extra;
    }
    getText()
    {
        return this.text;
    }
    getExtra()
    {
        return this.extra
    }
}