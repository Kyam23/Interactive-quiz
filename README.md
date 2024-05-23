<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Personalized Home Page</title>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <style>

body, h1, p {
  margin: 0;
  padding: 0;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQgO7DmPHAGlHtA-6KCtXNPwJ0bO-ge_xfSCs7RNNmE6TosFsoZgQvFTx&s=10");
}


header {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}

.navbar-brand {
  font-size: 24px;
}

.navbar-nav .nav-link {
  color: #fff;
}


.container {
  padding: 20px;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
}


footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}

.social-icons a {
  color: blue;
  font-size: 24px;
  margin-right: 10px;
}

.social-icons a:hover {
  color: black;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
  .pikon {
      color: black;
  }

@media (max-width: 576px) {
  .navbar-brand {
    font-size: 20px;
  }
  .img-fluid {
      border-radius: 10%;
  }
  
  .social-icons a {
    font-size: 20px;
  }
}

  </style>
</head>
<body>

<header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">My Personalized Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
      </ul>
    </div>
  </nav>
</header>

<div class="container mt-5">
  <div class="row">
    <div class="col-md-6">
      <h1>Welcome to My Personalized Home Page!</h1>
      <p>Hi, I'm April Jhon E. de Atras. I'm from BSIT-1C. On this page, you'll find information about me, my projects, and more!</p>
      <div class="col-md-6">
      <img src="https://yt3.googleusercontent.com/ytc/AIdro_nP4HEBopTFFxeItvuiT4-gerWiDX2P_BqkUM61Ig=s900-c-k-c0x00ffffff-no-rj" alt="Profile Picture" class="img-fluid">
    </div>
    </div>
  </div>
</div>

<footer class="footer mt-auto py-3 bg-light">
  <div class="container text-center">
    <div class="social-icons">
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
     
    </div>
    <p class="pikon">Contact me: apriljhondeatras@mail.com | Phone: 09933089981</p>
  </div>
</footer>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
