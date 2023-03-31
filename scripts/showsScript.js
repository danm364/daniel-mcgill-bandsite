const showsData = [
    {
        date: "Mon Sept 06 2021",
        name: "Ronald Lane",
        location: "San Francisco, CA"
    },

    {
        date: "Tue Sept 21 2021",
        name: "Pier 3 East",
        location: "San Francisco, CA"
    },

    {
        date: "Fri Oct 15 2021",
        name: "View Lounge",
        location: "San Francisco, CA"
    },

    {
        date: "Sat Nov 06 2021",
        name: "Hyatt Agency",
        location: "San Francisco, CA"
    },

    {
        date: "Fri Nov 26 2021",
        name: "Moscow Center",
        location: "San Francisco, CA"
    },

    {
        date: "Wed Dec 15 2021",
        name: "Press Club",
        location: "San Francisco, CA"
    },

]


function createShowContainer() {
    const shows = document.querySelector(".shows")

    //create new elements
    
    //loop through change date/venue/location


    for (let i = 0; i < showsData.length; i++) {
        const parentContainer = document.createElement('div');
        parentContainer.classList.add("shows__container") // shows__container
        const showsContainer = document.createElement('form');// shows__form
        showsContainer.classList.add("shows__form")
        const showsLocation = document.createElement("div");
        showsLocation.classList.add("shows__location") // shows__location
        const showsDate = document.createElement("div");
        showsDate.classList.add("shows__date")
        const showsVenue = document.createElement("div");
        showsVenue.classList.add("shows__venue")
        const locationHeader = document.createElement("h3");
        locationHeader.classList.add("shows__header-info")
        const showsBtn = document.createElement("button");
        showsBtn.classList.add("shows__ticket-btn")
        const dateHeader = document.createElement("h3");
        dateHeader.classList.add("shows__header-info")
        const venueHeader = document.createElement("h3");
        venueHeader.classList.add("shows__header-info")
        let dateInfo = document.createElement("p");
        dateInfo.classList.add("shows__date-info")
        let venueInfo = document.createElement("p");
        venueInfo.classList.add("shows__venue-info")
        let locationInfo = document.createElement("p");
        locationInfo.classList.add("shows__location-info")

        venueHeader.innerText = "Venue"
        locationHeader.innerText = "Location"
        dateHeader.innerText = "Date"
        showsBtn.innerText = "BUY TICKETS"

    //dateHeader.innerText = "01/01/23"
        parentContainer.appendChild(showsContainer).appendChild(showsDate).appendChild(dateHeader)
        dateHeader.insertAdjacentElement("afterend", dateInfo)
        showsDate.insertAdjacentElement("afterend", showsLocation).insertAdjacentElement("afterend", showsVenue)
        showsVenue.appendChild(venueHeader).insertAdjacentElement("afterend", venueInfo)
        showsLocation.appendChild(locationHeader).insertAdjacentElement("afterend", locationInfo)
        showsVenue.insertAdjacentElement("afterend", showsBtn)


        venueInfo.innerText = showsData[i].name
        locationInfo.innerText = showsData[i].location
        dateInfo.innerText = showsData[i].date
        
        shows.appendChild(parentContainer)

    }
    
}

createShowContainer()