<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>EcoRecipe</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    body {
      font-family: 'Poppins', sans-serif;
      background-color: #000000;
      color: #ffffff;
      padding: 0;
      margin: 0;
    }
    .container {
      max-width: 500px;
      margin: 20px auto;
      background-color: #1b1b1b;
      padding: 20px;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0, 255, 0, 0.2);
    }
    h1 {
      color: #00ff00;
      font-size: 32px;
      font-weight: 600;
      text-align: center;
      letter-spacing: 1px;
    }
    input, select, button {
      width: 100%;
      padding: 14px;
      margin: 10px 0;
      border: 1px solid #00ff00;
      border-radius: 8px;
      background-color: #2c2c2c;
      color: #ffffff;
      font-size: 18px;
      box-sizing: border-box;
      transition: all 0.3s ease;
    }
    button {
      background-color: #00ff00;
      color: #000000;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s;
    }
    button:hover {
      background-color: #00cc00;
      transform: scale(1.05);
    }
    .hidden {
      display: none;
    }
    .tab-container {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .tab {
      padding: 14px;
      background-color: #2c2c2c;
      border-radius: 8px;
      color: #00ff00;
      font-weight: 600;
      flex: 1;
      text-align: center;
      margin: 0 4px;
      cursor: pointer;
      transition: background 0.3s;
    }
    .tab.active {
      background-color: #00ff00;
      color: #000000;
    }
    .tab-content {
      padding: 20px;
      background-color: #1b1b1b;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 255, 0, 0.2);
      text-align: center;
    }
    img {
      width: 100%;
      border-radius: 12px;
      margin-bottom: 16px;
    }
  </style>
</head>
<body>
  <div class="container" id="welcomeForm">
    <h1>Welcome to EcoRecipe!</h1>
    <input type="text" id="name" placeholder="Enter your name" required />
    <input type="number" id="weight" placeholder="Enter your weight (kg)" required />
    <input type="number" id="height" placeholder="Enter your height (cm)" required />
    <button onclick="startApp()">Start</button>
  </div>

  <div class="container hidden" id="mainApp">
    <h1>EcoRecipe</h1>
    <div class="tab-container">
      <div class="tab active" onclick="switchTab('home')">Home</div>
      <div class="tab" onclick="switchTab('recipes')">Recipes</div>
      <div class="tab" onclick="switchTab('assistant')">AI Assistant</div>
      <div class="tab" onclick="switchTab('rewards')">Rewards</div>
      <div class="tab" onclick="switchTab('profile')">Profile</div>
    </div>

    <!-- Home Section -->
    <div id="home" class="tab-content">
      <img src="https://via.placeholder.com/400x200" alt="Welcome" />
      <h2>Welcome to EcoRecipe!</h2>
      <p>Your personal AI-based meal planner. Get started by entering your ingredients and preferences!</p>
      <button onclick="switchTab('recipes')">Find Recipes</button>
    </div>

    <!-- Recipes Section -->
    <div id="recipes" class="tab-content hidden">
      <h2>Recipes</h2>
      <img src="https://via.placeholder.com/400x200" alt="Recipes" />
      <p>Find recipes based on your available ingredients.</p>
      <input type="text" id="ingredientInput" placeholder="Enter an ingredient" />
      <button onclick="findRecipes()">Find Recipes</button>
      <div id="recipeResults"></div>
    </div>

    <!-- AI Assistant Section -->
    <div id="assistant" class="tab-content hidden">
      <h2>AI Assistant</h2>
      <img src="https://via.placeholder.com/400x200" alt="Assistant" />
      <p>Ask the AI for cooking tips or recipe suggestions!</p>
      <input type="text" id="assistantInput" placeholder="Ask something..." />
      <button onclick="askAI()">Ask</button>
      <div id="assistantResponse"></div>
    </div>

    <!-- Rewards Section -->
    <div id="rewards" class="tab-content hidden">
      <h2>Your Rewards</h2>
      <img src="https://via.placeholder.com/400x200" alt="Rewards" />
      <p>You have earned <strong id="rewardPoints">0</strong> points!</p>
      <p>Earn 1 rupee for every 50 views on your uploaded recipes!</p>
      <button onclick="redeemRewards()">Redeem</button>
    </div>

    <!-- Profile Section -->
    <div id="profile" class="tab-content hidden">
      <h2>Your Profile</h2>
      <img src="https://via.placeholder.com/400x200" alt="Profile" />
      <p><strong>Name:</strong> <span id="profileName">-</span></p>
      <p><strong>Weight:</strong> <span id="profileWeight">-</span> kg</p>
      <p><strong>Height:</strong> <span id="profileHeight">-</span> cm</p>
    </div>
  </div>

  <script>
    let rewardPoints = 0;

    function startApp() {
      const name = document.getElementById('name').value;
      const weight = document.getElementById('weight').value;
      const height = document.getElementById('height').value;

      if (name && weight && height) {
        document.getElementById('welcomeForm').classList.add('hidden');
        document.getElementById('mainApp').classList.remove('hidden');

        document.getElementById('profileName').innerText = name;
        document.getElementById('profileWeight').innerText = weight;
        document.getElementById('profileHeight').innerText = height;
      } else {
        alert('Please fill out all fields');
      }
    }

    function switchTab(tab) {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
      document.querySelector(`.tab[onclick="switchTab('${tab}')"]`).classList.add('active');
      document.getElementById(tab).classList.remove('hidden');
    }
  </script>
</body>
</html>