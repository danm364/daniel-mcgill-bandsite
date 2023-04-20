const api_key = "c9d949b8-3905-4cba-af1d-6cfe9874da94"
request_comments = `https://project-1-api.herokuapp.com/showDates/?api_key=${api_key}`

const showsRequest = axios.get(request_comments)


function createShowContainer() {
    const shows = document.querySelector(".shows")

    //create new elements
    
    //loop through change date/venue/location

    showsRequest.then((response) => {

        const showsData = response.data
        console.log(showsData)
        for (let i = 0; i < showsData.length; i++) {

            //create each element and add class
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


            //set the headers
            venueHeader.innerText = "Venue"
            locationHeader.innerText = "Location"
            dateHeader.innerText = "Date"
            showsBtn.innerText = "BUY TICKETS"

            //glue together entire container for each show
            parentContainer.appendChild(showsContainer).appendChild(showsDate).appendChild(dateHeader)
            dateHeader.insertAdjacentElement("afterend", dateInfo)
            showsDate.insertAdjacentElement("afterend", showsLocation).insertAdjacentElement("afterend", showsVenue)
            showsVenue.appendChild(venueHeader).insertAdjacentElement("afterend", locationInfo)
            showsLocation.appendChild(locationHeader).insertAdjacentElement("afterend", venueInfo)
            showsVenue.insertAdjacentElement("afterend", showsBtn)

            //add data to inner text of show
            venueInfo.innerText = showsData[i].place
            locationInfo.innerText = showsData[i].location

            const formattedDate = new Date(showsData[i].date).toDateString()

            dateInfo.innerText = formattedDate

            console.log(showsData[i].date)
            
            shows.appendChild(parentContainer)

        }
       
    })
    
}

createShowContainer()



//grab an nodelist of all show containers
const parentContainer = document.querySelectorAll('.shows__container')


//make tab index into an ever increasing order for focus
parentContainer.forEach((element, index) => {
    element.tabIndex = index+1;
})
