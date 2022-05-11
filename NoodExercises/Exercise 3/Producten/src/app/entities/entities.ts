export class Brand
{
    public id:Number;
    public name:String;

    constructor()
    {
        this.id = 0;
        this.name = "";
    }
}

export class ProductGroup
{
    public id: Number;
    public name: String;
    public image?: String;

    constructor()
    {
        this.id = 0;
        this.name = "";
    }
}

export class Price
{
    public productID?: Number
    public basePrice?: Number
    public shopName?: String
}

export class Review
{
    public productID? : Number;
    public author?: String;
    public text?:String;
    public score?:Number
}
export class Specification
{
    public key?:String;
    public value?:String;
}
export class Product
{
    public id:Number;
    public brand:Brand;
    public name:String;
    public productGroup:ProductGroup;
    public score: Number;
    public image:String;   

    constructor()
    {
        this.id = 0;
        this.brand = new Brand();
        this.image = "";
        this.name = "";
        this.productGroup = new ProductGroup();
        this.score = 0;
    }
}