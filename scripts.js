



document.querySelector('.dropdown a').addEventListener('click', function(e){
    e.preventDefault();
    let menu = document.querySelector('dropdown-content');
    menu.style.display = (menu.style.display === 'block') ? 'none': 'block';
});

//Toggle Dropdown Visibility
function ToggleDropdown(id, buttonElement){
    const content = document.getElementById(id);

    //Toggle the open class
    content.classList.toggle('open');
    buttonElement.classList.toggle('active');

    //Function to handle category selection
    function filterCategory(categoryName){
        console.log("Filtering products by category:", categoryName);

        //Example: Redirect to category URL or filter products dynamically
        //window.location.href = 
    }
}


//Toggle Dropdown Visibility
function ToggleDropdown(id, buttonElement){
    const content = document.getElementById(id);

    //Toggle the open class
    content.classList.toggle('open');
    buttonElement.classList.toggle('active');

    //Function to handle category selection
    function filterCategory(typeName){
        console.log("Filtering products by type:", typeName);

        //Example: Redirect to category URL or filter products dynamically
        //window.location.href = 
    }
}
document.querySelector('.dropdown a').addEventListener('click', function(e){
    e.preventDefault();
    let menu = document.querySelector('dropdown-content');
    menu.style.display = (menu.style.display === 'block') ? 'none': 'block';
});

 
    // Interactive quantity counter
    const countEl = document.getElementById('quantity-count');
    let count = 1;

    document.getElementById('increment').addEventListener('click', () => {
      count++;
      countEl.textContent = count;
    });

    document.getElementById('decrement').addEventListener('click', () => {
      if (count > 1) {
        count--;
        countEl.textContent = count;
      }
    });

    
    const countEl = document.getElementById('quantity-count');
    let count = 1;

    document.getElementById('increment').addEventListener('click', () => {
      count++;
      countEl.textContent = count;
    });

    document.getElementById('decrement').addEventListener('click', () => {
      if (count > 1) {
        count--;
        countEl.textContent = count;
      }
    });
    
const dropdown = document.getElementById('latestDropdown');
const latestLink = document.getElementById('latestLink');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const navItems = document.querySelectorAll('.nav-item');
const pageSections = document.querySelectorAll('.page-section');

// Toggle dropdown menu display when clicking "Latest"
latestLink.addEventListener('click', function(e) {
  e.preventDefault();
  dropdown.classList.toggle('active');
});

// Switch content section on same page when clicking dropdown links
dropdownItems.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    // Get the target section ID from data-target attribute
    const targetId = this.getAttribute('data-target');

    // Hide all sections on the page
    pageSections.forEach(section => section.classList.remove('active'));

    // Display the clicked section on the homepage
    document.getElementById(targetId).classList.add('active');

    // Close dropdown menu
    dropdown.classList.remove('active');
  });
});

// Click "Home" to return to default homepage content
navItems.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    
    pageSections.forEach(section => section.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('active');
  }
});
  
