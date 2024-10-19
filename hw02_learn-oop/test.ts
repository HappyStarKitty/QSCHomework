// 创建一个类
// 实例化一个类，产生一个对象

/*
class Car {
  // 字段（属性）
  engine: string;

  // 构造函数
  constructor(engine:string) {
    this.engine = engine
  }

  // 方法
  disp():void {
    console.log("发动机为："+this.engine)
  }
}

var obj = new Car("engine 1")
obj.disp()
*/

// 类的继承与方法重写
/*
class PrinterClass {
  doPrint():void {
    console.log("父类的 doPrint() 方法。")
  }
}

class StringPrinter extends PrinterClass {
  doPrint():void {
    super.doPrint() //调用父类的函数
    console.log("子类的 doPrint() 方法。")
  }
}

var printer : PrinterClass = new StringPrinter;
printer.doPrint();
*/


