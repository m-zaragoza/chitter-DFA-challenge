Chitter Challenge
=================

### Initial setup
-------

To install and run this project, please follow these steps: 

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

### Tests
-------

To run the tests, please follow these steps: 

1- Open backend/package.json on your terminal and run `npm test`.

2- Repeat the step 1, but on frontend/package.json. 

_Please note there is a skipped suite in the front end test files. This is because it's a failing suite, but I have submitted it to receive feedback and understand async testing._


## Approach
---
To tackle this challenge, I first drew the app architecture. This helped me understand the different parts of the project and how the pieces would interact with each other. 
Then I worked on getting the 3 layers of each part finalised before moving on to the next one. I started with the _All peeps_ part, working from view layer to data layer. 
Next, I worked on _Post peep_. 
I then moved onto _Register_ and, finally, completed the _Login_ part. 
When I worked on the two parts related to the users collection, I had to revisit the other two parts, as they needed some adjustments to work with the users information. 

![App architecture](/images/architecture.jpeg)

I also drew a component tree that helped me identify the data flow and where to place state. I came to the conclusion that _all peeps_ and _user (as logged in user)_ should live in app, as this data would be used by more than one component. 

![Component tree](/images/tree.jpeg)

I created 4 basic wireframes to have an idea of what the different views should look like. 

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

Once all parts of the app where completed and working together, I added some express validation. 
Lastly, I added some basic styling. 

---

##### Notes
- Even though I got to test react on this challenge, I don't believe the tests I've written are meaningful, as they are purely testing if the components are being rendered. One thing I need to focus on moving forward is async testing, to be able to produce robust coverage. 
- I didn't quite get to understand how to display certain error messages on my app. I feel there are messages on the user models and on the routes that would be great to display, as they are more specific to the error happening, but I couldn't figure out how to do it. 
- On this project, I placed most of the requests on the individual components. I took this approach as app would be overloaded with methods otherwise, but I'm not sure it was the right decision. 
---
---
---

* Feel free to use Google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit your work by 9:30am Monday morning

Challenge:
-------

As usual please start by forking this repo.

We are going to write a small twitter clone that will allow users to post messages to a public wall.

Good luck and let the chitter begin!

Features:
-------

### Standard Acceptance Criteria
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

Additional requirements:
------

* You don't have to be logged in to see the peeps.
* Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewithers@digitalfutures.com, password123, Edward Withers, dearshrewdwit).
* The username and email are unique.
* Peeps (posts to chitter) have the name of the trainee and their user handle.
* Your README should indicate the technologies used, and give instructions on how to install and run the tests.

### Extended Acceptance Criteria

```
As a trainee
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep

As a trainee
In order to start a conversation as a DFA trainee Software Engineer
I want to reply to a peep from another trainee.
```
