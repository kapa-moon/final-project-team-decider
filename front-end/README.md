# Decider - Frontend

To run the current version of code on your local machine👇

Clone the [Decider Repo](https://github.com/agiledev-students-fall2022/final-project-team-decider.git) by ```git clone https://github.com/agiledev-students-fall2022/final-project-team-decider.git```

Make sure you have Node installed.

Install necessary packages by ```npm install```.

Go to the front-end folder by ```cd front-end```.

Run ```npm start```.

Use ```http://localhost:4000/groups``` to see available groups, then join a trial group to have a multi-user experience.
After sign up an account, use the account to log in to use more features in ```view``` page.
After join a group, the group is added to the current user's group list if the group is not already in the user's group list,
then the user can view the newly added group in ```view``` page, other database query options can be performed in ```view``` page
such as ```remove a group from group list```, ```remove all group from group list```, these queries are only performed
in the ```my_groups``` array of the current user, not influencing the groups themselves.

After create a group in ```Home``` page, automatically redirect to  ```Recommend``` page and join that group.
Can also ```remove a group from database``` here, these queries are performed to create or remove the groups themselves.

### Note

* The [Recommend] page may take 1-2 sec to show up when you first go into it
* Log-in/Sign-up pages are for future usage and development
* This web app is in mobile-first design. It's preferable to be tested in mobile sizes.
* If the "Recommend Page" doesn't show, try ```inspect``` and enter ```localStorage.setItem('myCurLocation','196')``` in the console, then 
* There may be some time delay when rendering ```view``` (group information) page for logged in users.