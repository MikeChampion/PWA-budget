// Create a new db named "budget"
let db;

const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
   // Create object store called "pending" and set autoIncrement to true
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function(event) {
  db = event.target.result;

  // Check if app is online, if so read from db
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function(event) {
  console.log("Woops! " + event.target.errorCode);
};

function saveRecord(record) {
  // Create a transaction on pending db with readwrite access
  const transaction = db.transaction(["pending"], "readwrite");

  // Access your pending object store
  const store = transaction.objectStore("pending");

  // Add record to your store
  store.add(record);
}

function checkDatabase() {
  // Open a transaction on pending db
  const transaction = db.transaction(["pending"], "readwrite");
  // Access pending object store
  const store = transaction.objectStore("pending");
  // Get all records from store
  const getAll = store.getAll();

  getAll.onsuccess = function() {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(() => {
        // If successful, open a transaction on pending db
        const transaction = db.transaction(["pending"], "readwrite");

        // Access pending object store
        const store = transaction.objectStore("pending");

        // Clear all items in store
        store.clear();
      });
    }
  };
}

// Listen to see if the app is online again
window.addEventListener("online", checkDatabase);