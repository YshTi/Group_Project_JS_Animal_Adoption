import { createModalMarkup } from './animal_detail.js'; 



async function fetchPetById() {
  try {
    const response = await fetch(`https://paw-hut.b.goit.study/api/animals`);
    if (!response.ok) throw new Error("Помилка запиту");
    
    const data = await response.json();
    
    console.log("Отримана тваринка:", data[0]); 
    return data[0]; 
  } catch (error) {
    console.error("Помилка:", error);
  }
}