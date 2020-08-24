
async function getBooks() {

//  return data;

try { const response = await fetch('http://127.0.0.1:3000/api/books', {mode: 'cors'}); const catData = await response.json(); 
return catData;
}

export default getBooks;
