//创建一个基本的对象
let duck = {
    name: "Aflac",
    numLegs: 2
};

//通过 . 符号访问对象属性
console.log(duck.name)

//在对象中创建一个方法
let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {
        return "The name of this duck is " + this.name + ".";
    }
};

//定义构造函数
function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

//使用构造函数创建对象 也就是实例对象
let blueBird = new Bird();

//扩展构造函数以接收参数
function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
//实例传入参数赋值给属性
let cardinal = new Bird("Bruce", "red");

//使用 instanceof 验证对象的构造函数
canary instanceof Bird; //判断 canary 是不是 Bird 的实例

//了解自己的属性
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
let duck = new Bird("Donald");
let ownProps = [];
for (let property in duck) {
    if (duck.hasOwnProperty(property)) { //判断duck的所有属性是否是它自身的属性还是原型的属性  自身属性返回 true
        ownProps.push(property);
    }
}

//使用原型属性来减少重复代码  比如相同的属性及其值
Bird.prototype.numLegs = 2;
//实例可以通过 . 来访问到原型中的属性
console.log(duck.numLegs); // 在控制台输出 2
console.log(canary.numLegs); // 在控制台输出 2

//duck.constructor  获取到创建这个实例的构造函数
duck.constructor = Bird //

//将原型设置为一个对象
Bird.prototype = {
    constructor: Bird, // 定义 constructor 属性  实例通过  .constructor可以访问到构造函数原型里面的值
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};

//验证duck实例是否继承了  构造函数Bird的原型
Bird.prototype.isPrototypeOf(duck);

//一切皆是对象  构造函数的原型也是实例的原型 也是对象的原型

//定义一个超类构造函数  并给其原型赋值  用于定义子类实例的共同属性
function Animal() {}
Animal.prototype.eat = function() {
    console.log("nom nom nom");
};
//创建一个实例继承超类原型的属性
let animal = Object.create(Animal.prototype);

//将父类构造函数的原型实例给 子类构造函数的原型 从而实现继承
Bird.prototype = Object.create(Animal.prototype);