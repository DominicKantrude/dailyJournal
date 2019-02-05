//todo at some point i should probably abstart where i pull the information from the dom
//have duplicated code and will probablly improve readabilty.

//todo i can refactor some code out of here now after making the cahced array. specifically the updatejournalentryfunction

updateJournalEntryData();

document.querySelector("#moodRadioButtons").addEventListener("click", function () {
    if (event.target.type === "radio") {
        getSpecificMoods(event.target.value)
    }
})

document.querySelector("#recordButton").addEventListener("click", function () {

    if (document.getElementById("conceptsCovered").value.length > 16) {
        alert("Concept too long. Must be under 16 characters")
    } else if (isACurseWord(document.getElementById("conceptsCovered").value) ||
        isACurseWord(document.getElementById("journalEntry").value)) {
        alert("no profanity")
    }
    else {
        journalEntry.createNewEntry();
    }
})


const searchInput = document.querySelector("#searchEntryTextbox")

document.querySelector("#searchJournals").addEventListener('click', event => {

    const searchTerm = searchInput.value;

    filteredJournalEntries = cachedEntries.filter(entry => {
        for (const entryValues of Object.values(entry)) {

            if ((typeof entryValues) === "string") {
                if (entryValues.includes(searchTerm)) {
                    return entry;
                }
            }
        }
    })
    renderJournalEntries(filteredJournalEntries)

})






