
document.addEventListener("DOMContentLoaded", function(){
    const searchButton = document.getElementById("search-button");
    const usernameInput = document.getElementById("user-name");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");

    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-card");

    //function to validate the username
    //return true or false based on regex
    function validateUsername(username){
        if(username.trim() === ""){
            alert("Username should not be empty");
        }

        const regex = /^[a-zA-Z][a-zA-Z0-9_.]{2,15}$/;
        if (regex.test(username)) {
            return true;
        } else {
            alert("Invalid username Try Again");
            return false;
        }
    }

    //function to fetch api from leetcode
    async function fetchUserDetails(username){
        const url = 'https://leetcode-stats-api.herokuapp.com/${username}'

        try{
            searchButton.textContent = "Searching ...";
            searchButton.disabled = true;

            const response = await fetch(url);
            if(!response.ok){
                throw new Error("unable to fetch details");
            }

            const data = await response.json();
            console.log('logging data: ', data);
        }
        catch(error){
            statsContainer.innerHTML = '<p> Data Not Found </p>'
        }

        finally{
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }

    }
    searchButton.addEventListener("click", function(){
        const username = usernameInput.value;
        console.log("loggin username: ", username);
        if(validateUsername(username)){
            fetchUserDetails(username);
        }
    })

})