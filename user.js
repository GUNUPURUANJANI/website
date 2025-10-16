<!-- userSession.js -->
<script>
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  if (!user) {
    // If no user info found, redirect to login
    window.location.href = "login.html";
  } else {
    // Make data available globally
    window.user = user;
  }
</script>
