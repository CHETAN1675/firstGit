const apiURL = "https://crudcrud.com/api/e214796ca8b846a181b3992544c298f9/votes";

  let voteCounts = {
    Suresh: 0,
    Deepank: 0,
    Abhik: 0
  };

  function updateDisplay() {
    document.getElementById("sureshVotes").textContent = voteCounts.Suresh;
    document.getElementById("deepankVotes").textContent = voteCounts.Deepank;
    document.getElementById("abhikVotes").textContent = voteCounts.Abhik;
    const total = voteCounts.Suresh + voteCounts.Deepank + voteCounts.Abhik;
    document.getElementById("totalVotes").textContent = total;
  }

  function loadVotes() {
    axios.get(apiURL)
      .then(function(response) {
        const votes = response.data;
        voteCounts = { Suresh: 0, Deepank: 0, Abhik: 0 };
        votes.forEach(function(vote) {
          if (vote.monitor in voteCounts) {
            voteCounts[vote.monitor]++;
          }
        });
        updateDisplay();
      })
      .catch(function(error) {
        console.error("Error loading votes:", error);
      });
  }

  function submitVote() {
    const name = document.getElementById("studentName").value;
    const monitor = document.getElementById("monitorSelect").value;

    if (name.trim() === "") {
      alert("Please enter a student name.");
      return;
    }

    const vote = {
      student: name,
      monitor: monitor
    };

    axios.post(apiURL, vote)
      .then(function() {
        voteCounts[monitor]++;
        updateDisplay();
        document.getElementById("studentName").value = "";
      })
      .catch(function(error) {
        console.error("Error submitting vote:", error);
      });
  }

  // Load votes when the page starts
  window.onload = loadVotes;