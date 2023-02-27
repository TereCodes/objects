//question 1
function InstagramPost(handle, content, imageLink, numberOfViews, numberOfLikes) {
    this.handleofAuthor = handle;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}


//question 2
let post1 = new InstagramPost('Ukgrace', 'fashion', 'https://res.cloudinary.com/dfqwimmnp/image/upload/v1672930314/IMG_2405_igthty.jpg', 1050, 450);
console.log(post1)

let post2 = new InstagramPost('terecodes', 'tech', 'https://res.cloudinary.com/dfqwimmnp/image/upload/v1668899841/img.blessing_cww5nd.jpg', 1060, 507);
console.log(post2)


// question3
//a
function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    };
}

const musa = createPerson("Musa", 19, "Lekki,Lagos,Nigeria.");
console.log(musa)

//b
function createJambScores(eng, govt, lit, crk) {
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    };
}
const musaJambScores = createJambScores(70, 85, 82, 94);
console.log(musaJambScores)

musa.Jambscores = musaJambScores
console.log(musa)

// question 4
//a. using Object.assign()

const firstArticle = {
    writer: "Blessing Ukanah",
    title: "Why Tech?",
    year: 2022,

};
const secondArticle = Object.assign({}, firstArticle);
console.log(secondArticle);

secondArticle.title = "choosing a career in tech";

console.log("After change title of second article");
console.log(secondArticle);

//b. using spread syntax

const thirdArticle = { ...firstArticle };
thirdArticle.title = "Getting started in your tech career";
console.log(thirdArticle);

//c. using the method JSON.parse();
const firstArticleJSON = JSON.stringify(firstArticle);
const fourthArticle = JSON.parse(firstArticleJSON);
fourthArticle.title = "How hard is Tech";
console.log(fourthArticle);



// question 5

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
};

for (const party in presidentialCandidates) {
    const value = presidentialCandidates[party];
    const result = value + ' is the presidential candidate of ' + party;
    console.log(result);
}
