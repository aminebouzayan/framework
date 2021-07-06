let darkMode = window.localStorage.getItem("darkMode")
let darkModeToggle = document.getElementById('darkModeToggle');

if (darkMode === "enabled") {
   document.body.classList.add('darkMode');
   localStorage.setItem('darkMode', "enabled");
}

darkModeToggle.addEventListener('click', () => {
   let body = document.body;
   darkMode = localStorage.getItem("darkMode");

   if (darkMode === "enabled") {

      body.classList.remove('darkMode');
      localStorage.setItem('darkMode', "disabled");

   } else {

      body.classList.add('darkMode');
      localStorage.setItem('darkMode', "enabled");

   }
});