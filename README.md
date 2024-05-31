# Scroll-Progress-Bar-Indicator-Project

![Scroll-Progress-Bar-Indicator-Project](Scroll-Progress-bar-Indicator.gif)

State Management:
Four state variables are declared using the useState hook: data to store fetched data, loading to track the loading status, errorMsg to hold error messages, and scrollPercentage to store the percentage of page scrolled.
Fetching Data:
The fetchData function is defined to asynchronously fetch data from the provided URL (getUrl). Upon successful retrieval, it updates the data state with the fetched products and sets loading to false. If there's an error, it logs the error message and sets errorMsg state.
Effect Hook for Data Fetching:
An effect hook (useEffect) is used to trigger the fetchData function when the component mounts or when the url prop changes.
Scroll Percentage Calculation:
The handleScrollPercentage function calculates the scroll percentage by determining how much the page has been scrolled vertically and dividing it by the total height of the document. It updates the scrollPercentage state accordingly.
Effect Hook for Scroll Event Listener:
Another effect hook is used to add a scroll event listener when the component mounts. This listener triggers the handleScrollPercentage function to update the scroll percentage state as the user scrolls.
