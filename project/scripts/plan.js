
document.addEventListener('DOMContentLoaded', function() {
    // Get hamburger button and nav menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    // Toggle menu on hamburger click
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link (mobile)
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Dynamic year in footer
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    // Last modified date
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
});

const destinations = [
        {
            name: "Tagaytay City",
            province: "Cavite",
            roundTripKm: 120,
            travelHours: "1.5-2.5 hours",
            budgetMin: 800,
            budgetMax: 1200,
            difficulty: "Easy to Moderate",
            highlights: "Taal Lake, bulalo restaurants, scenic views",
            roadNote: "Expect traffic on weekends.",
            imageUrl: "https://res.klook.com/image/upload/w_500,h_313,c_fill,q_85/activities/dgcekk1woacha5fgzayn.jpg"
        },
        {
            name: "Tanay / Marilaque",
            province: "Rizal",
            roundTripKm: 140,
            travelHours: "2-3 hours",
            budgetMin: 700,
            budgetMax: 1300,
            difficulty: "Moderate",
            highlights: "Mountain roads, Sierra Madre views, cafes",
            roadNote: "Watch for blind corners and gravel.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTuKz8CoApFl2AnfSKxoVf-kZSIzHAljGJR445zS4insCcWTDXvmaTn5g&s=10"
        },
        {
            name: "Pililla Wind Farm",
            province: "Rizal",
            roundTripKm: 170,
            travelHours: "2.5-3.5 hours",
            budgetMin: 900,
            budgetMax: 1500,
            difficulty: "Moderate",
            highlights: "Wind turbines, green hills, photo spots",
            roadNote: "Check the weather before riding.",
            imageUrl: "https://static.wixstatic.com/media/941b16_3e7cd313899f42cdb1a05aa11c4e4092~mv2.jpg/v1/fill/w_1620,h_1080,al_c/941b16_3e7cd313899f42cdb1a05aa11c4e4092~mv2.jpg"
        },
        {
            name: "Mount Samat",
            province: "Bataan",
            roundTripKm: 240,
            travelHours: "3-4 hours",
            budgetMin: 1100,
            budgetMax: 1700,
            difficulty: "Moderate",
            highlights: "Dambana ng Kagitingan, mountain scenery",
            roadNote: "Check opening hours before departure.",
            imageUrl: "https://bataan.gov.ph/wp-content/uploads/2021/09/DJI_0971-scaled.jpg"
        },
        {
            name: "Subic Bay",
            province: "Zambales",
            roundTripKm: 280,
            travelHours: "3-4.5 hours",
            budgetMin: 1100,
            budgetMax: 1800,
            difficulty: "Moderate",
            highlights: "Waterfront views, cafes, restaurants",
            roadNote: "Allow extra time for traffic.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfBPaiJzJ5YuhimdI90Zj-C4d6pX6ikRqeO5YBb6yfj4LA8ke-gBGS5Ly&s=10"
        },
        {
            name: "Laiya Beach",
            province: "Batangas",
            roundTripKm: 300,
            travelHours: "3.5-4.5 hours",
            budgetMin: 1300,
            budgetMax: 2100,
            difficulty: "Moderate",
            highlights: "Beaches, resorts, coastal scenery",
            roadNote: "Check beach entrance and parking fees.",
            imageUrl: "https://www.philippinebeaches.org/wp-content/uploads/2017/03/La-Luz.jpg"
        },
        {
            name: "Liwliwa Beach",
            province: "Zambales",
            roundTripKm: 360,
            travelHours: "4-5.5 hours",
            budgetMin: 1500,
            budgetMax: 2500,
            difficulty: "Challenging",
            highlights: "Surfing, beach views, mountain scenery",
            roadNote: "Plan rest stops for this longer ride.",
            imageUrl: "https://i0.wp.com/transitpinas.com/wp-content/uploads/2023/07/FB_IMG_1688282911653.jpg?resize=604%2C340&ssl=1"
        },
        {
            name: "Baler",
            province: "Aurora",
            roundTripKm: 470,
            travelHours: "5.5-7 hours",
            budgetMin: 2200,
            budgetMax: 3500,
            difficulty: "Challenging",
            highlights: "Sabang Beach, surfing, coastal scenery",
            roadNote: "An overnight stay is recommended.",
            imageUrl: "https://images.summitmedia-digital.com/spotph/images/2017/11/02/Baler_DicasalarinCove.jpg"
        },
        {
            name: "Baguio City",
            province: "Benguet",
            roundTripKm: 490,
            travelHours: "5-7 hours",
            budgetMin: 2500,
            budgetMax: 3800,
            difficulty: "Challenging",
            highlights: "Cool weather, Burnham Park, mountain views",
            roadNote: "Prepare for winding roads and changing weather.",
            imageUrl: "https://newsinfo.inquirer.net/files/2026/03/Mirador-Hill-baguio-21march2026-scaled.jpg"
        }
    ];


// GET HTML ELEMENTS
const destinationSelect = document.getElementById("destination-select");
const destinationResult = document.getElementById("destination-result");
const destinationName = document.getElementById("destination-name");
const destinationImage = document.getElementById("destination-image");
const mapsLink = document.getElementById("maps-link");
const checkboxes = document.querySelectorAll(".save-checkbox");

// KEY USED TO SAVE THE PLAN
const storageKey = "ridemotoPlan";


// LOAD SAVED DATA
let savedPlan = {};

try {
    savedPlan = JSON.parse(localStorage.getItem(storageKey)) || {};
} catch (error) {
    savedPlan = {};
}


// ADD DESTINATIONS TO THE DROPDOWN
destinations.forEach(function (destination) {
    const option = new Option(destination.name, destination.name);
    destinationSelect.add(option);
});


// RESTORE THE SELECTED DESTINATION
if (savedPlan.destination) {
    destinationSelect.value = savedPlan.destination;
}


// RESTORE CHECKBOXES
checkboxes.forEach(function (checkbox) {
    if (
        savedPlan.checkboxes &&
        savedPlan.checkboxes[checkbox.id] !== undefined
    ) {
        checkbox.checked = savedPlan.checkboxes[checkbox.id];
    }
});


// SAVE DESTINATION AND CHECKBOXES
function savePlan() {
    const planData = {
        destination: destinationSelect.value,
        checkboxes: {}
    };

    checkboxes.forEach(function (checkbox) {
        planData.checkboxes[checkbox.id] = checkbox.checked;
    });

    localStorage.setItem(storageKey, JSON.stringify(planData));
}


// SHOW THE SELECTED DESTINATION
function showDestination() {
    const selectedDestination = destinations.find(function (destination) {
        return destination.name === destinationSelect.value;
    });

    if (!selectedDestination) {
        destinationResult.classList.remove("show");
        return;
    }

    destinationName.textContent = selectedDestination.name;

    destinationImage.src = selectedDestination.imageUrl;
    destinationImage.alt = selectedDestination.name;

    const address =
        selectedDestination.name + ", " +
        selectedDestination.province + ", Philippines";

    mapsLink.href =
        "https://www.google.com/maps/dir/?api=1" +
        "&origin=" + encodeURIComponent("Manila, Philippines") +
        "&destination=" + encodeURIComponent(address);

    destinationResult.classList.add("show");
}


// WHEN THE DESTINATION CHANGES
destinationSelect.addEventListener("change", function () {
    showDestination();
    savePlan();
});


// SAVE EACH CHECKBOX WHEN IT CHANGES
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", savePlan);
});


// DISPLAY SAVED DESTINATION AFTER REFRESH
showDestination();
