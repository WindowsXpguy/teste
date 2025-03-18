console.log("✅ Backend script loaded from GitHub Pages!");

// Function that will be called when the script loads
function backendFunction() {
    document.getElementById("output").innerText = "🔥 Hello from backend.js!";
    console.log("✅ backendFunction() executed.");
}

// Run the function automatically when the script is loaded
backendFunction();
