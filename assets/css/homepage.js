

var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-serch-term");


var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
        displayRepos(data, user); 
      });
    });
  };


var formSubmitHandler = function(event) {
    event.preventDefault();
    //get value from input element 
    var username = nameInputEl.value.trim();

    if (username){
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
};

var displayRepos = function(repos, serchTerm) {
    repoContainerEl.textContent = "";
    repoSearchTerm.textContent = searchTerm;
};

userFormEl.addEventListener("submit", formSubmitHandler);
