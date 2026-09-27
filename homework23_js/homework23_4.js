const languages = ["JavaScript", "Python", "C", "Java", "Go", "TypeScript"];

const result = languages.filter(function(language) {
    return language.length > 4;
});

console.log(result);