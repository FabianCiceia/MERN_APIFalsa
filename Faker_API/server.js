const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
// req is short for request
// res is short for response
app.get("/api",(req, res) => {
    res.json(jsonData);
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);


const jsonData = {
    nombres: ['Juan', 'María', 'Pedro']
};



class  Usuario {
    constructor(){
        this._id = faker.string.uuid();
        this.username = faker.internet.userName();
        this.email = faker.internet.email();
        this.avatar = faker.image.avatar();
        this.password = faker.internet.password();
        this.birthdate = faker.date.birthdate();
    }
}

class Empresa{
    constructor(){
        this._id = faker.string.uuid();
        this.name = faker.company.name();
        this.address = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}




app.get("/api/user/user/new", (req, res) => {
    res.json(  new Empresa() );
});



app.get("/api/user/companies/new", (req, res) => {
    res.json(  new Usuario()  );
});

app.get("/api/user/company", (req, res) => {
    const user =   new Usuario();
    const company = new Empresa();
    res.json({user, company});
});
