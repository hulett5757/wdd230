function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
  }
    
    const X = document.getElementById(`hamburgerBtn`);  
    X.onclick = toggleMenu;