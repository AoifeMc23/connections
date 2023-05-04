var artistDiv = document.getElementById("artist_statement");
var summaryDiv = document.getElementById("proposal_summary");
var detailsDiv = document.getElementById("proposal_details");
var activitiesDiv = document.getElementById("key_activities");
var budgetDiv = document.getElementById("budget");

function load() {
  artistDiv.style.display = "none";
  summaryDiv.style.display = "none";
  detailsDiv.style.display = "none";
  activitiesDiv.style.display = "none";
  budgetDiv.style.display = "none";
}

function showArtist() {
  if (artistDiv.style.display === "none") {
    artistDiv.style.display = "block";
    summaryDiv.style.display = "none";
    detailsDiv.style.display = "none";
    activitiesDiv.style.display = "none";
    budgetDiv.style.display = "none";
  } else {
    artistDiv.style.display = "none";
  }
}

function showSummary() {
  if (summaryDiv.style.display === "none") {
    artistDiv.style.display = "none";
    summaryDiv.style.display = "block";
    detailsDiv.style.display = "none";
    activitiesDiv.style.display = "none";
    budgetDiv.style.display = "none";
  } else {
    summaryDiv.style.display = "none";
  }
}

function showDetails() {
  if (detailsDiv.style.display === "none") {
    artistDiv.style.display = "none";
    summaryDiv.style.display = "none";
    detailsDiv.style.display = "block";
    activitiesDiv.style.display = "none";
    budgetDiv.style.display = "none";
  } else {
    detailsDiv.style.display = "none";
  }
}

function showActivities() {
  if (activitiesDiv.style.display === "none") {
    artistDiv.style.display = "none";
    summaryDiv.style.display = "none";
    detailsDiv.style.display = "none";
    activitiesDiv.style.display = "block";
    budgetDiv.style.display = "none";
  } else {
    activitiesDiv.style.display = "none";
  }
}

function showBudget() {
  if (budgetDiv.style.display === "none") {
    artistDiv.style.display = "none";
    summaryDiv.style.display = "none";
    detailsDiv.style.display = "none";
    activitiesDiv.style.display = "none";
    budgetDiv.style.display = "block";
  } else {
    budgetDiv.style.display = "none";
  }
}
