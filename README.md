<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Profile Card</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
    }

    .card {
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      padding: 25px;
      width: 350px;
      text-align: center;
      animation: fadeIn 1s ease-in-out;
    }

    .photo-frame {
      width: 120px;
      height: 120px;
      border: 3px solid #ddd;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 20px;
    }

    .photo-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card h1 {
      margin: 15px 0;
      font-size: 2em;
      color: #333;
    }

    .card p {
      margin: 10px 0;
      color: #555;
      font-size: 1em;
      line-height: 1.5;
    }

    .card button {
      background: #007BFF;
      color: white;
      border: none;
      padding: 12px 25px;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
      font-size: 1em;
    }

    .card button:hover {
      background: #0056b3;
    }

    .hidden-text {
      display: none;
      margin-top: 20px;
      font-style: italic;
      color: #333;
      font-size: 0.95em;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
</head>
<body>

<div class="card">
  <div class="photo-frame">
    <img src="IMG_0914.jpg" alt="Your Photo">
  </div>
  <h1 id="name"> Abhijay Salvi</h1>
  <p id="major"><strong>Major:</strong> Computer Science</p>
  <p id="year"><strong>Year:</strong> 1st Year</p>
  <p id="passion"><strong>Passion:</strong> Using technology for solving problems and making a lasting change in people's lives. He has shown this through winning 1st place in the statewide highschool CSforGood competition!</p>
  <p id="location"><strong>From:</strong> Westfield, IN</p>

  <button onclick="showMore()">Click to Learn More</button>
  <p class="hidden-text" id="extra-info">Hobbies include playing tennis, content creation, and volunteering!</p>
</div>

<script>
  function showMore() {
    const extraInfo = document.getElementById('extra-info');
    if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
      extraInfo.style.display = 'block';
    } else {
      extraInfo.style.display = 'none';
    }
  }
</script>

</body>
</html>
