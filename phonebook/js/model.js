'use strict';

class Contact {
    constructor(name, surname, prefix, tel) {
        this.name = name;
        this.surname = surname;
        this.prefix = prefix;
        this.tel = tel;
    }
}

class Subject {
    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unscribe(observer) {
        if (this.observers.indexOf(observer) > -1) {
            observers.splice(this.observers.indexOf(observer), 1)
            }
    }

    notify() {
        for (let o in this.observers) {
            o.update(this)
        }
    }
}
