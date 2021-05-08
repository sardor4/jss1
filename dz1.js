
// console.log(name + " " + totalAge + " лет");
function info() {
    var name = prompt('Введите имя');
    var age = +prompt('Введите свой год рождения');
    var year = +prompt('Введите нынешний год');
    console.log('Имя: ' + name + ', год рождения: ' + age + ', нынешний год: ' + year);
    var totalAge = year - age;
    var x = name + ", Ваш возраст: " + totalAge ;
    return x;
}
console.log(info());