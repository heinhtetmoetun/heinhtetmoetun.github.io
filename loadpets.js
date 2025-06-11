const pets = [
    {"name": "Buddy", "type": "Dog", "age": 3, "image": "image/dogs/dog01.jpg"},
    {"name": "Buddy", "type": "Dog", "age": 3, "image": "image/dogs/dog02.jpg"},
    {"name": "Whiskers", "type": "Cat", "age": 2, "image": "image/cats/cat01.jpg"},
    {"name": "Mittens", "type": "Cat", "age": 2, "image": "image/cats/cat02.jpg"},
  
  ]
  
  function loadPets() {
    console.log('Loading pets...');
    const petList = document.getElementById('pet-list');
    pets.forEach(pet => {
      const petItem = document.createElement('div');
      petItem.className = 'pet';
      petItem.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
        <button onclick="adoptPet()">Adopt Now</button>
    `;
      petList.appendChild(petItem);
    });
  }
  document.addEventListener('DOMContentLoaded', loadPets);
  console.log('Pets loaded successfully.');