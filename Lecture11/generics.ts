class BeeKeeper {
    hasMask: boolean = true;
  }
   
  class ZooKeeper {
    nametag: string = "Mikle";
  }
   
  class Animal2 {
    numLegs: number = 4;
  }
   
  class Bee extends Animal2 {
    keeper: BeeKeeper = new BeeKeeper();
  }
   
  class Lion extends Animal2 {
    keeper: ZooKeeper = new ZooKeeper();
  }
   
  function createInstance<A extends Animal2>(c: new () => A): A {
    return new c();
  }
   
  console.log(createInstance(Lion).keeper.nametag);
  console.log(createInstance(Bee).keeper.hasMask);
  