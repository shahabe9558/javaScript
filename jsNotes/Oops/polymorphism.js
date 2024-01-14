// polymorphism => poly means many morphism means tranformming one to another form same function name with
//  differnet signature
class A{
    statement()   
    {
        console.log("A block is fetched");
    }
}
class  B extends A{
    statement()
    {
        super.statement();
        console.log("B block is fetched");
    }
}
let obB = new B;
obB.statement();