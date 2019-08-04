class MyMap<T> extends Map {
  setItem(key: string, value: T) {
    super.set(key, value);
  }
  getItem(key: string) {
    super.get(key);
  }
  clear() : void {
    super.clear();
  }
  printMap() {
    console.log(super.entries());
  }
}

let numberMap = new MyMap<number>();
numberMap.setItem('five', 5);
numberMap.setItem('four', 4);
numberMap.printMap();

let stringMap = new MyMap<string>();
stringMap.setItem('five', '5');
stringMap.setItem('four', '4');
stringMap.printMap();
