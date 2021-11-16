export class Observer { // should be implement as interface in typescript or another language. This is just an example usage.

    constructor(msg) {
        this.msg = msg;
    }
    Update(update_func) {
        update_func();
    }
}
export class InstangramObserver extends Observer {

    constructor(element_id) {
        super("I am an instangram observer and I am NOTIFIED");
        this.element_id = element_id;

    }
    Update() {
        this.Update(() => { document.getElementById(this.element_id).innerHTML = this.msg; });
    }

}
export class FacebookObserver extends Observer {

    constructor(element_id) {
        super("I am an facebook observer and I am NOTIFIED");
        this.element_id = element_id;

    }
    Update() {
        this.Update(() => { document.getElementById(this.element_id).innerHTML = this.msg; });
    }

}
export class TwitterObserver extends Observer {

    constructor(element_id) {
        super("I am a twitter observer and I am NOTIFIED");
        this.element_id = element_id;
    }
    Update() {
        this.Update(() => { document.getElementById(this.element_id).innerHTML = this.msg; });
    }

}

export class NotificationSystem {
    constructor() {
        this.registered_observers = [];
    }
    register_observer(observer) {
        this.register_observers.push(observer);
    }
    unregister_observer(observer) {
        this.register_observer.prototype(observer);
    }
    notify_observers() {
        this.register_observers.filter(o => o.Update(o.element_id));
    }
}