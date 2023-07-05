const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const createUser = () => {
  const newUser = {
    password : faker.internet.password(),
    email :  faker.internet.email(),
    phone: faker.phone.number(),
    lastName : faker.person.lastName(),
    firstName : faker.person.firstName(),
    _id : faker.string.uuid(),
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    _id : faker.string.uuid(),
    name : faker.company.name(),
    address : {
      street : faker.location.street(),
      city : faker.location.city(),
      state : faker.location.state(),
      zipCode : faker.location.zipCode(),
      country : faker.location.country()
    },
  };
  return newCompany;
}

app.get("/api/users/new", (req, res) => {
  // const newUser = createUser();
  console.log(createUser())
  res.json({ status: 'okay' });

});

app.get('/api/company/new',(req, res) => {
  console.log(createCompany())
  res.json({status : "okay"})

})

app.get('/api/user/company', (req, res) => {
  console.log(createCompany())
  console.log(createUser());
  res.json({status : "created"})


})

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
