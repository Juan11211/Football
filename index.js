"use strict";

let teams = [ 
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

window.onload = function () {
    initStateDrops();
    const selectForm = document.getElementById("teamForm");

    selectForm.onsubmit = function(e){
        e.preventDefault();
        submitTeamBtnClicked();
        return false;
    };
};

function initStateDrops() {
    const selectTeam = document.getElementById("selectTeam");
    
    // Add "Select a team" option
    let defaultOption = new Option("Select a team", "");
    selectTeam.appendChild(defaultOption);
    
    for (let i = 0; i < teams.length; i++) {
        let option = new Option(teams[i].name, teams[i].code);
        selectTeam.appendChild(option);
    }
    
    // Add a change event listener to automatically clear the text
    selectTeam.addEventListener("change", function() {
        const teamInfo = document.getElementById("teamInfo");
        if (selectTeam.value === "") {
            teamInfo.textContent = ""; // Clear the text when "Select a team" is selected
        }
    });
}

function submitTeamBtnClicked() {
    const selectTeam = document.getElementById("selectTeam");
    let teamInfo = document.getElementById("teamInfo");
    let selectedTeam = null;

    for (let i = 0; i < teams.length; i++) {
        if (teams[i].code === selectTeam.value) {
            selectedTeam = teams[i];
            break;
        }
    }

    if (selectTeam.value === "") {
        // The change event listener will already clear the text, so no additional action needed here
    } else if (selectedTeam) {
        teamInfo.textContent = `You selected the ${selectedTeam.name} - they play in ${selectedTeam.plays}`;
    } else {
        teamInfo.textContent = "Invalid team selection";
    }
}
