import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class User {
    constructor(name, email){
        this._name = name;
        this._email = email;
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
class Administrator extends User {
    constructor(name, email, role) {
        super(name, email);
        this._role = role;
    }
    get role() {
        return this._role;
    }

    set role(newRole) {
        this._role = newRole;
    }
}

const andrea = new Administrator("Andrea", 30, "andrea.thomas19460@gmail.com", "Admin");

console.log(andrea.name);

console.log(andrea.role);