function logger(target,name,description)
{

console.log(target);
console.log(name);
console.log(description);
return description;
}


class Animal{
name:string='monkey';
walk(){
    console.log(this.name+'is walking');
}
}
const an=new Animal();
an.walk();