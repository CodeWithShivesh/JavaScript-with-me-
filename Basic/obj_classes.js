//Q.1 Define a class for users and in this class define 2 property and methods.

class users {
    name;
    email;

    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    printDetails(){
        console.log(`The name of user is ${this.name} and email is ${this.email}.`);
    }
}

let emp1 = new users('vikas','vikas123@MediaList.com');

//Q.2 Create new class admin which inherit from user. add method editDAta to Admin that allow to edit data.

class Admin extends users{

    editData(){
        this.name='Rajat';
        this.email='raja@mail.com';
    }
    // printDetails(){
    //     console.log(`The name of user is ${this.name} and email is ${this.email}.`);

    // };
}
let admin1 = new Admin();
admin1.editData();
admin1.printDetails();
