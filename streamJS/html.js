const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let title = ""
let actors = ""
let sypnosis = ""
let director = ""

const currentVideo = urlParams.get("title").trim()
try {
     //title = movieLists[currentVideo].description.match(/(((^[^]+?)(:))\s([^]+?\:)|(^[^]+?:))/)[0].length < 100 ? movieLists[currentVideo].description.match(/((^[^]+?:)\s([^]+?\:)|(^[^]+?:))/)[0]: movieLists[currentVideo].description.match(/^[^]+?:/)[0]
     title = currentVideo
     actors = movieLists[currentVideo].description.match(/(With[^])[^]+?\./)[0].replace(/with/i, "").trim()

     sypnosis = movieLists[currentVideo].description.match(/((With[^])[^]+?\.)([^]+$)/)[0].replace(/with[^]+?\./i, " ").trim()


     director = movieLists[currentVideo].description.match(/((^[^]+?:)\s([^]+?\:)|(^[^]+?:))\s((Directed\sby|Created\sby)[^]+?\.)/)[0].replace(/(^[^]+?:)\s([^]+?\:)|(^[^]+?:)/, "").trim().replace(/Directed\sby\s|Created\sby\s/, " ")

}catch (err) {
    
     title = movieLists[currentVideo].title
     actors = ""
     sypnosis = ""
     director = ""
}

document.body.innerHTML += `
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
            <img id="searchIcon" src="https://cdn.jsdelivr.net/gh/kendrick2k10/betaQuicklink@main/Website%20TV/img/search.png" alt="">
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
        </section>




    <main class="Scontainer-md pb-3 marginTop">
<div class="row justify-content-center">
    <div class="col-12 col-xxl-10">
        
        <div class="card border-0 mb-3 shadow">
            <div id="mid" data-mid="1630857037" data-mode="movie" class="card-header p-0">
            <a id="play-now" role="button" class="d-block cover">
                <picture><img src="${movieLists[currentVideo].image}" width="1200" height="500" class="card-img-top imgSize">
                </picture>
            </a>                
            <div id="watch" class="d-none row g-0 bg-dark" style="">
                    <video
                        id="my-video"
                        class="video-js"
                        controls
                        preload="auto"
                        autoplay=true
                        width="1200"
                        height="500"
                        data-setup="{}"
                    >
                    <track kind="captions" src="https://cdn.jsdelivr.net/gh/kendrick2k10/subtitles@main/${encodeURI(urlParams.get("vtt").replace(/\.mp4|\.mkv/i, ""))}.vtt" srclang="en" label="English" default>
                        <p class="vjs-no-js">
                            To view this video please enable JavaScript, and consider upgrading to a
                            web browser that
                            <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                        </p>
                    </video>
     
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-12 col-lg-2 d-none d-lg-block">
                        <picture>
                            <img width="200" height="300" src="${movieLists[currentVideo].thumbnail}" class="img-fluid"></picture>
                        
                    </div>
                    <div class="col-12 col-lg-7 border-sm-end" style="color: rgb(255, 255, 255);
opacity: 0.8;">
                        <h1 class="card-title fs-4">${title}</h1>
                        <div class="fst-italic lh-sm mb-2">${sypnosis}</div>
                        <div class="row">
                            <div class="col-12 col-md-8">
                                <p class="mb-1"><strong>Genre:</strong>
                                    ${movieLists[currentVideo].genre}
                                </p>
                                <p class="mb-1"><strong>Actor: </strong>${actors}</p>
                                
                                    
                            <p class="mb-1"><strong>Director:</strong>${director}</p></div>
                            <div class="col-12 col-md-4">
                                
                                <p class="mb-1"><strong>Duration:</strong> ${movieLists[currentVideo].duration}</p>
                                <p class="mb-1"><strong>Release:</strong> ${movieLists[currentVideo].year}</p>
                                <p class="mb-1"><strong>IMDb:</strong> ${movieLists[currentVideo].ratings.split("/")[0]}/10</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3">
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary list-title" type="button">Stream in HD</button>
                            <button class="btn btn-primary list-title" type="button">Download in HD</button>
                        </div>
                    </div>
                </div>
            </div>
            <div> 
            </div>
        </div>


      <div class="card border-0 mb-3">
            <div class="card-header bg-transparent border-0 p-0 mb-3">
                <div class="fs-6 list-title">You May Also Like</div>
            </div>
            <div class="row row-cols-2 row-cols-sm-4 row-cols-lg-6 list-rel g-3">
 
            </div>
        </div>  
    </div>
</div>
</main>
`

