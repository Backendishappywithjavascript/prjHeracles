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
        this.numParts = parts.length;
        this.actualPart = 0;
        this.lastPart = parts.length - 1;
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
    getLastPart()
    {
        return this.lastPart;
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
        this.actualPart += 1;
        if(this.lastPart < this.actualPart)
        {
            this.actualPart = 0;
            return true;
        }
        else
        {
            return false;
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