console.log('hello world! 🌍');

let companies = `[
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
console.log(companies); 
console.log(JSON.parse(companies));


