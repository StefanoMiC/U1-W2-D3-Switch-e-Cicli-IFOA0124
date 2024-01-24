const animalsArr = [
  { name: "Goldy", species: "goldfish", age: 1, colors: ["orange", "black", "white"] },
  { name: "Fuffy", species: "dog", age: 6, colors: ["brown", "black", "white"] },
  { name: "Bam Bam", species: "rabbit", age: 2, colors: ["white", "red"] },
  { name: "Furia", species: "horse", age: 5, colors: ["brown", "black"] }
];

const names = [];

for (let i = 0; i < animalsArr.length; i++) {
  // const name = animalsArr[i].name
  const animalObj = animalsArr[i];
  const name = animalObj.name;

  if (animalObj.species === "horse") {
    animalObj.wild = true;
  } else {
    animalObj.wild = false;
  }

  names.push(name);
}

console.log(names);
