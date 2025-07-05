function filterProjects(type) {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.style.display = (type === 'all' || card.dataset.type === type) ? 'block' : 'none';
      });
    }

    function validateForm(event) {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return false;
      }
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Enter a valid email.");
        return false;
      }
      alert("Message sent successfully!");
      event.target.reset();
      return true;
    }