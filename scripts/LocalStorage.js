export default class LocalStorage {
  constructor(name) {
    this.name = name;
  }
  //name - имя ключа API
//по ключу дает массив с данными
  getItem () {
    const data = localStorage.getItem(this.name) || '[]';
    return JSON.parse(data);
  }
//принимает объект и кладет в хранилище
  setItem(data) {
    const prepareDate = JSON.stringify(data);
    localStorage.setItem(this.name, prepareDate);
  }
}


