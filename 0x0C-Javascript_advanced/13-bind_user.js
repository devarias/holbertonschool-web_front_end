const user = {
  firstName: "Buillaume",
  lastName: "Ialva",
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  location: "Telaviv",
  occupation: "Engineer"
};

function logWelcomeUser(welcomeString) {
  console.log(
    `${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`
  );
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser("Welcome");
