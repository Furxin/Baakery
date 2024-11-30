function showMore(cardId) {
  const card = document.getElementById(cardId);
  const text = document.createElement('p');
  
  text.innerText = "Here's more information about this section. We dive deeper into our values and goals, ensuring you know what drives us!";
  text.style.marginTop = '15px';
  
  card.appendChild(text);
  
  // Disable button after clicking
  const button = card.querySelector('button');
  button.disabled = true;
  button.innerText = "Thank You!";
  button.style.backgroundColor = "#999";
}
