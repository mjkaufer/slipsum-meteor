var ipsum = [
    "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
    "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
    "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
    "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.",
    "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",
    "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
    "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.",
    "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
    "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. ",
    "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?"
];

var slips = [
    "I'm serious as a heart attack",
    "I can do that",
    "Is she dead, yes or no?",
    "Hold on to your butts",
    "No, motherfucker",
    "Are you ready for the truth?",
    "We happy?",
    "I gotta piss",
    "No man, I don't eat pork",
    "Mmmmmm, this is a tasty burger!"
];

var method = function(paragraphs, pTag, headerTag, onlyHeader, s /*only for testing*/ ) { //paragraphs = amount of paragraphs, pTag is the tag in front of p, headerTag is an optional value to fill out - if left empty, there will be no headers. If set as "", headers will start with "" (nothing). If set as "<h1>", it'll start with <h1> and end with </h1>. Etc.
    //have to test if type is object to determine if undefined due to Spacebars returning weird objects if no vars passed
    //spacebars.
    if (arguments.length > 0 && typeof arguments[arguments.length - 1] === "object") { //weird Spacebars.kw
        arguments[arguments.length - 1] = undefined;
    } //gets rid of spacebars.kw weird stuff

    var start = end = extra = ret = "";
    var shuffleIpsum, shuffleSlips;
    if (s === false) { //only for testing, should not actually happen often unless the user doesn't want them shuffled for some reason
        shuffleIpsum = ipsum.slice(0); /*copies it*/
        shuffleSlips = slips.slice(0);
    } else {
        shuffleIpsum = shuffle(ipsum.slice(0)); /*copies it then shuffles*/
        shuffleSlips = shuffle(slips.slice(0));
    }

    if (paragraphs === undefined)
        paragraphs = 1;

    if(headerTag === undefined)//no headers by default
      headerTag = false;

    if (headerTag === true) //if just true
        headerTag = "<h1>";

    if (onlyHeader === undefined) //undefined or otherwise
        onlyHeader = false; //so paragraphs are displayed by default

    if (pTag === undefined) { //true by default, now default is nothing
        // start = "<p>";
        // end = "</p>";
    } else { //there is a value
        start = pTag;
        end = endTag(start);
    }

    for (var i = 0; i < paragraphs; i++) {
        if (headerTag) { //since this is true by default and by default a Spacebars obj is passed which yields true, no need to test for undefined
            ret += headerTag;
            ret += shuffleSlips[i % slips.length];
            ret += endTag(headerTag); //now it's an end tag
        }
        if (!onlyHeader) {
            ret += start + shuffleIpsum[i % ipsum.length] + end + extra; //extra doesn't really change anything when rendered as HTML or not, but I'll leave it for kicks
        }
    }
    return ret;
};

UI.registerHelper('slipsum', method); //copied here to be usable in testing



function shuffle(array) { //taken from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function endTag(tag) {
    return tag.replace(/<\s*(\w+).*?>/, '<$1>').replace("<", "</");
}
