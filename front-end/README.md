# Decider - Frontend

To run the current version of code on your local machine👇

Clone the [Decider Repo](https://github.com/agiledev-students-fall2022/final-project-team-decider.git) by ```git clone https://github.com/agiledev-students-fall2022/final-project-team-decider.git```

Make sure you have Node installed.

Install necessary packages by ```npm install```.

Go to the front-end folder by ```cd front-end```.

Run ```npm start```.

Use ```http://localhost:4000/groups``` to see available groups, then join a trial group to simulate a multi-user experience.

Can also create a group, and join that group.

There may be some time delay when rendering ```http://localhost:3000/view``` (group information) page.


### Note

* The [Recommend] page may take 1-2 sec to show up when you first go into it
* Log-in/Sign-up pages are for future usage and development
* This web app is in mobile-first design. It's preferable to be tested in mobile sizes.
* If the "Recommend Page" doesn't show, try ```inspect``` and enter ```localStorage.setItem('myCurLocation','196')``` in the console, then refresh
