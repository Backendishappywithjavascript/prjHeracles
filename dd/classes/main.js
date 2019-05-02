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
    constructor(id, background, parts, actualPart){
        this.background = background;
        this.id = id;
        this.parts = parts;
        this.numParts = parts.length;
        this.actualPart = 0;
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
    getActualPart()
    {
        return this.actualPart;
    }
    previousPart()
    {
        if((this.actualPart - 1) < 0)
        {
            this.actualPart -= 1;
        }
        else
        {
            
        }
    }
    nextPart()
    {
        if((this.actualPart + 1) < this.numParts)
        {
            this.actualPart += 1;
        }
        else
        {
            this.actualPart = 0;
        }
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