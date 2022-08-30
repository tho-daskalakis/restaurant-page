function clearMain() {
  const main = document.querySelector(".main");
  [...main.childNodes].forEach((child) => main.removeChild(child));
}

export { clearMain };
