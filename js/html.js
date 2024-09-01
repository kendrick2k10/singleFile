

const bodyHTML =   `
<div id="overlay">
    <div class="overlayContainer">
      
      <div class="video-container"></div>
      <!--  <p style="text-align: center;color: white;"><img src="images1/seemore.svg"></p>-->
      <div class="eyeC "><i class="fa fa-eye eyeSize" aria-hidden="true"></i></div>
  </div>
</div>

<section id="header">
<nav class="navbar navbar-expand-md navbar-light sticky cIndex" id="navbar_sticky">

<div class="smallSearchC">
        <input type="text" name="search" placeholder="Search.." class="smallSearch"> 
        <span class="col_red" style="font-size: 25px; text-align: center;">&#10005</span>
</div>

<div class="container ">
  <a class="navbar-brand text-white fw-bold" href="index.html"><i class="fa fa-link col_red me-1"></i></a>
  
  <div>
    <img id="searchIcon" src="https://cdn.jsdelivr.net/gh/kendrick2k10/betaQuicklink@main/Website%20TV/img/search.png" >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>




  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mb-0 searchC">
      <li class="nav-item searchShow">
        <i class="arrow down col_red"> </i>
        <span id="closeB" class="col_red">&#10005</span>
        <input type="text" name="search" placeholder="Search.." id="searchBar">
      </li>

      <li class="nav-item hide">
        <l class="nav-link"> Action</l>
      </li>
      <li class="nav-item hide">
        <a class="nav-link">Animation</a>
      </li>
      <li class="nav-item hide">
        <a class="nav-link">Horror</a>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          More
        </a>
          <ul class="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item">Action</a></li>
          <li><a class="dropdown-item">Animation</a></li>
          <li><a class="dropdown-item">Horror</a></li>
          <li><a class="dropdown-item" >Thriller</a></li>
          <li><a class="dropdown-item" >Adventure</a></li>
          <li><a class="dropdown-item" >Comedy</a></li>
          <li><a class="dropdown-item" >War</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</nav>
</section>`


