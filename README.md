Chitter Challenge
=================
## About the project
This is my first full stack application!\
The goal of this project is to create a small Twitter clone that will allow users to post messages to a public wall.\
I applied Thinking in React and TDD methodologies to approach this challenge. I also created a Kanban Board to keep track of my progress. 
</br></br>

## Built with
Front-end: React. Bootstrap and CSS for styling.\
Back-end: NodeJS.\
Database: MongoDB.
</br></br>

## Getting started
To run this project, you need to have MongoDB installed in your machine. 
- Clone this repo to your local machine, then follow these steps:

1- Open package.json from the front end folder in your terminal and run `npm i`.

2- Repeat the previous step on the back end .json file.

3- Connect to MongoDB, either through the VSCode extension or by running `mongosh` on the terminal. 

4- To create the database, open the file dbFile/peeps.json on your terminal and run the following command: 
```
mongoimport --db peeps --collection peeps --file peeps.json peeps.json
``` 
5- Now create a users collection by opening dbFile/users.json on your terminal and running:
```
mongoimport --db peeps --collection users --file users.json users.json
``` 
6- To create a test database, repeat steps 4 and 5, but replace `--db peeps` with `--db test-peeps`.

7- Open backend/package.json on your terminal and run `npm start`.

8- Open frontend/package.json on a separate terminal and run `npm start`.

9- The project is ready to explore on your browser.  

If you wish to run the tests you need to run the following command on both front-end and back-end terminals:
```
npm test
```
</br>

## Problem statement
### Acceptance Criteria
```
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made

As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```

### Additional requirements:

* You don't have to be logged in to see the peeps.
* Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewithers@digitalfutures.com, password123, Edward Withers, dearshrewdwit).
* The username and email are unique.
* Peeps (posts to chitter) have the name of the trainee and their user handle.

#### App architecture
![App architecture](/images/architecture.jpeg)\
Drawing this helped me understand the different layers my app should have, and also to complete all the layers in one section before moving to the next.

#### Component tree
![Component tree](/images/tree.jpeg)

#### Component hierarchy
![All peeps component](/images/allPeeps.jpeg)
```
Pink: header (same for every component)
Green: footer (same for every component)
Red: all peeps component
Yellow: each peep card
```
![Post peep component](/images/postPeep.jpeg)
```
Orange: posting peep form component
```
![Register component](/images/register.jpeg)
```
Gray: Register form component
```
![Log in component](/images/loggin.jpeg)
```
Blue: Log in form component
```
</br>

## Review
Building this full stack application, piece by piece, understanding how they work together and seeing a functional end result is one of the most satisfying moment of my career so far.\
Compared to the previous React project, I got much further with testing. 
Same with back-end testing.\
If I were to keep working on ths project, I would build a secure login system. I would also add an edit/delete functionality to the posted peeps and I would deploy the project.
