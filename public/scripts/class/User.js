export class User {
  pseudo;
  password;

  constructor(pseudo, password) {
    this.pseudo = pseudo;
    this.password = password;
  }

  register() {
    const currentDate = new Date().toLocaleDateString("en-GB");
    const arrayScore = [];

    const userData = {
      password: this.password,
      createdAt: currentDate,
      game: arrayScore,
    };

    const userDataStringify = JSON.stringify(userData);
    localStorage.setItem(this.pseudo, userDataStringify);
  }

  getPassword() {
    const storageGet = localStorage.getItem(this.pseudo);
    const storageGetParse = JSON.parse(storageGet);
    const passwordStorage = storageGetParse.password;
    return passwordStorage;
  }
}
