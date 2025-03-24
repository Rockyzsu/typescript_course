abstract class Animal{
  abstract name:string;
  abstract makeSound():void;
  move(){
    console.log('i am moving')
    }
  }


  class Cat extends Animal{
    name:string="Xiaoma"

    makeSound():void{
      console.log('miao miao')
      }
    }


const cat = new Cat()
cat.makeSound()
