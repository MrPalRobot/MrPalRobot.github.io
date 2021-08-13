/* .js files add interaction to your website */
/* email */
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  
  scriptBtn.addEventListener("click", generateScript);

}

function generateScript() {
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var concern = document.getElementById("concern").value
;
displayScript.innerHTML = "As-salamu alaykum, my name is " + name + " and I am from " + location + ". I am calling to ask you to further support Yemen during its ongoing humanitarian crisis. Helping Yemen is a duty that is necessary for us to take. It is important because " + concern + ". Please support Yemen to ensure it's future generation isn't wasted. Thank you. Best regards, " + name + ".";
}

/* fact */
var factList = [
"Four million people have been forced to flee their homes",
"One million are living in unplanned camps",
"Eight out of ten live below the poverty line",
"20 million people need humanitarian aid",
"Five million people are at risk of famine",
"Two million children are out of school",
"15 million need water and sanitation support",
"More than 100,000 people have been killed",
"Nine million people have had their food assistance halved",
"One child every ten minutes dies of a preventable disease",
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);

}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
