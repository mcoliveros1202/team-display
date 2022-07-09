// create header

const generateHeader = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>

    <body>
    <header>
    <div class="" id="header">
        <h1 class="p-3 mb-2 bg-primary text-white">My Team</h2>
    </div>
    </header>

    <main class="container">

    </main>

    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Madelyn Oliveros</h3>
    </footer>
  </body>
  </html>
  `;
};

module.exports = generateHeader;