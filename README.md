[![agiledev-students-fall2022](https://circleci.com/gh/agiledev-students-fall2022/final-project-team-decider.svg?style=svg)](https://app.circleci.com/pipelines/github/agiledev-students-fall2022/final-project-team-decider?branch=master)

![Build & Deployment](https://github.com/agiledev-students-fall2022/final-project-team-decider/actions/workflows/deploy.yml/badge.svg)

[![Publish Docker image](https://github.com/agiledev-students-fall2022/final-project-team-decider/actions/workflows/buildcontainer.yml/badge.svg)](https://github.com/agiledev-students-fall2022/final-project-team-decider/actions/workflows/buildcontainer.yml)

# Decider

### 🥘 Find the perfect place for friends hangouts. [<mark>Right Now!</mark>](http://164.90.254.52:3000/)

## Introduction

### <li> <strong>Scenario</strong></li>

There are different common scenarios of hanging out with friends. It can be a planned dinner, or a casual meet during the day of work/study.<br> Following is a conversation that you may imagine yourself had with a friend/peer/coworker: <br>

📚 [In Library]<br>
🫠 : Hey, what are you working on? <br>
🥸 : OS lab. You?<br>
🫠 : Oh me too. Hey I've been sitting here the whole morning. Do you wanna grab a coffee? <br>
🥸 : Ofc. Wanna try <em><strong>sth different</strong></em>? <br>
🫠 : Definitely!! But which one... <br>

### <li> <strong>How does Decider help and create a fun experience?</strong></li>

<ol>
<li><strong>Quickly generate a link/group link that can be shared across any group chat such as text, messenger, etc. </strong></li>
<li><strong>Users can enter optional information to refine the hangout, including timeframe, location, and purposes. </strong></li>
<li><strong>Users will have a customized list of recommendations and also be able to add potential places mannually.</strong></li>
<li><strong>Group members can check the selected place list at any time, vote on places, and see the final decision.</strong></li>
<li><strong>The web app is conveniently connected to Map applications (Google Maps, etc).</strong></li>
</ol>

## Build Steps

1. Clone the [Decider Repo](https://github.com/agiledev-students-fall2022/final-project-team-decider.git) by ```git clone https://github.com/agiledev-students-fall2022/final-project-team-decider.git```

2. Make sure you have Node installed.<br>
Both the back-end and front-end should be running.<br>

3. Go to the back-end folder by ```cd back-end```<br>
Install necessary packages by ```npm install```<br>
Run ```nodemon server```<br>
You can open ```http://localhost:4000``` to see back end.<br>

4. Go to the front-end folder by ```cd front-end```<br>
Install necessary packages by ```npm install```<br>
Run ```npm start```<br>
You can open ```http://localhost:3000``` to see front end.<br>
This shell used for front end should be a different shell from the shell used for back end.<br>

5. Unit tests: ```cd back-end```<br>
```npm test```<br>

6. Deployment to Digital Ocean Droplet<br>
Front end address is ```http://164.90.254.52:3000/```<br>
Back end address is ```http://164.90.254.52:4000/```

7. Docker container<br>
Make sure you have Docker installed.<br>
Launch docker daemon, you can do this through running the Docker Desktop application.<br>
Open a shell and run<br>
```docker pull yvonne511/final-project-decider-back-end```<br>
```docker pull yvonne511/final-project-decider-front-end```<br>
```docker run -ti --rm yvonne511/final-project-decider-back-end```<br>
Open another shell and run<br>
```docker run -ti --rm yvonne511/final-project-decider-front-end```<br>
The above two ```docker run``` commands may take some time.<br>
You can open ```http://localhost:3000``` to see front end and open ```http://localhost:4000``` to see back end.<br>

## Usage

* Use ```process.env.REACT_APP_BACK_END_URL/groups``` or ```http://localhost:4000/groups``` to see available groups, then join a trial group to have a multi-user experience.
After sign up an account, use the account to log in to use more features in ```view``` page, or you can use an existing testing account with username ```abc``` and password ```123```.
After join a group from clicking ```enter``` with input group id, the group is added to the current user's group list if the group is not already in the user's group list, and the user is switched to the group.

* Then the user can view the newly added group in ```view``` page, other database query options can be performed in ```view``` page
such as ```remove a group from group list```, ```remove all group from group list```, these queries are only performed
in the ```my_groups``` array of the current user, not influencing the groups themselves. The user can also see the current username and current group in ```view``` page. More information about ```myLocations, myCurLocation``` can also be seen from opening developer tools in the browser and then choose ```Applications -> local Storage -> http://localhost:3000```. 

* To switch a group, copy a group number from ```group list``` in ```view (group information)``` page, then go back to ```http://localhost:3000``` and use the copied group number as input to the ```Enter Group ID``` in the text box and hit enter. You can see the changed group by checking the current group in ```view (group information)``` page.
### For End Users:


* After create a group in ```Home``` page, automatically redirect to  ```Recommend``` page and join that group.
Can also ```remove a group from database``` here, these queries are performed to create or remove the groups themselves, not influencing the ```my_groups``` array of the current user.

* STEP 1 Landing Page:
    
    * ```Create a Group``` on the landing page. Copy the group code and share with friends.

    * Enter a group code that your friend share with you on the landing page. Click ```Enter```.

* STEP 2 Main Page:

    * User can switch between four subpages: ```Search```, ```Recommend```, ```Group List```, and ```Go!```.

    * ```Search```: In the search bar, enter the category / location name you want to search for. Ex. ```Rookie USA```, ```park```.

    * ```Recommend```: (In the search bar, enter your current location to get recommend results based on adjacency.) Click on ```Add``` on location card to add the location to your group list. You can cancel/delete the location by click on the same box. Click on the picture on each location's card to see a map preview. 

    * ```Group List```: View all locations added by group members. Vote on the locations you like as well. You can cancel your vote by click on the same box. When a location's vote is deducted to 0, this location will be kicked out from the group. Click on the picture on each location's card to see a map preview. 

    * ```Go!```: Click on ```Select!``` and Decider will select a location from ```Group List``` as the result shared across all group members. On the second card, Decider shows the location with most votes from ```Group List```. 

    * Usually, ```Go!``` is the last step for a group to decide their choice.
    

* ```Sign up``` and ```Log in``` are optional. Note that users who do not log in will not be able to see their history groups and remove groups.
* All information on ```Group List``` and ```Go!``` is shared across the group.

## Note

* The ```Recommend``` page may take 1-2 sec to show up when you first go into it.
* Log-in/Sign-up pages are for future usage and development.
* This web app is in mobile-first design. It's preferable to be tested in mobile sizes.
* If the ```Recommend``` page doesn't show, try ```inspect``` and enter ```localStorage.setItem('myCurLocation','196')``` in the console, then 
* There may be some time delay when rendering ```view``` (group information) page for logged in users.
* ```nodemon``` is alreadyp included in ```back-end/package-lock.json```. However, if after ```npm install```, ```nodemon``` command still cannot be found, use ```npm install -g nodemon``` to install ```nodemon```.

# Continuous Integration and Deployment

## Continuous Integration

GitHub Publish Docker Image Action automates deplot process. <br>
With `buildcontainer.yml`, any change made to the master branch will trigger GitHub action and rebuild new front-end and back-end images. Then they will be pushed to docker hub by GitHub Action too. <br>
User can use run command to access and use them:

For front-end:

    docker pull yvonne511/final-project-decider-back-end
    docker pull yvonne511/final-project-decider-front-end
    docker run -ti --rm yvonne511/final-project-decider-back-end

For back-end, open another shell and run:

    docker run -ti --rm yvonne511/final-project-decider-front-end

## Continuous Deployment

GitHub Build & Deploy Action automates deploy process.<br>
Any change to master branch will trigger ```deploy.yml``` action.<br>
It removes the previous build deployed with ```docker compose```, and rebuild another one.<br>
The second badge at the top of this file demonstrate continuous deployment is working.<br>

# Members


[Yiyi (Yvonne) Wu](https://github.com/Yvonne511)</br>
[Yuewen Yang](https://github.com/kapa-moon)</br>
[Xi Liu](https://github.com/xi-liu-cs)</br>

# Design

Sprint 0: [Wireframes & Prototype](https://github.com/agiledev-students-fall2022/final-project-team-decider/tree/master/ux-design)</br>

# Contribute

See the [contribution guide](CONTRIBUTING.md) for more information.
