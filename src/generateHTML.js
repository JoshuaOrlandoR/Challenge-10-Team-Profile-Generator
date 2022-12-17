//HTML Manager Section
const generateManagerHTML = manager => { //Layout from Bootstrap site - altered to fit use
    return ` 
    <div class= "card teamCard">
        <div class= "card-header text-white bg-info>
            <h2 class= "card-title"> ${manager.name}</h2>
            <h3 class= "card-title"> Manager </h3>
        </div>
        <div class= "card-body">
            <ul class="list-group">
                <li class="list-group-item"> Identification: ${manager.id} </li>
                <li class="list-group-item"> Contact via Email: ${manager.email} </li>
                <li class="list-group-item"> Office Number: ${manager.officeNumber} </li>
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
            <h2 class= "card-title"> ${engineer.name}</h2>
            <h3 class= "card-title"> Engineer </h3>
        </div>
        <div class= "card-body">
            <ul class="list-group">
                <li class="list-group-item"> Identification: ${engineer.id} </li>
                <li class="list-group-item"> Contact via Email: ${engineer.email} </li>
                <li class="list-group-item"> Github Profile: ${engineer.github} </li>
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
            <h2 class= "card-title"> ${intern.name}</h2>
            <h3 class= "card-title"> Intern </h3>
        </div>
        <div class= "card-body">
            <ul class="list-group">
                <li class="list-group-item"> Identification: ${intern.id} </li>
                <li class="list-group-item"> Contact via Email: ${intern.email} </li>
                <li class="list-group-item"> School: ${intern.school} </li>
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
            const internSection = generateInternHTML(employee);
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
        <link rel="stylesheet" href="./dist/style.css" />
        <title> Employee Team </title>
    </head>

    <body> 
        <header class="jumbotron bg-primary">
            <h1 class="display-3 text-white text-center"> All Team Members</h1>
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
module.exports = generateHTMLPage;


