export default class UserData{

    constructor(){
        this.newUser = new NewUser(
            'male',
            'Tamara',
            'Vasilevska',
            '4',
            '4',
            '1994',
            'tamara.vasilevska@testdevlab.com',
            'BestCompany',
            'BestPaswordEver44!'
        )
    }
}

class NewUser{
    constructor(gender, firstName, lastName, birthDay, birthMonth, birthYear, email, company, password){
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.birthMonth = birthMonth;
        this.birthYear = birthYear;
        this.email = email;
        this.company = company;
        this.password = password;
    }
}