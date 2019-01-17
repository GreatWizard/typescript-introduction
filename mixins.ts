class Disposable {
  isDisposed: boolean;
  dispose() {
    this.isDisposed = true;
    console.log("*** Disposed");
  }
}

class Activatable {
  isActive: boolean;
  activate() {
    this.isActive = true;
    console.log("*** Activated");
  }
  deactivate() {
    this.isActive = false;
    console.log("*** Deactivated");
  }
}

class SmartObject implements Disposable, Activatable {
  constructor() {
    setInterval(
      () => console.log(this.isActive + " : " + this.isDisposed),
      1000
    );
  }
  // Disposable
  isDisposed: boolean = false;
  dispose: () => void;
  // Activatable
  isActive: boolean = false;
  activate: () => void;
  deactivate: () => void;
}
applyMixins(SmartObject, [Disposable, Activatable]);

let smartObj = new SmartObject();
setTimeout(() => smartObj.activate(), 1500);

// In your runtime library somewhere
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}
