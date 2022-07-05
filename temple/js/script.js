function toggleMenu() {
    document.getElementById("listNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
  }
    
    const X = document.getElementById(`hamburgerBtn`);  
    X.onclick = toggleMenu;