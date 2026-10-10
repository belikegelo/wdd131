// Wait for DOM to load
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



/* ========================================
   DESTINATION DATA
======================================== */

const destinations = [
    {
        name: "Tagaytay City",
        province: "Cavite",
        roundTripKm: 120,
        travelHoursMin: 1.5,
        travelHoursMax: 2.5,
        budgetMin: 800,
        budgetMax: 1200,
        difficulty: "Easy to Moderate",
        difficultyClass: "easy",
        highlights: [
            "Taal Lake viewpoints",
            "Bulalo restaurants",
            "Scenic ridge roads"
        ],
        roadNote:
            "A good starter ride. Expect traffic near popular viewpoints and on weekends.",
        imageUrl:
            "https://sp-ao.shortpixel.ai/client/to_webp%2Cq_glossy%2Cret_img%2Cw_1024%2Ch_683/https%3A/ocarramedia.com/wp-content/uploads/2025/08/tagaytay-view-lake-taal-volcano-island.webp",
        imageAlt:
            "Scenic view of Taal Lake and Volcano from Tagaytay"
    },

    {
        name: "Tanay / Marilaque",
        province: "Rizal",
        roundTripKm: 140,
        travelHoursMin: 2,
        travelHoursMax: 3,
        budgetMin: 700,
        budgetMax: 1300,
        difficulty: "Moderate",
        difficultyClass: "moderate",
        highlights: [
            "Winding mountain roads",
            "Sierra Madre views",
            "Breakfast stops"
        ],
        roadNote:
            "Take corners carefully. Watch for gravel, blind turns, changing weather, and other riders.",
        imageUrl:
            "https://i0.wp.com/www.traveling-up.com/wp-content/uploads/2015/03/motorcycle-marilaque-road.jpg",
        imageAlt:
            "A motorcycle traveling along a winding mountain road"
    },

    {
        name: "Pililla Wind Farm",
        province: "Rizal",
        roundTripKm: 170,
        travelHoursMin: 2.5,
        travelHoursMax: 3.5,
        budgetMin: 900,
        budgetMax: 1500,
        difficulty: "Moderate",
        difficultyClass: "moderate",
        highlights: [
            "Wind turbines",
            "Rolling green hills",
            "Scenic photo stops"
        ],
        roadNote:
            "Check the weather before riding and use safe, designated stopping areas for photos.",
        imageUrl:
            "https://ak-d.tripcdn.com/images/1mi0612000c4uv4sgB28E.jpg?proc=source%2Ftrip",
        imageAlt:
            "Wind turbines on the green hills of Pililla"
    },

    {
        name: "Mount Samat",
        province: "Bataan",
        roundTripKm: 240,
        travelHoursMin: 3,
        travelHoursMax: 4,
        budgetMin: 1100,
        budgetMax: 1700,
        difficulty: "Moderate",
        difficultyClass: "moderate",
        highlights: [
            "Dambana ng Kagitingan",
            "Mountain scenery",
            "Historical landmarks"
        ],
        roadNote:
            "Allow time for breaks and check visitor access and opening hours before departure.",
        imageUrl:
            "https://i0.wp.com/jayexiomo.com/wp-content/uploads/2024/04/img_3962.jpg?fit=1200%2C900&ssl=1",
        imageAlt:
            "The Shrine of Valor at Mount Samat in Bataan"
    },

    {
        name: "Subic Bay",
        province: "Zambales",
        roundTripKm: 280,
        travelHoursMin: 3,
        travelHoursMax: 4.5,
        budgetMin: 1100,
        budgetMax: 1800,
        difficulty: "Moderate",
        difficultyClass: "moderate",
        highlights: [
            "Waterfront views",
            "Marina and boardwalk",
            "Restaurants and cafes"
        ],
        roadNote:
            "Check your route carefully and allow extra time for traffic and stops around the bay.",
        imageUrl:
            "https://mdw-travel-data-us-east-1.s3.amazonaws.com/img/country/Philippines/Subic-Bay-Yacht-Club/img_00.jpg",
        imageAlt:
            "Boats and waterfront scenery at Subic Bay Yacht Club"
    },

    {
        name: "Laiya Beach",
        province: "San Juan, Batangas",
        roundTripKm: 300,
        travelHoursMin: 3.5,
        travelHoursMax: 4.5,
        budgetMin: 1300,
        budgetMax: 2100,
        difficulty: "Moderate",
        difficultyClass: "moderate",
        highlights: [
            "Sandy beaches",
            "Coastal scenery",
            "Beach resorts"
        ],
        roadNote:
            "Confirm resort entrance fees and parking costs before visiting. Some beaches have paid access.",
        imageUrl:
            "https://static.wixstatic.com/media/b04e45_74349198202c4dfaa6cf057bb3825c43~mv2.jpg/v1/fill/w_980%2Ch_735%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Playa%20Laiya%20Beach%20Front%20Lot_JPG.jpg",
        imageAlt:
            "Sandy beach and blue water at Laiya in Batangas"
    },

    {
        name: "Liwliwa Beach",
        province: "San Felipe, Zambales",
        roundTripKm: 360,
        travelHoursMin: 4,
        travelHoursMax: 5.5,
        budgetMin: 1500,
        budgetMax: 2500,
        difficulty: "Challenging",
        difficultyClass: "challenging",
        highlights: [
            "Surfing and beach views",
            "Relaxed coastal atmosphere",
            "Mountain scenery"
        ],
        roadNote:
            "A longer ride. Check the weather, rest when tired, and avoid riding through the night.",
        imageUrl:
            "https://dessilverio.wordpress.com/wp-content/uploads/2019/10/no-watermark-surfing-skim-board-budget-beach-surf-mountain-backdrop-agoho-trees-like-pine-liwliwa-san-felipe-zambales.jpg?w=768",
        imageAlt:
            "Liwliwa Beach with surfers and mountains in the background"
    },

    {
        name: "Baler",
        province: "Aurora",
        roundTripKm: 470,
        travelHoursMin: 5.5,
        travelHoursMax: 7,
        budgetMin: 2200,
        budgetMax: 3500,
        difficulty: "Challenging",
        difficultyClass: "challenging",
        highlights: [
            "Sabang Beach",
            "Surfing spots",
            "Sierra Madre scenery"
        ],
        roadNote:
            "Plan an overnight stay. Mountain sections can be steep and winding; check road and weather conditions.",
        imageUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Baler_Aurora.jpg?width=1200",
        imageAlt:
            "Coastal scenery in Baler, Aurora"
    },

    {
        name: "Baguio City",
        province: "Benguet",
        roundTripKm: 490,
        travelHoursMin: 5,
        travelHoursMax: 7,
        budgetMin: 2500,
        budgetMax: 3800,
        difficulty: "Challenging",
        difficultyClass: "challenging",
        highlights: [
            "Cool mountain weather",
            "Burnham Park",
            "Pine-covered scenery"
        ],
        roadNote:
            "Plan an overnight stay, check mountain weather, and allow enough time for rest and daylight riding.",
        imageUrl:
            "https://baguiotransient.net/_next/image?q=75&url=%2Fburnham.webp&w=3840",
        imageAlt:
            "Burnham Park in Baguio City"
    }
];


