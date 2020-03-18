window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            const container = document.getElementById("container");
            for (let index = 0; index < json.length; index++) {
                let name = json[index].firstName + " " + json[index].lastName
                let div = `
            <div class="astronaut">
                <h3>${name}</h3>
                <ul>
                    <li>Hours in space: ${json[index].hoursInSpace}</li>
                    <li>Active: ${json[index].active}</li>
                    <li>Skills: ${json[index].skills}</li>
                </ul>

                <img class="avatar" src= ${json[index].picture}>
            </div>
            `
                container.innerHTML += div
            }
        });
    });
});
