export default class ListServise {
  constructor(name) {
    this.api = new LocalStorage(name)
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
    const list = this.request();
    const findIndex = list.findIndex(element => {
      return element.id === item.id;
    });
    const updateList = list.splice(findIndex, 1, item);
    this.api.setItem(updateList);
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
//это я проверяла как работает + вариант как сделать
// const titleServise = new TitleServise('titleApi');

// const container = document.createElement('div');
// document.body.appentChild(container);

// const renderCards = () => {
//   const list = titleServise.request();
//   const elements = list.map(item => `
//   <div>
//     <h3>Имя - ${item.name}</h3>
//     <p>Текст - ${item.text}<p>
//   </div>`);
//   container.innerHTML = elements;
// }

//onfocus и onBlur загуглить вместо нажатия по клаве