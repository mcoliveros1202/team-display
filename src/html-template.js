// create the team display as a whole; should I do a const for each position to access specific info?
const generateTeam = teamInfo => {
  const teamHtmlArr = teamInfo.map((teamMember) => {
    const { name, id, email } = teamMember

    let headerColor = 'black'
    let icon = 'fa-solid fa-clipboard-list'
    let textColor = 'text-white'

    switch (teamMember.getRole()) {
      case 'Manager':
        headerColor = 'bg-danger'
        break;

      case 'Engineer':
        headerColor = 'bg-success'
        icon = 'fa-solid fa-laptop-code'
        break;

      case 'Intern':
        headerColor = 'bg-warning'
        icon = 'fa-solid fa-graduation-cap'
        textColor = 'text-dark'
        break;

      default:
        break;
    }
    return `

            <div class="card">
                <div class="card-header ${headerColor} ${textColor}">
                    <div class="font-weight-bold" id="name">${name}</div>
                    <div id="job"><i class=${icon}></i>${teamMember.getRole()}</div>
                </div>
            
            <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item text-dark" id="id">ID Number: ${id}</li>
                  <li class="list-group-item text-dark" id="email"><a href='${email}'>E-mail: ${email}</a></li>
                  ${teamMember.getRole() == 'Manager' ? (`<li class="list-group-item text-dark" id="office">Office Number: ${teamMember.getOffice()}</li>`) : ''}
                  ${teamMember.getRole() == 'Engineer' ? (`<li class="list-group-item text-dark" id="github">Github Username: ${teamMember.getGithub()}</li>`) : ''}
                  ${teamMember.getRole() == 'Intern' ? (`<li class="list-group-item text-dark" id="school">School: ${teamMember.getSchool()}</li>`) : ''}
              </ul>
          </div>
    `
  })
  return `

    <section class="my-3" id="team">
    <div class="flex-row justify-space-between">

      <!-- Leaving this empty as we'll dynamically insert project HTML here -->
    ${teamHtmlArr}
      </div>
  </section>
  `;
};

// create header
module.exports = generateHeader = (teamInfo) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Project Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/3f2a3da109.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    </head>

    <body>
    <header>
    <div id="header">
        <h1 class="p-3 mb-2 bg-primary text-center text-white">Project Team</h2>
    </div>
    </header>

    <main class="container">
      ${generateTeam(teamInfo)}
    </main>

    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Madelyn Oliveros</h3>
    </footer>
  </body>
  </html>
  `;
};