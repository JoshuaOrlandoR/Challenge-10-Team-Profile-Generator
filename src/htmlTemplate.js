//HTML Manager Section
const generateManagerHTML = manager => { //Layout from Bootstrap site - altered to fit use
    return ` 
    <div class= "card teamCard">
        <div class= "card-header text-white bg-info>
            <h2 class= "card-title"> ${manager.getName()} </h2>
            <h3 class= "card-title"> ${manager.getRole()} </h3>
        </div>
        <div class= "card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> Identification: ${manager.getID()} </li>
                <li class="list-group-item"> Contact via Email: ${manager.getEmail()} </li>
                <li class="list-group-item"> Office Number: ${manager.getOfficeNumber()} </li>
            </ul>
        </div>
    </div>
    `;
};

//HTML Engineer Section
const generateEngineerHTML = engineer => { //All team member sections are copied from the manager section and changed to fit relavent info - colors change as well 
    return ` 
    <div class= "card teamCard">
        <div class= "card-header text-white bg-dark>
            <h2 class= "card-title"> ${engineer.getName()} </h2>
            <h3 class= "card-title"> ${engineer.getRole()} </h3>
        </div>
        <div class= "card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> Identification: ${engineer.getID()} </li>
                <li class="list-group-item"> Contact via Email: ${engineer.getEmail()} </li>
                <li class="list-group-item"> Github Profile: ${engineer.getGithub()} </li>
            </ul>
        </div>
    </div>
    `;
};

//HTML Intern Section
const generateInternHTML = intern => { 
    return ` 
    <div class= "card teamCard">
        <div class= "card-header text-white bg-success>
            <h2 class= "card-title"> ${intern.getName()} </h2>
            <h3 class= "card-title"> ${intern.getRole()} </h3>
        </div>
        <div class= "card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> Identification: ${intern.getID()} </li>
                <li class="list-group-item"> Contact via Email: ${intern.getEmail()} </li>
                <li class="list-group-item"> School: ${manager.getSchool()} </li>
            </ul>
        </div> 
    </div>
    `;
};

//Use for loop to iterate over the team list, and generate the associated team member html based on their position -> saved to an array for use later
generateHTMLPage = (data) => {
    htmlArray = [];

    for (let i=0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerSection = generateManagerHTML(employee);
            htmlArray.push(managerSection);
        }

        if (role === 'Engineer') {
            const engineerSection = generateEngineerHTML(employee);
            htmlArray.push(engineerSection);
        }

        if(role ==='Intern') {
            const internSection = generateInternHTML(intern);
            htmlArray.push(internSection);
        }
    }

    const allTeamMembers = htmlArray.join('');
    const createComplete = generateCompleteHTML(allTeamMembers); //This will be a function that houses the rest of the HTML and plugs the connected array from above, into it 
    return createComplete;
}

//HTML page complete - utilizing bootstrap for styling 
const generateCompleteHTML = (allTeamMembers) => { 
    return ` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/style.css" />
        <title> Employee Team </title>
    </head>

    <body> 
        <header class="jumbotron bg-primary">
            <h1 class="display-3 text-white"> All Team Members</h1>
            <p class="subheader text-white">Below, you will find all members and their associated positions!</p>
        </header>
    

        <div class= container> 
            <div class= "row justify-content-center" id= "memberContent">
                ${allTeamMembers}
            </div>
        </div>
    </body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="./assets/javascript/script.js"></script>

    </html>

    `;
};

//export to be used in index.js
module.exports = htmlTemplate;

