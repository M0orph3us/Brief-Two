export class Storage {
  pseudo;
  newScore;

  constructor(pseudo, newScore = null) {
    this.pseudo = pseudo;
    this.newScore = newScore;
  }

  getStorage() {
    const getStorage = localStorage.getItem(this.pseudo);
    const getStorageParse = JSON.parse(getStorage);
    return getStorageParse;
  }

  getScore() {
    const recoverArrayScore = this.getStorage().game;
    return recoverArrayScore;
  }

  setScore() {
    const currentDate = new Date().toLocaleDateString("en-GB");
    const getStorage = this.getStorage();
    const scoreDate = { score: this.newScore, recordedAt: currentDate };
    getStorage.game.push(scoreDate);
    const storageStringify = JSON.stringify(getStorage);
    localStorage.setItem(this.pseudo, storageStringify);
  }
}

// const test = new Storage("teste", 100);
// test.setScore();
