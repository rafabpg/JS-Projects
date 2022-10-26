const input = document.getElementById("input_screen");
const words = document.getElementById("words");
const char = document.getElementById("characters");
const lines = document.getElementById("lines");
const symbols = document.getElementById("symbols");
const counter = document.querySelector(".counter_words");

function countWords(event){
    if(event.target.value.trim().length !== 0){
        console.log("entrou");
        counter.classList.remove('hidden');
        char.innerHTML =  event.target.value.length + " characters"; 
        lines.innerHTML =  event.target.valuesplit("\n").length + " lines"; 
        words.innerHTML =  event.target.value.trim().split(/\s+/).length + " words"; 
        symbols.innerHTML =  event.target.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + " symbols";
    }
    if(event.target.value.trim().length === 0){
        counter.classList.add('hidden');
    }
}
input.addEventListener('input',countWords);