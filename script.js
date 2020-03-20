window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            const container = document.getElementById("container");
            for (let index = 0; index < json.length; index++) {
                let name = json[index].firstName + " " + json[index].lastName
                let ifActive = json[index].active
                json.sort(function (a, b) {
                    return b.hoursInSpace - a.hoursInSpace;
                });
                let div = `
            <div class="astronaut">
            <div class="bio">
                <h3>${name}</h3>
                <ul>
                    <li>Hours in space: ${json[index].hoursInSpace}</li>
                    <li id ="isActive">Active: ${ifActive}</li>
                    <li>Skills: ${json[index].skills}</li>
                </ul>
                </div>
                <img class="avatar" src= ${json[index].picture}>
            </div>
            `
                container.innerHTML += div
                container.innerHTML += `
                <div class="astronautCount">
                    <h3>Total Astronauts = ${index + 1}</h3>
                </div>
                `
                if (ifActive === "true"){
                    isActive.style.color = "green"
                }
            }   

        });
    });
});

