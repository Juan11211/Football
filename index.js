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
    // load teams //Assign values to the global teams variable

    const selectTeam = document.getElementById("selectTeam");

    for (let i = 0; i < teams.length; i++) {
        let option = new Option(teams[i].name, teams[i].code);
        selectTeam.appendChild(option);
    }
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

    if (selectedTeam) {
        teamInfo.textContent = `You selected the ${selectedTeam.name} - they play in ${selectedTeam.plays}`;
    } else {
        teamInfo.textContent = "Invalid team selection";
    }
}
