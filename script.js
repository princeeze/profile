function updateUTCTime() {
  const now = new Date();
  const utcTime = now.toUTCString();
  document.getElementById("utc-time").textContent = utcTime;
}

updateUTCTime();
