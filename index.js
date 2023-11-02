"use strict";

window.onload = function () {
    initStateDrops();
    const selectTeam = document.getElementById("selectTeam");
    selectTeam.onchange = submitTeamBtnClicked;
};

function initStateDrops() {
    // load teams
    let teams = [
        { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
        { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
        { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
        { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
    ];

    const selectTeam = document.getElementById("selectTeam");

    for (let i = 0; i < teams.length; i++) {
        let option = new Option(teams[i].name, teams[i].code);
        selectTeam.appendChild(option);
    }
}

function submitTeamBtnClicked() {
    const selectTeam = document.getElementById("selectTeam");
    const selectedTeamCode = selectTeam.value;

    console.log(`Selected Team: ${selectedTeamCode}`);
}

