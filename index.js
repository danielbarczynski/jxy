var xmlserializer = require('XMLSerializer'); 
import { readFileSync } from "fs";

const companies = `[
    {
        "name": "Corpo",
        "numberOfEmployes": 10000,
        "managers": ["Jake", "Mike", "John"],
        "isTrusted": false
    },

    {
        "name": "StartUp",
        "numberOfEmployes": 5,
        "managers": null,
        "isTrusted": true
    },

    {
        "name": "Business",
        "numberOfEmployes": 100,
        "managers": ["Claudia", "Bob"],
        "isTrusted": true
    }
]`;

const companies2 = [
    {
        "name": "Corpo",
        "numberOfEmployes": 10000,
        "managers": ["Jake", "Mike", "John"],
        "isTrusted": false
    },

    {
        "name": "StartUp",
        "numberOfEmployes": 5,
        "managers": null,
        "isTrusted": true
    },

    {
        "name": "Business",
        "numberOfEmployes": 100,
        "managers": ["Claudia", "Bob"],
        "isTrusted": true
    }
];

console.log(companies);
console.log(JSON.parse(companies));

console.log(companies2);
console.log(JSON.stringify(companies2));

const employeesJSON = readFileSync('./employees.json');
const meJSON = readFileSync('./me.json');

console.log(employeesJSON.toString());
console.log(JSON.parse(employeesJSON));
console.log(JSON.parse(meJSON));

const employeesXML = readFileSync('./employees.xml');
console.log(employeesXML.toString());

const serialize = serializeToString(employeesXML);
console.log(serialize);
