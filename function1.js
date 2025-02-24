let Person = {
    name : "Sourabh",
    id : 12,
    age : 22,
    marks : 92.34,
    display : function () {
    console.log("name: "+this.name+"\t Age: "+this.age+"\t id: "+this.id+"\t Marks: "+this.marks);
    }
   }
   // values are accessed using keys
   console.log(Person.name);
   console.log(Person.marks);
   Person.display();