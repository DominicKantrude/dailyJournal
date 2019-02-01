//One object that has a method rendering the components to the DOM
function renderJournalEntries(parsedEntries){
    parsedEntries.forEach(entry => {
        document.querySelector(".completedEntries").innerHTML +=  makeJournlEntryHtml(entry);
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