/**
 * Для отправки запросов в браузер встроен объект XMLHttpRequest. 
 * В Internet Explorer он называется иначе, 
 * поэтому при определении следует использовать такую конструкцию:
 */
function makeGETRequest(url, callback) {
  var xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
}


/**
 * Чтобы поймать момент, когда ответ от сервиса получен, 
 * можно воспользоваться свойством onreadystatechange:
 */
xhr.onreadystatechange = function () {
  // Этот код выполнится после получения ответа
}


/**
 * Чтобы определить, куда отправить запрос, используется метод .open():
 * Если указатель асинхронности выставлен в true, 
 * то запрос не будет блокировать выполнение других скриптов на странице.
 */
xhr.open('GET', 'http://example.com', true);
// Первый параметр - тип запроса
// Второй параметр - адрес ресурса
// Третий параметр - указатель асинхронности


/**
 * У каждого запроса можно определить таймаут – время, в течение которого мы ждём ответ:
 */
xhr.timeout = 15000;


/**
 * Если запрос не выполняется за отведенное время, 
 * срабатывает функция, переданная в поле ontimeout:
 */
xhr.ontimeout = function () {
  // Этот код выполнится, если превышено время ожидания
}


/**
 * Отправить запрос можно методом .send(). 
 * В качестве аргумента можно передать тело запроса:
 */
xhr.send();


/**
 * Параметры запроса отделяются от тела запроса знаком ? 
 * и соединяются между собой &.
 */
xhr.open('GET', 'http://example.com?param1=foo&param2=bar', true);


/**
 * Параметры запроса отделяются от тела запроса знаком ? и соединяются между собой &.
 */
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


/**
  Метод onreadystatechange на самом деле срабатывает, не только когда запрос выполнен, но и тогда, когда меняется его статус. Статус запроса хранится в поле readyState:
    • 0 – запрос не инициирован;
    • 1 – загрузка;
    • 2 – запрос принят;
    • 3 – обмен данными;
    • 4 – запрос выполнен.
 */


/**
 * Таким образом, если мы хотим выполнить действие после завершения запроса, 
 * то необходимо добавить проверку:
 */
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    // Этот код выполнится после выполнения запроса
  }
}


/**
  Ещё после завершения можно проверить статус запроса. Он хранится в xhr.status. По коду статуса можно понять, что ответил сервер:
    • 200 – запрос выполнен успешно;
    • 404 – запрашиваемый ресурс не найден;
    • 500 – на сервере произошла ошибка.
  Наконец, ответ сервера можно получить в виде обычной строки или XML:
 */
xhr.responseText   // Текстовая строка
xhr.responseXML    // XMLDocument