document.addEventListener("DOMContentLoaded", () => {
  // Quantity adjustment logic
  document.querySelectorAll("tr[data-price]").forEach((row) => {
    const plusBtn = row.querySelector(".plus");
    const minusBtn = row.querySelector(".minus");
    const qtyInput = row.querySelector(".qty-input");
    const totalPriceEl = row.querySelector(".total-price");
    const unitPrice = parseFloat(row.getAttribute("data-price"));

    function updateRowTotal() {
      let currentQty = parseInt(qtyInput.value) || 1;
      let total = currentQty * unitPrice;
      totalPriceEl.textContent = `$${total.toFixed(2)}`;
    }

    plusBtn.addEventListener("click", () => {
      qtyInput.value = parseInt(qtyInput.value) + 1;
      updateRowTotal();
    });

    minusBtn.addEventListener("click", () => {
      if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
        updateRowTotal();
      }
    });
  });

  // Scroll to top button logic
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const plusBtn = document.getElementById("plus-btn");
  const minusBtn = document.getElementById("minus-btn");
  const qtyInput = document.getElementById("qty-input");

  plusBtn.addEventListener("click", function () {
    qtyInput.value = parseInt(qtyInput.value) + 1;
  });

  minusBtn.addEventListener("click", function () {
    let val = parseInt(qtyInput.value);
    if (val > 1) {
      qtyInput.value = val - 1;
    }
  });
});


  </section>

  <!-- Optional JS to switch/show section on click -->
  
    function showAboutPage(event) {
      event.preventDefault();
      const aboutSection = document.getElementById('about-section');
      aboutSection.style.display = 'block';
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  

    // JavaScript file ready for custom interactive functions if needed
document.addEventListener('DOMContentLoaded', () => {
    console.log('About page loaded successfully.');
});



document.addEventListener("DOMContentLoaded", () => {
  // Select all feature cards
  const cards = document.querySelectorAll(".feature-card");

  // Add click event listener to each card
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.getAttribute("data-title");
      console.log(`Clicked feature: ${title}`);
      
      // Optional interactive effect (e.g., brief highlight feedback)
      card.style.transform = "scale(0.98)";
      setTimeout(() => {
        card.style.transform = "";
      }, 150);
    });
  });
});

// Re-triggers the slideshow animation every time the page or Home link is clicked
function triggerSlideshow() {
  const animatedItems = document.querySelectorAll(".animate-item");

  animatedItems.forEach((item) => {
    item.style.animation = "none";
    item.offsetHeight; // Force reflow to reset CSS animation
    item.style.animation = "";
  });
}

// Play slideshow on initial load
document.addEventListener("DOMContentLoaded", () => {
  triggerSlideshow();

  // If you have a Home navigation link, re-run animation on click
  const homeNavBtn = document.querySelector('a[href="#home"], .home-btn');
  if (homeNavBtn) {
    homeNavBtn.addEventListener("click", () => {
      triggerSlideshow();
    });
  }
});

// Re-triggers the slideshow animation whenever the Home page/tab is opened or refreshed
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-item");

  animatedElements.forEach((el) => {
    el.style.animation = "none";
    el.offsetHeight; // Forces DOM reflow so CSS animations reset properly
    el.style.animation = "";
  });
});

const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevents page reload / '?' in URL

    const email = document.getElementById("email-address").value;
    const amountInNaira = document.getElementById("amount").value;

    let handler = PaystackPop.setup({
        // Standard test key to trigger popup immediately:
        key: 'pk_test_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0', 
        email: email,
        amount: amountInNaira * 100, // Converts ₦30,000 to kobo (3000000)
        currency: 'NGN',
        ref: 'CLOTH_' + Math.floor((Math.random() * 1000000000) + 1),
        onClose: function() {
            alert('Transaction was not completed.');
        },
        callback: function(response) {
            alert('Payment successful! Reference: ' + response.reference);
        }
    });

    handler.openIframe(); // Opens the Paystack popup window
});

const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-address").value;
    const amountInDollars = document.getElementById("amount").value;

    let handler = PaystackPop.setup({
        // Replace with your actual Paystack Public Key (starts with pk_test_ or pk_live_)
        key: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxx', 
        email: email,
        amount: amountInDollars * 100, // $50 converts to 5000 cents
        currency: 'USD',
        ref: 'CLOTH_' + Math.floor((Math.random() * 1000000000) + 1),
        onClose: function() {
            alert('Transaction cancelled.');
        },
        callback: function(response) {
            alert('Payment Successful! Transaction Ref: ' + response.reference);
            // Money settles directly into your linked bank account!
        }
    });

    handler.openIframe(); // Displays the secure Paystack popup window
});

const payButton = document.getElementById('pay-btn'); // Make sure your button has id="pay-btn"

payButton.addEventListener('click', function(e) {
    e.preventDefault(); // Stops form from refreshing the current page
    
    // Redirects to your new page:
    window.location.href = 'proceed-to-pay.html'; 
});