
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
            imageUrl: "images/tagaytay.webp"
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
            imageUrl: "images/tanay.webp"
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
            imageUrl: "images/pililla.webp"
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
            imageUrl: "images/mount-samat.webp"
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
            imageUrl: "images/subic.webp"
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
            imageUrl: "images/laiya.webp"
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
            imageUrl: "images/liwliwa.webp"
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
            imageUrl: "images/baler.webp"
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
            imageUrl: "images/baguio.webp"
        }
    ];


    // GET DESTINATION ELEMENTS
    const destinationSelect = document.getElementById("destination-select");
    const destinationDetails = document.getElementById("destination-details");
    const destinationImage = document.getElementById("destination-image");
    const destinationName = document.getElementById("destination-name");
    const destinationDescription = document.getElementById("destination-description");
    const mapsLink = document.getElementById("maps-link");


    // ADD DESTINATIONS TO DROPDOWN
    if (
        destinationSelect &&
        destinationDetails &&
        destinationImage &&
        destinationName &&
        destinationDescription &&
        mapsLink
    ) {
        destinations.forEach(function (destination, index) {
            const option = new Option(destination.name, index);
            destinationSelect.add(option);
        });


        // DISPLAY SELECTED DESTINATION
        destinationSelect.addEventListener("change", function () {

            const selectedIndex = destinationSelect.value;

            // Hide details when no destination is selected
            if (selectedIndex === "") {
                destinationDetails.hidden = true;
                return;
            }

            const destination = destinations[Number(selectedIndex)];

            if (!destination) {
                destinationDetails.hidden = true;
                return;
            }

            // Show destination image
            destinationImage.src = destination.imageUrl;
            destinationImage.alt = destination.name;
            destinationImage.loading = "lazy";

            // Show destination name
            destinationName.textContent = destination.name;

            // Show destination information and estimated budget
            destinationDescription.textContent =
                destination.province +
                " | Round trip: " + destination.roundTripKm + " km" +
                " | Travel time: " + destination.travelHours +
                " | Difficulty: " + destination.difficulty +
                " | Estimated budget: ₱" +
                destination.budgetMin.toLocaleString("en-PH") +
                "-₱" +
                destination.budgetMax.toLocaleString("en-PH") +
                " | Highlights: " + destination.highlights +
                " | Road note: " + destination.roadNote;

            // Create Google Maps directions from Manila
            const destinationAddress =
                destination.name + ", " +
                destination.province + ", Philippines";

            mapsLink.href =
                "https://www.google.com/maps/dir/?api=1" +
                "&origin=" + encodeURIComponent("Manila, Philippines") +
                "&destination=" + encodeURIComponent(destinationAddress);

            // Show destination details
            destinationDetails.hidden = false;
        });
    }
