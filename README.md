# Welcome To the LearningGit Repo

## How to Contribute to this Repo

### Prerequisite
1. you should have `git` on your system
2. you should have `github` account setup

### fork this repo
click on the `fork` button to fork this repo


### Clone this repo
1. Open your Terminal or CMD and run this command


```shell

 $ cd directory_name (replace directory_name with your directory where you want to clone this repo)
 
 $ git clone https://github.com/Sachin-chaurasiya/LearningGit.git
 
 $ cd LearningGit
 
```
2. Open data.json file [js/data.json](https://github.com/Sachin-chaurasiya/LearningGit/blob/main/js/data.json). and add your detail object into this file like this.
```json
  {
    "rollNo": your_roll_number,
    "firstName": "your_firstName",
    "lastName": "your_lastName",
    "gitHubUrl": "your_github_url"
  },
  - rollNo should be type of integer
  - other 3 attributes should be type of string (enclosed withing " " )
```
save the file changes.

3. Open your Terminal or CMD and run these commands

```shell

$ git add .

$ git commit -m "your commit message" (please add proper commit message)

$ git push

```
`Thanks and Regards`
