function reverse(str) {
    return str.split("").reverse().join("") === str
        ? `${str} is palindrome`
        : `${str} isnt palindrome`;
}

console.log(reverse("aa"));