/* ========================================
   PAGE ELEMENTS
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const destinationGrid =
        document.querySelector("#destination-grid");

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const resultsCount =
        document.querySelector("#results-count");

    // Stop if the destination elements are not on this page.
    if (!destinationGrid || !resultsCount) {
        return;
    }

    // Budget threshold for the Budget Friendly filter.
    const budgetFriendlyLimit = 1500;

    // Currency formatting.
    function formatPeso(amount) {
        return "₱" + amount.toLocaleString("en-PH");
    }

    // Escape text before inserting it into HTML.
    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, function (character) {
            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };

            return entities[character];
        });
    }


    /* ========================================
       CREATE A DESTINATION CARD
    ======================================== */

    function createDestinationCard(destination) {

        const mapUrl = new URL(
            "https://www.google.com/maps/dir/"
        );

        mapUrl.searchParams.set("api", "1");
        mapUrl.searchParams.set(
            "origin",
            "Manila, Philippines"
        );

        mapUrl.searchParams.set(
            "destination",
            destination.name + ", " +
            destination.province + ", Philippines"
        );

        mapUrl.searchParams.set("travelmode", "driving");

        const highlights =
            destination.highlights
                .map(escapeHTML)
                .join(" &bull; ");

        return `
            <section class="destination-card">

                <img
                    class="destination-image"
                    src="${escapeHTML(destination.imageUrl)}"
                    alt="${escapeHTML(destination.imageAlt)}"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="500">

                <div class="destination-card-content">

                    <div class="destination-card-topline">
                        <span class="destination-province">
                            ${escapeHTML(destination.province)}
                        </span>

                        <span class="difficulty-tag ${destination.difficultyClass}">
                            ${escapeHTML(destination.difficulty)}
                        </span>
                    </div>

                    <h3>${escapeHTML(destination.name)}</h3>

                    <p class="destination-highlights">
                        ${highlights}
                    </p>

                    <dl class="destination-stats">

                        <div>
                            <dt>Round-trip distance</dt>
                            <dd>
                                ${destination.roundTripKm.toLocaleString("en-PH")} km
                            </dd>
                        </div>

                        <div>
                            <dt>One-way riding time</dt>
                            <dd>
                                ${destination.travelHoursMin}–${destination.travelHoursMax} hrs
                            </dd>
                        </div>

                        <div class="budget-stat">
                            <dt>Estimated budget per rider</dt>
                            <dd>
                                ${formatPeso(destination.budgetMin)}
                                – ${formatPeso(destination.budgetMax)}
                            </dd>
                        </div>

                    </dl>

                    <p class="destination-road-note">
                        <strong>Riding notes:</strong>
                        ${escapeHTML(destination.roadNote)}
                    </p>

                    <a
                        class="destination-map-link"
                        href="${escapeHTML(mapUrl.toString())}"
                        target="_blank"
                        rel="noopener noreferrer">
                        Open in Google Maps
                    </a>

                </div>

            </section>
        `;
    }


    /* ========================================
       FILTER DESTINATIONS
    ======================================== */

    function filterDestinations(filterType) {

        let filteredDestinations = destinations.slice();

        switch (filterType) {

            case "budget":
                // Only show destinations with a budget
                // range that stays within the threshold.
                filteredDestinations =
                    destinations.filter(function (destination) {
                        return destination.budgetMax <= budgetFriendlyLimit;
                    });

                filteredDestinations.sort(function (a, b) {
                    return a.budgetMin - b.budgetMin;
                });

                break;


            case "nearest":
                // Show the three shortest round-trip distances.
                filteredDestinations.sort(function (a, b) {
                    return a.roundTripKm - b.roundTripKm;
                });

                filteredDestinations =
                    filteredDestinations.slice(0, 3);

                break;


            case "farthest":
                // Show the three longest round-trip distances.
                filteredDestinations.sort(function (a, b) {
                    return b.roundTripKm - a.roundTripKm;
                });

                filteredDestinations =
                    filteredDestinations.slice(0, 3);

                break;


            case "shortest":
                // Show the three shortest estimated one-way rides.
                filteredDestinations.sort(function (a, b) {
                    return a.travelHoursMin - b.travelHoursMin;
                });

                filteredDestinations =
                    filteredDestinations.slice(0, 3);

                break;


            case "longest":
                // Show the three longest estimated one-way rides.
                filteredDestinations.sort(function (a, b) {
                    return b.travelHoursMax - a.travelHoursMax;
                });

                filteredDestinations =
                    filteredDestinations.slice(0, 3);

                break;


            case "all":
            default:
                // Keep all nine destinations.
                filteredDestinations = destinations.slice();
        }


        // Generate the HTML for the filtered destinations.
        if (filteredDestinations.length > 0) {

            destinationGrid.innerHTML =
                filteredDestinations
                    .map(createDestinationCard)
                    .join("");

        } else {

            destinationGrid.innerHTML = `
                <p class="no-results">
                    No destinations match this filter.
                    Try another option.
                </p>
            `;
        }


        // Update the result count.
        resultsCount.textContent =
            "Showing " + filteredDestinations.length +
            " of " + destinations.length + " destinations.";
    }


    /* ========================================
       FILTER BUTTON EVENTS
    ======================================== */

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Get the filter from the clicked button.
            const selectedFilter = button.dataset.filter;

            // Highlight the selected filter.
            filterButtons.forEach(function (filterButton) {
                filterButton.classList.remove("is-active");
                filterButton.setAttribute("aria-pressed", "false");
            });

            button.classList.add("is-active");
            button.setAttribute("aria-pressed", "true");

            // Display the matching destination cards.
            filterDestinations(selectedFilter);
        });

    });


    /* ========================================
       INITIAL PAGE LOAD
    ======================================== */

    filterDestinations("all");

});
