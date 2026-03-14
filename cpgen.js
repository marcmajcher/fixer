const data = {
  job: [
    "{client} needs {crew_word} to {mission}. {twist}"
  ],

  crew_word: ["a crew", "a team"],

  client: [
    "{client_intro} {client_type} named {person_name}",
    "An anonymous {client_type} known as {alias}"
  ],

  client_intro: [
    "A foreign",
    "A paranoid",
    "An arrogant",
    "A demanding",
    "A shady",
    "An evasive",
    "A charming",
    "A callous"
  ],

  client_type: [
    "ambassador",
    "government agent",
    "government official",
    "corporate agent",
    "minor executive",
    "media agent",
    "media producer",
    "hacker",
    "cyberterrorist",
    "data broker",
    "freelance fixer"
  ],

  mission: [
    "assassinate {target} and recover their cyberbrain",
    "break into {site} and steal {item}",
    "infiltrate {site} and place network surveillance devices",
    "deliver {item} to {recipient}",
    "extract {target}",
    "sabotage {site}",
    "smuggle {item} into {site}",
    "board {vehicle} and extract {target}"
  ],

  target: [
    "{person_name}, a security executive of {corp}",
    "{person_name}, an engineer of {corp}",
    "{person_name}, an accountant of {corp}",
    "{person_name}, a programmer of {corp}",
    "{person_name}, a research scientist of {corp}"
  ],

  site: [
    "a {corp} facility",
    "a {corp} arcology",
    "a {corp} datavault",
    "a {corp} research lab",
    "a {corp} industrial site",
    "a corporate hospital",
    "a private zoo",
    "a construction site belonging to {corp}"
  ],

  vehicle: [
    "a corporate scramjet",
    "a hypersonic flight to {city}",
    "a supersonic flight to {city}"
  ],

  item: [
    "a black box",
    "a keycard",
    "financial data",
    "a stolen infiltration program",
    "prototype nanotech",
    "a prototype cyberdeck",
    "an advanced cyberbrain",
    "an antique floppy disk",
    "a vintage arcade video game"
  ],

  recipient: [
    "{person_name}, an accountant of {corp}",
    "{person_name}, a programmer of {corp}",
    "{person_name}, a research scientist of {corp}",
    "{corp}"
  ],

  twist: [
    "{however_twist}",
    "{further_twist}",
    "{and_then_twist}",
    "{in_addition_twist}"
  ],

  however_twist: [
    "However, the target offers an attractive counter-proposal.",
    "However, the target turns out to be very hard to kill.",
    "However, the client tries to eliminate them after the job.",
    "However, the job is a trap.",
    "However, the parcel turns out to be very different than described."
  ],

  further_twist: [
    "Further, any collateral damage is unacceptable.",
    "Further, the security surrounding the target is unusually high.",
    "Further, they have only thirty minutes to complete the job.",
    "Further, their work will be recorded via drone for a new holovid series.",
    "Further, several other mercenary teams are expected to try to steal it.",
    "Further, they may have to deal with high radiation."
  ],

  and_then_twist: [
    "And then, they run into unexpected security.",
    "And then, they get caught in an unrelated firefight.",
    "And then, they get caught in an unrelated cyber-terrorist attack.",
    "And then, their electronics randomly fail at a critical moment.",
    "And then, their weapons randomly fail at a critical moment."
  ],

  in_addition_twist: [
    "In addition, they encounter an old enemy on the same job.",
    "In addition, they encounter an old ally now working against them.",
    "In addition, every street gang in the sprawl seems to want to steal it.",
    "In addition, a begrudged smuggler seems determined to sabotage them."
  ],

  corp: [
    "AHH Integrated Armament",
    "AIM Amalgamated Engineering",
    "ExaDev Advanced Defense",
    "STM Media Corporation",
    "Nanogen Global Entertainment"
  ],

  city: ["Amsterdam", "Dubai", "Yokohama", "Johannesburg"],

  person_name: [
    "Jin Yan-Yan",
    "Sydney Albach",
    "Anya Maille",
    "Ivan Lukov",
    "Megara Locke",
    "Carter Tian",
    "Raisa Kosareva",
    "Finnegan Alder"
  ],

  alias: [
    "Neon Rogue",
    "Ghost",
    "Doctor Zero",
    "Chrome Agent",
    "Gothic Demon",
    "Strange Comrade"
  ]
};

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function expand(text) {
  return text.replace(/\{(\w+)\}/g, (_, key) => {
    const table = data[key];
    if (!table) return `{${key}}`;
    return expand(pick(table));
  });
}

function generateJob() {
  return expand(pick(data.job));
}

console.log(generateJob());