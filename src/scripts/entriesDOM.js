//One object that has a method rendering the components to the DOM
function renderJournalEntries(cachedEntries) {
    domTarget = document.querySelector(".completedEntries")
    domTarget.innerHTML = "";
    cachedEntries.forEach(entry => {
        domTarget.innerHTML += makeJournlEntryHtml(entry);
    });
}

const makeJournlEntryHtml = (entry) => {
    return `
<section class="entry">
<h1>${entry.concept}</h1>
<p>${entry.date}</p>
<p>${entry.entry}</p>
<p>${entry.mood}</p>
</section>
`
}

const getSpecificMoods = (mood) => {

    filterByMoodArrray = cachedEntries.filter(entry => {
        if (entry.mood === mood) {
            return entry
        }
    })
    renderJournalEntries(filterByMoodArrray)
}