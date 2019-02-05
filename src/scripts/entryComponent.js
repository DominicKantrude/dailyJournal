
const journalEntry = {
    concept: "",
    date: "",
    postJournalEntry: "",
    mood: "",

    createNewEntry : function(){
        const newEntry = Object.create(journalEntry)
        newEntry.concept = document.getElementById("conceptsCovered").value;
        newEntry.date = document.getElementById("journalDate").value;
        newEntry.entry = document.getElementById("journalEntry").value;
        newEntry.mood = document.getElementById("moods").value;

        //change this to push to json
        API.postJournalEntry(newEntry);
        updateJournalEntryData();
    }
}
