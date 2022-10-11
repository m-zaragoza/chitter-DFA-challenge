import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';
import Peep from '../models/peep.model.js';
import User from '../models/user.model.js';
import mockPeeps from '../mockData/mockPeeps.js';
import mockUsers from '../mockData/mockUsers.js';
import { describe } from 'mocha';
import { goodPeep, badPeep, badCharPeep, goodUser, shortName, badCharName, badCharUserName, badUserName, badEmail, badPassword, goodLogin, badLoginEmail, badLoginPassword, badCharEmail } from './mockInputs.js';

chai.use(chaiHttp);

describe(`Server tests with peeps collection`, () => {

    beforeEach(async () => {
        await Peep.deleteMany()
            .then(() => console.log(`Peeps collection cleared`))
            .catch(err => {
                console.log(`Unable to clear peeps`);
                throw new Error();
            });

        await Peep.insertMany(mockPeeps)
            .then(() => console.log(`Collection populated with mock peeps`))
            .catch(err => {
                console.log(`Unable to insert peeps`);
                throw new Error();
            });
    });

    describe(`index route tests`, () => {

        it(`should return all the mock peeps`, async () => {
            const res = await chai.request(server)
                .get(`/`)

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an(`array`);
            expect(res.body.length).to.be.equal(mockPeeps.length);
        });

        it(`should return the data in reversed order`, async () => {
            const res = await chai.request(server)
                .get(`/`)

            expect(res.body[0].peeperName).to.be.equal(`James`);
            expect(res.body[1].peeperName).to.be.equal(`Remus`);
            expect(res.body[2].peeperName).to.be.equal(`Peter`);
            expect(res.body[3].peeperName).to.be.equal(`Sirius`);
        });
    });

    describe(`post route tests`, () => {

        it(`should have status 201 when the peep is added successfully`, async () => {
            const res = await chai.request(server)
                .post(`/post`)
                .send(goodPeep);

            expect(res).to.have.status(201);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`message`, `Peep added successfully`);
        });

        it(`should have status 422 when the peep doesn't meet requirements`, async () => {
            const res = await chai.request(server)
                .post(`/post`)
                .send(badPeep);

            expect(res).to.have.status(422);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`message`, `Failed to post peep`);
        });

        it(`should have status 422 when the peep includes characters that are not allowed`, async () => {
            const res = await chai.request(server)
                .post(`/post`)
                .send(badCharPeep);

            expect(res).to.have.status(422);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`message`, `Errors in peep input`);
        });
    });
});

describe(`Server tests with users collection`, () => {

    beforeEach(async () => {
        await User.deleteMany()
            .then(() => console.log(`Users collection cleared`))
            .catch(err => {
                console.log(`Unable to clear users`);
                throw new Error();
            });

        await User.insertMany(mockUsers)
            .then(() => console.log(`Collection populated with mock users`))
            .catch(err => {
                console.log(`Unable to insert users`);
                throw new Error();
            });
    });

    describe(`register route tests`, () => {

        it(`should have status 201 when user is registered successfully`, async () => {
            const res = await chai.request(server)
                .post(`/register`)
                .send(goodUser);

            expect(res).to.have.status(201);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`message`, `User registered successfully`);
        });

        it(`should alert when the email already exists`, async () => {
            const res = await chai.request(server)
                .post(`/register`)
                .send(badEmail);

            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`message`, `Looks like this email is already registered!`);
        });

        it(`should not register the user if the email already exists`, async () => {
            const res = await chai.request(server)
                .post(`/register`)
                .send(badEmail)

            expect(res).to.not.have.status(201);
        });

        it(`should not register when the user name is already in use`, async () => {
            const res = await chai.request(server)
                .post(`/register`)
                .send(badUserName);

            expect(res).to.not.have.status(201);
        });

        it(`should have status 422 when the password doesn't meet the requirements`, async () => {
            const res = await chai.request(server)
                .post(`/register`)
                .send(badPassword);

            expect(res).to.have.status(422);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`message`, `Errors in input data`);
        });

        it(`should have status 422 when the name is too short`, async () => {
            const res = await chai.request(server)
                .post(`/register`)
                .send(shortName);

            expect(res).to.have.status(422);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`message`, `Errors in input data`);
        });

        it(`should have status 422 when the name includes anything other than letters`, async () => {
            const res = await chai.request(server)
                .post(`/register`)
                .send(badCharName);

            expect(res).to.have.status(422);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`message`, `Errors in input data`);
        });

        it(`should have status 422 when the user name is not alphanumeric`, async () => {
            const res = await chai.request(server)
                .post(`/register`)
                .send(badCharUserName);

            expect(res).to.have.status(422);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`message`, `Errors in input data`);
        });
    });

    describe(`login route tests`, () => {

        it(`should have status 200 when the user logs in`, async () => {

            const res = await chai.request(server)
                .post(`/login`)
                .send(goodLogin);

            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`message`, `Welcome back!`);
        });

        it(`should alert when the email is not registered`, async () => {
            const res = await chai.request(server)
                .post(`/login`)
                .send(badLoginEmail);

            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`message`, `Oops, details not found`);
        });

        it(`should alert when the password is not correct`, async () => {
            const res = await chai.request(server)
                .post(`/login`)
                .send(badLoginPassword);

            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`message`, `Oops, details not found`);
        });

        it(`should have status 422 when the email includes characters that are not allowed`, async () => {
            const res = await chai.request(server)
                .post(`/login`)
                .send(badCharEmail);

            expect(res).to.have.status(422);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`message`, `Errors in input data`);
        });
    });
});
