function describeValue(value) {
    if (Boolean(value)) {
        return `${typeof value} | Truthy`;
    } else {
        return `${typeof value} | Falsy`;
    }
}

console.log(describeValue("Hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));