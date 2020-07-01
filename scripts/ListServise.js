export default class ListServise {
  constructor(api) {
    this.api = api;
  }

  //возвращает все элементы
  request(){
    return this.api.getItem();
  }

  //возвращает элемент по id
  find(id) {
    const list = this.request();
    const findElement = list.find(item => {
      return item.id === id;
    });
    return findElement;
  }
  //создает новые элементы
  create(item) {
    const id = `_id/${+new Date()}`;
    const list = this.request();
    list.push({
      ...item,
      id
    });
    this.api.setItem(list);
  }
  //обновить элемент
  update(item) {
    console.log({item});
    const parent = item.parentNode;
    console.log({parent});
    console.log(`${item.parentNode}`);
    const list = this.request();
    const findIndex = list.findIndex(element => {
      return element.id === item.id;
     });
  }
//удаляет элемент
  remove(id) {
    const list = this.request();
    const findIndex = list.findIndex(element => {
      return element.id === id;
    });
    const updateList = list.splice(findIndex, 1);
    this.api.setItem(updateList);
  }
}