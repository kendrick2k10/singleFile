const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let title = ""
let actors = ""
let sypnosis = ""
let director = ""


try {
     title = urlParams.get("description").match(/((^[^]+?:)\s([^]+?\:)|(^[^]+?:))/)[0].length < 100 ? urlParams.get("description").match(/((^[^]+?:)\s([^]+?\:)|(^[^]+?:))/)[0]: urlParams.get("description").match(/^[^]+?:/)[0]
        
     actors = urlParams.get("description").match(/(With[^])[^]+?\./)[0].replace(/with/i, "").trim()

     sypnosis = urlParams.get("description").match(/((With[^])[^]+?\.)([^]+$)/)[0].replace(/with[^]+?\./i, " ").trim()


     director = urlParams.get("description").match(/((^[^]+?:)\s([^]+?\:)|(^[^]+?:))\s((Directed\sby|Created\sby)[^]+?\.)/)[0].replace(/(^[^]+?:)\s([^]+?\:)|(^[^]+?:)/, "").trim().replace(/Directed\sby\s|Created\sby\s/, " ")

}catch (err) {
    
     title = urlParams.get("vtt").replace(/20[0-3][0-9]/)
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
                <picture><img src="${urlParams.get("img")}" width="1200" height="500" class="card-img-top imgSize">
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
                            <img width="200" height="300" src="${urlParams.get("thumbnail")}" class="img-fluid"></picture>
                        
                    </div>
                    <div class="col-12 col-lg-7 border-sm-end" style="color: rgb(255, 255, 255);
opacity: 0.8;">
                        <h1 class="card-title fs-4">${title}</h1>
                        <div class="fst-italic lh-sm mb-2">${sypnosis}</div>
                        <div class="row">
                            <div class="col-12 col-md-8">
                                <p class="mb-1"><strong>Genre:</strong>
                                    ${urlParams.get("genre")}
                                </p>
                                <p class="mb-1"><strong>Actor: </strong>${actors}</p>
                                
                                    
                            <p class="mb-1"><strong>Director:</strong>${director}</p></div>
                            <div class="col-12 col-md-4">
                                
                                <p class="mb-1"><strong>Duration:</strong> ${urlParams.get("duration")}</p>
                                <p class="mb-1"><strong>Release:</strong> ${urlParams.get("year")}</p>
                                <p class="mb-1"><strong>IMDb:</strong> ${urlParams.get("ratings")}/10</p>
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
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <a href="https://ww4.123moviesfree.net/movie/twisters-1630857443/" class="rounded poster">
                            <picture>
                                <source type="image/webp" data-srcset="https://img.icdn.my.id/thumb/w_160/h_240/twisters-1630857443.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/twisters-1630857443.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/twisters-1630857443.webp 2x" srcset="https://img.icdn.my.id/thumb/w_160/h_240/twisters-1630857443.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/twisters-1630857443.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/twisters-1630857443.webp 2x"><img src="../../../img.icdn.my.id/thumb/w_200/h_300/twisters-1630857443.jpg" data-src="../../../img.icdn.my.id/thumb/w_200/h_300/twisters-1630857443.jpg" width="200" height="300" class="lazy card-img-top entered loaded" alt="Twisters" data-ll-status="loaded"></picture>
                            <div class="card-body item-title">
                                <h2 class="card-title text-light fs-6 m-0">Twisters</h2></div><span class="mlbq">HD</span></a>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <a href="https://ww4.123moviesfree.net/movie/the-greatest-hits-1630856902/" class="rounded poster">
                            <picture>
                                <source type="image/webp" data-srcset="https://img.icdn.my.id/thumb/w_160/h_240/the-greatest-hits-1630856902.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/the-greatest-hits-1630856902.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/the-greatest-hits-1630856902.webp 2x" srcset="https://img.icdn.my.id/thumb/w_160/h_240/the-greatest-hits-1630856902.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/the-greatest-hits-1630856902.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/the-greatest-hits-1630856902.webp 2x"><img src="../../../img.icdn.my.id/thumb/w_200/h_300/the-greatest-hits-1630856902.jpg" data-src="../../../img.icdn.my.id/thumb/w_200/h_300/the-greatest-hits-1630856902.jpg" width="200" height="300" class="lazy card-img-top entered loaded" alt="The Greatest Hits" data-ll-status="loaded"></picture>
                            <div class="card-body item-title">
                                <h2 class="card-title text-light fs-6 m-0">The Greatest Hits</h2></div><span class="mlbq">HD</span></a>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <a href="https://ww4.123moviesfree.net/movie/anyone-but-you-1630856291/" class="rounded poster">
                            <picture>
                                <source type="image/webp" data-srcset="https://img.icdn.my.id/thumb/w_160/h_240/anyone-but-you-1630856291.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/anyone-but-you-1630856291.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/anyone-but-you-1630856291.webp 2x" srcset="https://img.icdn.my.id/thumb/w_160/h_240/anyone-but-you-1630856291.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/anyone-but-you-1630856291.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/anyone-but-you-1630856291.webp 2x"><img src="../../../img.icdn.my.id/thumb/w_200/h_300/anyone-but-you-1630856291.jpg" data-src="../../../img.icdn.my.id/thumb/w_200/h_300/anyone-but-you-1630856291.jpg" width="200" height="300" class="lazy card-img-top entered loaded" alt="Anyone But You" data-ll-status="loaded"></picture>
                            <div class="card-body item-title">
                                <h2 class="card-title text-light fs-6 m-0">Anyone But You</h2></div><span class="mlbq">HD</span></a>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <a href="https://ww4.123moviesfree.net/movie/devotion-1630854487/" class="rounded poster">
                            <picture>
                                <source type="image/webp" data-srcset="https://img.icdn.my.id/thumb/w_160/h_240/devotion-1630854487.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/devotion-1630854487.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/devotion-1630854487.webp 2x" srcset="https://img.icdn.my.id/thumb/w_160/h_240/devotion-1630854487.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/devotion-1630854487.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/devotion-1630854487.webp 2x"><img src="../../../img.icdn.my.id/thumb/w_200/h_300/devotion-1630854487.jpg" data-src="../../../img.icdn.my.id/thumb/w_200/h_300/devotion-1630854487.jpg" width="200" height="300" class="lazy card-img-top entered loaded" alt="Devotion" data-ll-status="loaded"></picture>
                            <div class="card-body item-title">
                                <h2 class="card-title text-light fs-6 m-0">Devotion</h2></div><span class="mlbq">HD</span></a>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <a href="https://ww4.123moviesfree.net/movie/father-of-the-bride-1630853568/" class="rounded poster">
                            <picture>
                                <source type="image/webp" data-srcset="https://img.icdn.my.id/thumb/w_160/h_240/father-of-the-bride-1630853568.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/father-of-the-bride-1630853568.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/father-of-the-bride-1630853568.webp 2x" srcset="https://img.icdn.my.id/thumb/w_160/h_240/father-of-the-bride-1630853568.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/father-of-the-bride-1630853568.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/father-of-the-bride-1630853568.webp 2x"><img src="../../../img.icdn.my.id/thumb/w_200/h_300/father-of-the-bride-1630853568.jpg" data-src="../../../img.icdn.my.id/thumb/w_200/h_300/father-of-the-bride-1630853568.jpg" width="200" height="300" class="lazy card-img-top entered loaded" alt="Father of the Bride" data-ll-status="loaded"></picture>
                            <div class="card-body item-title">
                                <h2 class="card-title text-light fs-6 m-0">Father of the Bride</h2></div><span class="mlbq">HD</span></a>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <a href="https://ww4.123moviesfree.net/season/good-girls-season-2-28139/" class="rounded poster">
                            <picture>
                                <source type="image/webp" data-srcset="https://img.icdn.my.id/thumb/w_160/h_240/good-girls-season-2-28139.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/good-girls-season-2-28139.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/good-girls-season-2-28139.webp 2x" srcset="https://img.icdn.my.id/thumb/w_160/h_240/good-girls-season-2-28139.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/good-girls-season-2-28139.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/good-girls-season-2-28139.webp 2x"><img src="../../../img.icdn.my.id/thumb/w_200/h_300/good-girls-season-2-28139.jpg" data-src="../../../img.icdn.my.id/thumb/w_200/h_300/good-girls-season-2-28139.jpg" width="200" height="300" class="lazy card-img-top entered loaded" alt="Good Girls - Season 2" data-ll-status="loaded"></picture>
                            <div class="card-body item-title">
                                <h2 class="card-title text-light fs-6 m-0">Good Girls - Season 2</h2></div><span class="mlbe">Eps<i>13</i></span></a>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <a href="https://ww4.123moviesfree.net/movie/the-bad-guys-24060/" class="rounded poster">
                            <picture>
                                <source type="image/webp" data-srcset="https://img.icdn.my.id/thumb/w_160/h_240/the-bad-guys-24060.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/the-bad-guys-24060.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/the-bad-guys-24060.webp 2x" srcset="https://img.icdn.my.id/thumb/w_160/h_240/the-bad-guys-24060.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/the-bad-guys-24060.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/the-bad-guys-24060.webp 2x"><img src="../../../img.icdn.my.id/thumb/w_200/h_300/the-bad-guys-24060.jpg" data-src="../../../img.icdn.my.id/thumb/w_200/h_300/the-bad-guys-24060.jpg" width="200" height="300" class="lazy card-img-top entered loaded" alt="The Bad Guys" data-ll-status="loaded"></picture>
                            <div class="card-body item-title">
                                <h2 class="card-title text-light fs-6 m-0">The Bad Guys</h2></div><span class="mlbq">HD</span></a>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <a href="https://ww4.123moviesfree.net/movie/the-belko-experiment-20309/" class="rounded poster">
                            <picture>
                                <source type="image/webp" data-srcset="https://img.icdn.my.id/thumb/w_160/h_240/the-belko-experiment-20309.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/the-belko-experiment-20309.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/the-belko-experiment-20309.webp 2x" srcset="https://img.icdn.my.id/thumb/w_160/h_240/the-belko-experiment-20309.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/the-belko-experiment-20309.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/the-belko-experiment-20309.webp 2x"><img src="../../../img.icdn.my.id/thumb/w_200/h_300/the-belko-experiment-20309.jpg" data-src="../../../img.icdn.my.id/thumb/w_200/h_300/the-belko-experiment-20309.jpg" width="200" height="300" class="lazy card-img-top entered loaded" alt="The Belko Experiment" data-ll-status="loaded"></picture>
                            <div class="card-body item-title">
                                <h2 class="card-title text-light fs-6 m-0">The Belko Experiment</h2></div><span class="mlbq">HD</span></a>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <a href="https://ww4.123moviesfree.net/movie/wind-walkers-11527/" class="rounded poster">
                            <picture>
                                <source type="image/webp" data-srcset="https://img.icdn.my.id/thumb/w_160/h_240/wind-walkers-11527.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/wind-walkers-11527.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/wind-walkers-11527.webp 2x" srcset="https://img.icdn.my.id/thumb/w_160/h_240/wind-walkers-11527.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/wind-walkers-11527.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/wind-walkers-11527.webp 2x"><img src="../../../img.icdn.my.id/thumb/w_200/h_300/wind-walkers-11527.jpg" data-src="../../../img.icdn.my.id/thumb/w_200/h_300/wind-walkers-11527.jpg" width="200" height="300" class="lazy card-img-top entered loaded" alt="Wind Walkers" data-ll-status="loaded"></picture>
                            <div class="card-body item-title">
                                <h2 class="card-title text-light fs-6 m-0">Wind Walkers</h2></div><span class="mlbq">HD</span></a>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <a href="https://ww4.123moviesfree.net/movie/sex-ed-8302/" class="rounded poster">
                            <picture>
                                <source type="image/webp" data-srcset="https://img.icdn.my.id/thumb/w_160/h_240/sex-ed-8302.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/sex-ed-8302.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/sex-ed-8302.webp 2x" srcset="https://img.icdn.my.id/thumb/w_160/h_240/sex-ed-8302.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/sex-ed-8302.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/sex-ed-8302.webp 2x"><img src="../../../img.icdn.my.id/thumb/w_200/h_300/sex-ed-8302.jpg" data-src="../../../img.icdn.my.id/thumb/w_200/h_300/sex-ed-8302.jpg" width="200" height="300" class="lazy card-img-top entered loaded" alt="Sex Ed" data-ll-status="loaded"></picture>
                            <div class="card-body item-title">
                                <h2 class="card-title text-light fs-6 m-0">Sex Ed</h2></div><span class="mlbq">HD</span></a>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <a href="https://ww4.123moviesfree.net/movie/return-of-the-living-dead-necropolis-1630857517/" class="rounded poster">
                            <picture>
                                <source type="image/webp" data-srcset="https://img.icdn.my.id/thumb/w_160/h_240/return-of-the-living-dead-necropolis-1630857517.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/return-of-the-living-dead-necropolis-1630857517.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/return-of-the-living-dead-necropolis-1630857517.webp 2x" srcset="https://img.icdn.my.id/thumb/w_160/h_240/return-of-the-living-dead-necropolis-1630857517.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/return-of-the-living-dead-necropolis-1630857517.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/return-of-the-living-dead-necropolis-1630857517.webp 2x"><img src="../../../img.icdn.my.id/thumb/w_200/h_300/return-of-the-living-dead-necropolis-1630857517.jpg" data-src="../../../img.icdn.my.id/thumb/w_200/h_300/return-of-the-living-dead-necropolis-1630857517.jpg" width="200" height="300" class="lazy card-img-top entered loaded" alt="Return of the Living Dead: Necropolis" data-ll-status="loaded"></picture>
                            <div class="card-body item-title">
                                <h2 class="card-title text-light fs-6 m-0">Return of the Living Dead: Necropolis</h2></div><span class="mlbq">HD</span></a>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <a href="https://ww4.123moviesfree.net/movie/jackpot-1630857470/" class="rounded poster">
                            <picture>
                                <source type="image/webp" data-srcset="https://img.icdn.my.id/thumb/w_160/h_240/jackpot-1630857470.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/jackpot-1630857470.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/jackpot-1630857470.webp 2x" srcset="https://img.icdn.my.id/thumb/w_160/h_240/jackpot-1630857470.webp 1x, https://img.icdn.my.id/thumb/w_178/h_267/jackpot-1630857470.webp 1.5x, https://img.icdn.my.id/thumb/w_320/h_480/jackpot-1630857470.webp 2x"><img src="../../../img.icdn.my.id/thumb/w_200/h_300/jackpot-1630857470.jpg" data-src="../../../img.icdn.my.id/thumb/w_200/h_300/jackpot-1630857470.jpg" width="200" height="300" class="lazy card-img-top entered loaded" alt="Jackpot!" data-ll-status="loaded"></picture>
                            <div class="card-body item-title">
                                <h2 class="card-title text-light fs-6 m-0">Jackpot!</h2></div><span class="mlbq">HD</span></a>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</div>
</main>
`