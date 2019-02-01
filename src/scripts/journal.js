//todo at some point i should probably abstart where i pull the information from the dom
//have duplicated code and will probablly improve readabilty.
API.getJournalEntries().then(parsedEntries => renderJournalEntries(parsedEntries))

document.querySelector("#recordButton").addEventListener("click", function () {

    if (document.getElementById("conceptsCovered").value.length > 16) {
        alert("Concept too long. Must be under 16 characters")
    }else if(isACurseWord(document.getElementById("conceptsCovered").value) ||
    isACurseWord(document.getElementById("journalEntry").value)){
        alert("no profanity")
    }
    else{
        journalEntry.createNewEntry();
    }
})








