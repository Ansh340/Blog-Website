// Nav Background
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeButtons = document.querySelectorAll('.close');
    
    // Open modals
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'block';
    });
    
    signupBtn.addEventListener('click', function(e) {
        e.preventDefault();
        signupModal.style.display = 'block';
    });
    
    // Close modals
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        });
    });
    
    // Close when clicking outside modal
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === signupModal) {
            signupModal.style.display = 'none';
        }
    });
    
    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Here you would typically send this data to your server
        console.log('Login attempt with:', { email, password });
        
        // For demo purposes, just show an alert
        alert(`Login attempt for ${email}`);
        
        // Reset form and close modal
        this.reset();
        loginModal.style.display = 'none';
    });
    
    // Signup form submission
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        
        // Here you would typically send this data to your server
        console.log('Signup attempt with:', { fullName, email, password });
        
        // For demo purposes, just show an alert
        alert(`Account created for ${fullName} (${email})`);
        
        // Reset form and close modal
        this.reset();
        signupModal.style.display = 'none';
    });
});

// Filter
document.addEventListener("DOMContentLoaded", () => {
    const filterItems = document.querySelectorAll(".filter-item");
    const postBoxes = document.querySelectorAll(".post-box");

    filterItems.forEach(item => {
        item.addEventListener("click", () => {
            const value = item.getAttribute("data-filter");

            // Add active class
            filterItems.forEach(i => i.classList.remove("active-filter"));
            item.classList.add("active-filter");

            // Filter logic
            if (value === "all") {
                postBoxes.forEach(box => {
                    box.style.display = "block";
                });
            } else {
                postBoxes.forEach(box => {
                    if (box.classList.contains(value)) {
                        box.style.display = "block";
                    } else {
                        box.style.display = "none";
                    }
                });
            }
        });
    });
});
