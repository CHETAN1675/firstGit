const apiURL = "https://crudcrud.com/api/652a7df0345c49d4937fc2d173559336/votes";

  let voteCounts = {
    Suresh: 0,
    Deepank: 0,
    Abhik: 0
  };

  function clearLists(){
    document.getElementById("sureshList").innerHTML="";
     document.getElementById("deepankList").innerHTML="";
      document.getElementById("abhikList").innerHTML="";
  }

  function updateDisplay() {
    document.getElementById("sureshVotes").textContent = voteCounts.Suresh;
    document.getElementById("deepankVotes").textContent = voteCounts.Deepank;
    document.getElementById("abhikVotes").textContent = voteCounts.Abhik;
    const total = voteCounts.Suresh + voteCounts.Deepank + voteCounts.Abhik;
    document.getElementById("totalVotes").textContent = total;
  }

  function displayCurrentVotes(votes){
    clearLists();
    voteCounts = {Suresh:0,Deepank:0,Abhik:0}

    votes.forEach(function(vote){
      const monitor = vote.monitor;
      const student = vote.student;
      const id = vote._id;

      if(monitor in voteCounts){
        voteCounts[monitor]++;
        
        const li = document.createElement("li");
        li.textContent = student;

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent="Delete";
       deleteBtn.onclick= function(){
        deleteVote(id);
       };

       li.appendChild(deleteBtn);

       document.getElementById(`${monitor.toLowerCase()}List`).appendChild(li);
      }
    });

    updateDisplay();
  }

  function loadVotes() {
    axios.get(apiURL)
      .then(function(response) {
        displayCurrentVotes(response.data);
        })
      .catch(function(error) {
        console.error("Error loading votes:", error);
      });
  }

  async function submitVote() {
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

   await axios.post(apiURL, vote)
     try {
      
      loadVotes();
        document.getElementById("studentName").value = "";
     }
    
     catch(error) {
        console.error("Error submitting vote:", error);
      };
    
  }

    function deleteVote(id){
      axios.delete(`${apiURL}/${id}`)
      .then(function(){
        loadVotes();
      })
      .catch(function(error){
        console.error("Error deleting vote:",error);
      });
    }
  // Load votes when the page starts
  window.onload = loadVotes;