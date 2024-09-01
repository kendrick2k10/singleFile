function appendVideoElement(Genre = "", test) {

    const Subcategory = [
      "action",
      "animation",
      "horror",
      "thriller",
      //"drama",
      "adventure",
      "comedy",
      "war"
    ];
    const overlayContainer = document.querySelector("#overlay .overlayContainer")
    const overlayEle = document.getElementById("overlay")
  

    if (Subcategory.includes(Genre.toLowerCase())) {
      render.movie = sortGenre(Genre, true); //Choosen Genre. Limited

    }else if (Genre === "") {
      render.movie = globalSearch(test); //All movies
    }else if (Genre === "latest") {
      render.movie = trendItems
    }


    document.querySelector('.video-container').innerHTML = "";
    render.movieKeys = Object.keys(render.movie);
    render.total = Object.keys(render.movie).length;

    if (render.total > 24) {
      if (window.innerWidth <= 595 || window.innerWidth >= 788 && window.innerWidth <= 1171 ) {
        render.renderMax12 = 20;
        render.initialCount = 20;
      }else if (window.innerWidth > 595 && window.innerWidth <= 787 || window.innerWidth > 1363 ) {
        render.renderMax12 = 21;
        render.initialCount = 21;
      }else if (window.innerWidth > 1171 && window.innerWidth <= 1363) {
        render.renderMax12 = 24;
        render.initialCount = 24
      }
    }else if (render.total < 24) {
      render.renderMax12 = render.total;
      render.initialCount = render.total
    }

    if (render.total > render.renderMax12) {
      document.querySelector(".overlayContainer .eyeC .eyeSize").style.display = "inline-block"
    }else { 
      document.querySelector(".overlayContainer .eyeC .eyeSize").style.display = "none"
    } 

    if (overlayContainer.style.height === "") {
        overlayEle.style.zIndex = 100;
        overlayContainer.style.height = "100%";
        document.body.style.overflow = "hidden";
        document.querySelector(".arrow").style.display = "none"
        document.getElementById("closeB").style.display = "block"
        
    }

    for (let index = 0; index < render.renderMax12; index++) {
      renderThis(index)
      
    }

}

let testing = []
function renderThis(i) {
    const extra = document.createElement('div');
    extra.id='extra';

    const videoEle = document.createElement('div');
    videoEle.className="video";
    videoEle.classList.toggle("customRow")

    const anchor = document.createElement("a")
    
    anchor.href = 
    `
      ./stream.html?fileID=${((render.movie[render.movieKeys[i]].streamlink).replace("https://streamtape.com/v/", "")).split("/")[0]}
      &title=${encodeURIComponent(render.movie[render.movieKeys[i]].title)}
      &vtt=${render.movie[render.movieKeys[i]].name}
    `;

    const imgEle = document.createElement('img');
    imgEle.setAttribute("loading", "lazy")
    imgEle.src=render.movie[render.movieKeys[i]].thumbnail;

    anchor.appendChild(imgEle)

    videoEle.appendChild(anchor);

    const tittle = document.createElement('h5');
    tittle.innerHTML = render.movie[render.movieKeys[i]].title;
    extra.appendChild(videoEle);
    extra.appendChild(tittle);
    document.querySelector('.video-container').appendChild(extra);

}


function seeMore() {
  if (render.renderMax12 < render.total){ 
    let precount = render.renderMax12;
    precount += render.initialCount;
    //console.log("SECOND")

    if (precount < render.total){
        console.log(`precount:${precount} less than total: ${render.total}`)
        for (let index = render.renderMax12; index < precount; index++) {
          renderThis(index)
        }
        render.renderMax12 += render.initialCount
        //console.log("THIRD")

    }else{
        console.log(`precount:${precount} more than total: ${render.total}`)
        document.querySelector(".eyeSize").style.display = "none";
        let Max = render.total - render.renderMax12;
        console.log("Max: ", Max)
        let newMax = render.renderMax12 + Max;
        console.log("newMax: ", newMax)
        console.log("renderMax12: ", render.renderMax12)
        for (let index = render.renderMax12; index < newMax; index++) {
          renderThis(index)
        }
        //console.log("FIFTH")
    }
}
}


function toRendeR2() {
    maxToPop = max12;
    console.log('maxToPop:' + maxToPop);
    max12 += 12;
}

/*
function seeMore() {
    if (max12 <= 12){
        for (let index = max12; index < max12 + 12; index++) {
            appendVideoElement(index);
        }
        toRendeR2()
    }else if (max12 < movieCount){
        let precount = max12;
        precount += 12;
        if (precount < movieCount){
            console.log(`precount:${precount} less than total: ${movieCount}`)
            for (let index = max12; index < precount; index++) {
                appendVideoElement(index);
            }
            toRendeR2()
        }else{
            console.log(`precount:${precount} more than total: ${movieCount}`)
            let Max = movieCount - max12;
            let newMax = max12 + Max;
            for (let index = max12; index < newMax; index++) {
                appendVideoElement(index);
            }
            let toRender2 = document.querySelectorAll('.video');
            for (let index = max12; index < toRender2.length; index++) {
                    toRender2[index].style.visibility="visible";
            }
            document.querySelector('.overlayContainer p img').style.display="none";
        }
    }

}
*/

function sortMovies(movieList) {
    const movieKeys = Object.keys(movieList)
    const movieCount = Object.keys(movieList).length;

    return [movieKeys, movieCount, movieList]
}


function sortLatest() {
  const [movieKeys, movieCount, movieList] = sortMovies(movieLists)
  for (let i = 0; i < movieCount; i++) {
    const movie = movieList[movieKeys[i]]
    if (!movie.year.match(/-/ig)) {
      if (movie.year >= 2024) {
          //console.log(`${movie.title}: ${movie.year}`)
          trendItems.push(movie)
      }
    }
  }
  
}

function sortGenre(Genre, nolimit) {
  const overlayGenre = []
  const [movieKeys, movieCount, movieList] = sortMovies(movieLists)
  let count = 0

  for (let i = 0; i < movieCount; i++) {
    const match = movieList[movieKeys[i]].genre.match(Genre)
    if (match && !nolimit) {
      if (count <= 7) {
        genre.push(movieList[movieKeys[i]])
      }else {
        break
      }
      count += 1
    }else if (match && nolimit) {
      overlayGenre.push(movieList[movieKeys[i]])
    }
  }
  return overlayGenre
}

function globalSearch(arg) {
  const overlayGenre = []
  const [movieKeys, movieCount, movieList] = sortMovies(movieLists)
  let re = new RegExp("(" + arg + ")","gi");
  
  for (let i = 0; i < movieCount; i++) {
    const match = movieList[movieKeys[i]].title.match(re)
    if (match) {
      //console.log(movieList[movieKeys[i]].title)
      overlayGenre.push(movieList[movieKeys[i]])
    }
  }
  return overlayGenre
}

function topRatedGenre(Genre) {
  let sortedGenres = []
  const sortedRatings = []
  const [movieKeys, movieCount, movieList] = sortMovies(movieLists)

  for (let i = 0; i < movieKeys.length; i++) {
    const movie = movieList[movieKeys[i]]
    const match = movie.genre.match(Genre)
    if (match) {
      sortedGenres.push(movie)
    }
  }

  for (let i = 0; i < sortedGenres.length; i++) {
    sortedGenres[i].ratings = sortedGenres[i].ratings.split("/")[0]
  }
  
  sortedGenres = sortedGenres.sort((a,b) => a.ratings - b.ratings)


  for (let i = 1; i < 5; i++) {
    //console.log(sortedGenres.at(-i).genre)
    category.push(sortedGenres[sortedGenres.length-i])
  }
  

}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function viewAllBut() {

  const overlayEle = document.getElementById("overlay")
  const overlayContainer = document.querySelector("#overlay .overlayContainer")
  const hideCss = document.querySelectorAll(".hide");

  overlayEle.style.zIndex = 100;
  for (let i = 0; i < hideCss.length; i++) {
    hideCss[i].style.display = "none"
  }
  overlayContainer.style.height = "100%";
  document.body.style.overflow = "hidden";
  document.querySelector(".arrow").style.display = "none";
  document.querySelector(".arrow").nextElementSibling.style.display = "block";
  overlayContainer.scrollTo(0,0);
  document.getElementById("searchBar").value = ""

  
  document.querySelectorAll(".hide, .dropdown-menu li").forEach(element => {
    console.log(element.children[0].style.color = "white")
  });

  document.querySelector('.video-container').innerHTML = ""
  appendVideoElement("latest");
}

                /* FUNCTIONS TO RENDER PAGES*/
function sortLatestRender() {
    sortLatest()
    const latestMovies = 
      `
      <section id="trend" class="pt-4 pb-5">
      <div class="container">
  
      <div class="row trend_1">
        <div class="col-md-6 col-6">
        <div class="trend_1l">
          <h4 class="mb-0"><i class="fa fa-youtube-play align-middle col_red me-1"></i> Latest <span class="col_red">Movies</span></h4>
        </div>
        </div>
        <div class="col-md-6 col-6">
        <div class="trend_1r text-end">
          <h6 class="mb-0"><a class="button" onclick="viewAllBut()"> View All</a></h6>
        </div>
        </div>
      </div>
  
      <div class="row trend_2 mt-4">
        <div id="carouselExampleCaptions1" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2" class="" aria-current="true"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="trend_2i row">
              <div class="col-md-3 col-6">
                <div class="trend_2im clearfix position-relative">
                <div class="trend_2im1 clearfix">
                  <div class="grid">
                <figure class="effect-jazz mb-0">
                  <a href="
                            
                            ./stream.html?fileID=${trendItems[0].streamlink.replace("https://streamtape.com/v/", "").split("/")[0]} 
                             &title=${encodeURIComponent(trendItems[0].title)}
                             &vtt=${trendItems[0].name}"><img loading="lazy" src="${trendItems[0].image}" class="w-100 h200"  ></a>
                </figure>
            </div>
                </div>

                </div>

              </div>
              <div class="col-md-3 col-6">
                <div class="trend_2im clearfix position-relative">
                <div class="trend_2im1 clearfix">
                  <div class="grid">
                <figure class="effect-jazz mb-0">
                  <a href="
                            
                            ./stream.html?fileID=${trendItems[1].streamlink.replace("https://streamtape.com/v/", "").split("/")[0]} 
                             &title=${encodeURIComponent(trendItems[1].title)}
                             &vtt=${trendItems[1].name}"><img loading="lazy" src="${trendItems[1].image}" class="w-100 h200" ></a>
                </figure>
            </div>
                </div>

                </div>

              </div>
              <div class="col-md-3 col-6">
                <div class="trend_2im clearfix position-relative">
                <div class="trend_2im1 clearfix">
                  <div class="grid">
                <figure class="effect-jazz mb-0">
                  <a href="
                            
                            ./stream.html?fileID=${trendItems[2].streamlink.replace("https://streamtape.com/v/", "").split("/")[0]} 
                             &title=${encodeURIComponent(trendItems[2].title)}
                             &vtt=${trendItems[2].name}"><img loading="lazy" src="${trendItems[2].image}" class="w-100 h200" ></a>
                </figure>
            </div>
                </div>

                </div>

              </div>
  
              <div class="col-md-3 col-6">
                <div class="trend_2im clearfix position-relative">
                <div class="trend_2im1 clearfix">
                  <div class="grid">
                <figure class="effect-jazz mb-0">
                  <a href="
                            
                            ./stream.html?fileID=${trendItems[3].streamlink.replace("https://streamtape.com/v/", "").split("/")[0]} 
                             &title=${encodeURIComponent(trendItems[3].title)}
                             &vtt=${trendItems[3].name}"><img loading="lazy" src="${trendItems[3].image}" class="w-100 h200" ></a>
                </figure>
            </div>
                </div>

                </div>

              </div>
  
            </div>
          </div>
          
          <div class="carousel-item">
            <div class="trend_2i row">
              <div class="col-md-3 col-6">
                <div class="trend_2im clearfix position-relative">
                <div class="trend_2im1 clearfix">
                  <div class="grid">
                <figure class="effect-jazz mb-0">
                  <a href="
                            
                            ./stream.html?fileID=${trendItems[4].streamlink.replace("https://streamtape.com/v/", "").split("/")[0]} 
                             &title=${encodeURIComponent(trendItems[4].title)}
                             &vtt=${trendItems[4].name}"><img loading="lazy" src="${trendItems[4].image}" class="w-100 h200" ></a>
                </figure>
            </div>
                </div>

                </div>

              </div>
              <div class="col-md-3 col-6">
                <div class="trend_2im clearfix position-relative">
                <div class="trend_2im1 clearfix">
                  <div class="grid">
                <figure class="effect-jazz mb-0">
                  <a href="
                            
                            ./stream.html?fileID=${trendItems[5].streamlink.replace("https://streamtape.com/v/", "").split("/")[0]} 
                             &title=${encodeURIComponent(trendItems[5].title)}
                             &vtt=${trendItems[5].name}"><img loading="lazy" src="${trendItems[5].image}" class="w-100 h200" ></a>
                </figure>
            </div>
                </div>

                </div>

              </div>
              <div class="col-md-3 col-6">
                <div class="trend_2im clearfix position-relative">
                <div class="trend_2im1 clearfix">
                  <div class="grid">
                <figure class="effect-jazz mb-0">
                  <a href="
                            
                            ./stream.html?fileID=${trendItems[6].streamlink.replace("https://streamtape.com/v/", "").split("/")[0]} 
                             &title=${encodeURIComponent(trendItems[6].title)}
                             &vtt=${trendItems[6].name}"><img loading="lazy" src="${trendItems[6].image}" class="w-100 h200" ></a>
                </figure>
            </div>
                </div>

                </div>

              </div>
              <div class="col-md-3 col-6">
                <div class="trend_2im clearfix position-relative">
                <div class="trend_2im1 clearfix">
                  <div class="grid">
                <figure class="effect-jazz mb-0">
                  <a href="
                            
                            ./stream.html?fileID=${trendItems[7].streamlink.replace("https://streamtape.com/v/", "").split("/")[0]} 
                             &title=${encodeURIComponent(trendItems[7].title)}
                             &vtt=${trendItems[7].name}"><img loading="lazy" src="${trendItems[7].image}" class="w-100 h200" ></a>
                </figure>
            </div>
                </div>

                </div>

              </div>
            </div>
          </div>
        </div>
  
      </div>
      </div>
      </div>
      </section>
      `
  
      document.body.innerHTML += latestMovies
  }
  
  
function topRatedRender() {

    let content = ""
    let firstLoop = ""
    let secondLoop = ""
    let thirdLoop = ""
    let indeX = 0
    let counter = 7
    let bool = true
    let bool2 = true
    let bool3 = true
    let match;
    let sypnosis

    //const regex = /([^:]+): Directed by ([^\.]+)\. With.*?\. (.*?)\./g;
  
    const Subcategory = [
      "action",
      "animation",
      "horror",
      "thriller",
      //"drama",
      "adventure",
      "comedy",
      "war"
    ];
    

    topRatedGenre("Action")
    topRatedGenre("Animation")
    topRatedGenre("Horror")
    topRatedGenre("Thriller")
    //topRatedGenre("Drama")
    topRatedGenre("Adventure")
    topRatedGenre("Comedy")
    topRatedGenre("War")

    for (let i = 0; i < category.length; i++) {

      const regex = /(?<Title>[\w\s:]+):\s(?:(?:Created|Directed)\sby\s(?<Director>[^.]+)\.\s)?With\s(?<Actors>[^.]+)\.\s(?<Sypnosis>[^.]+)\./g;
      
      sypnosis = (match = regex.exec(category[i].description)) !== null ? sypnosis = match.groups.Sypnosis.trim(): category[i].description
      
      
      
      
      if (bool) {
        
        firstLoop = `          
        <div class="col-md-6">
                    <div class="popular_2i1 row">
                      <div class="col-md-4 col-4">
                          <div class="popular_2i1lm position-relative clearfix">
                            <div class="popular_2i1lm1 clearfix">
                                <div class="grid">
                                  <figure class="effect-jazz mb-0">
                                  <img loading="lazy" src="${category[i].thumbnail}" class="w-100 thumb" >
                                  </figure>
                              </div>
                            </div>
                          </div>
                      </div>
                      
                      <div class="col-md-8 col-8">
                        <div class="popular_2i1r">
                            <h5><a class="col_red">${category[i].title}</a></h5>
                            <h6>${category[i].genre}</h6>
                            <h6> Imdb ${category[i].ratings}  <span class="ms-2"><i class="fa fa-star col_red me-1"></i></span> Year : ${category[i].year} <span class="ms-2">Runtime: ${category[i].duration}</span></h6>
                            <p>${sypnosis}</p>
                            <h6 class="mb-0"><a class="button" href="
                            
                            ./stream.html?fileID=${category[i].streamlink.replace("https://streamtape.com/v/", "").split("/")[0]} 
                             &title=${encodeURIComponent(category[i].title)}
                             &vtt=${category[i].name}"> Watch Stream </a></h6>

                        </div>
                      </div>
                    </div>
                  </div>`
        bool = false
      }else if (bool2) {
        secondLoop = `
    <div class="col-md-6">
    <div class="popular_2i1 row">
      <div class="col-md-4 col-4">
        <div class="popular_2i1lm position-relative clearfix">
          <div class="popular_2i1lm1 clearfix">
            <div class="grid">
              <figure class="effect-jazz mb-0">
                <img loading="lazy" src="${category[i].thumbnail}" class="w-100 thumb" >
              </figure>
            </div>
          </div>

        </div>
      </div>
      <div class="col-md-8 col-8">
          <div class="popular_2i1r">
            <h5><a class="col_red" >${category[i].title}</a></h5>
            <h6>${category[i].genre}</h6>
            <h6> Imdb ${category[i].ratings}  <span class="ms-2"><i class="fa fa-star col_red me-1"></i></span> Year : ${category[i].year} <span class="ms-2">Runtime: ${category[i].duration}</span></h6>
            <p>${sypnosis}</p>
            <h6 class="mb-0"><a class="button" href="
                            
                            ./stream.html?fileID=${category[i].streamlink.replace("https://streamtape.com/v/", "").split("/")[0]} 
                             &title=${encodeURIComponent(category[i].title)}
                             &vtt=${category[i].name}"> Watch Stream </a></h6>
          </div>
      </div>
    </div>
    </div>`
        bool2 = false
      }else if (bool3) {
        thirdLoop = `      
    <div class="col-md-6">
            <div class="popular_2i1 row">
              <div class="col-md-4 col-4">
                <div class="popular_2i1lm position-relative clearfix">
                  <div class="popular_2i1lm1 clearfix">
                  <div class="grid">
                      <figure class="effect-jazz mb-0">
                      <img loading="lazy" src="${category[i].thumbnail}" class="w-100 thumb" >
                      </figure>
                    </div>
                  </div>

                </div>
              </div>
              <div class="col-md-8 col-8">
                <div class="popular_2i1r">
                  <h5><a class="col_red">${category[i].title}</a></h5>
                  <h6>${category[i].genre}</h6>
                  <h6> Imdb ${category[i].ratings}  <span class="ms-2"><i class="fa fa-star col_red me-1"></i></span> Year : ${category[i].year} <span class="ms-2">Runtime: ${category[i].duration}</span></h6>
                  <p>${sypnosis}</p>
                  <h6 class="mb-0"><a class="button" href="
                            
                            ./stream.html?fileID=${category[i].streamlink.replace("https://streamtape.com/v/", "").split("/")[0]} 
                             &title=${encodeURIComponent(category[i].title)}
                             &vtt=${category[i].name}"> Watch Stream </a></h6>
                </div>
              </div>
            </div>
          </div>`
          bool3 = false
      }
      else if (i === 3) {
        const fourthLoop = `
          <div class="col-md-6">
            <div class="popular_2i1 row">
              <div class="col-md-4 col-4">
                <div class="popular_2i1lm position-relative clearfix">
                  <div class="popular_2i1lm1 clearfix">
                    <div class="grid">
                      <figure class="effect-jazz mb-0">
                        <img loading="lazy" src="${category[i].thumbnail}" class="w-100 thumb"  >
                      </figure>
                    </div>
                  </div>

                </div>
              </div>
              <div class="col-md-8 col-8">
                <div class="popular_2i1r">
                  <h5><a class="col_red">${category[i].title}</a></h5>
                  <h6>${category[i].genre}</h6>
                  <h6> Imdb ${category[i].ratings}  <span class="ms-2"><i class="fa fa-star col_red me-1"></i></span> Year : ${category[i].year} <span class="ms-2">Runtime: ${category[i].duration}</span></h6>
                  <p>${sypnosis}</p>
                  <h6 class="mb-0"><a class="button" href="
                            
                            ./stream.html?fileID=${category[i].streamlink.replace("https://streamtape.com/v/", "").split("/")[0]} 
                             &title=${encodeURIComponent(category[i].title)}
                             &vtt=${category[i].name}"> Watch Stream </a></h6>
                </div>
              </div>
            </div>
          </div>

    `  
      content += 
        `
          <div class="tab-pane active" id="${Subcategory[indeX]}">
            <div class="popular_2i row">
              ${firstLoop}
              ${secondLoop}
            </div>
            <div class="popular_2i row mt-4">
              ${thirdLoop}
              ${fourthLoop}
            </div>
          </div>
        `
        indeX++
        bool = true
        bool2 = true
        bool3 = true
        
      }
      else if (i === counter) {
        const fourthLoop = `
          <div class="col-md-6">
            <div class="popular_2i1 row">
              <div class="col-md-4 col-4">
                <div class="popular_2i1lm position-relative clearfix">
                  <div class="popular_2i1lm1 clearfix">
                    <div class="grid">
                      <figure class="effect-jazz mb-0">
                        <img loading="lazy" src="${category[i].thumbnail}" class="w-100 thumb" >
                      </figure>
                    </div>
                  </div>

                </div>
              </div>
              <div class="col-md-8 col-8">
                <div class="popular_2i1r">
                  <h5><a class="col_red">${category[i].title}</a></h5>
                  <h6>${category[i].genre}</h6>
                  <h6> Imdb ${category[i].ratings}  <span class="ms-2"><i class="fa fa-star col_red me-1"></i></span> Year : ${category[i].year} <span class="ms-2">Runtime: ${category[i].duration}</span></h6>
                  <p>${sypnosis}</p>
                  <h6 class="mb-0"><a class="button" href="
                            
                            ./stream.html?fileID=${category[i].streamlink.replace("https://streamtape.com/v/", "").split("/")[0]} 
                             &title=${encodeURIComponent(category[i].title)}
                             &vtt=${category[i].name}"> Watch Stream </a></h6>
                </div>
              </div>
            </div>
          </div>

    `  
      counter += 4
      content += 
        `
          <div class="tab-pane" id="${Subcategory[indeX]}">
            <div class="popular_2i row">
              ${firstLoop}
              ${secondLoop}
            </div>
            <div class="popular_2i row mt-4">
              ${thirdLoop}
              ${fourthLoop}
            </div>
          </div>
        `
        indeX++
        bool = true
        bool2 = true
        bool3 = true
        
      }

    }

    const topR = 
    `<section id="popular" class="pt-4 pb-5 bg_grey">
      <div class="container">
        <div class="row trend_1">
          <div class="col-md-12">
            <div class="trend_1l">
                <h4 class="mb-0"><i class="fa fa-youtube-play align-middle col_red me-1"></i> Top-Rated Movies on <span class="col_red">IMDb</span></h4>
            </div>
          </div>
        </div>
        <div class="row popular_1 mt-4">
          <ul class="nav nav-tabs  border-0 mb-0">
          <li class="nav-item">
            <a href="#action" data-bs-toggle="tab" aria-expanded="false" class="nav-link active">
              <span class="d-md-block">ACTION</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#animation" data-bs-toggle="tab" aria-expanded="true" class="nav-link">
              <span class="d-md-block">ANIMATION</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#horror" data-bs-toggle="tab" aria-expanded="false" class="nav-link">
              <span class="d-md-block">HORROR</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#thriller" data-bs-toggle="tab" aria-expanded="false" class="nav-link">
              <span class="d-md-block">THRILLER</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#adventure" data-bs-toggle="tab" aria-expanded="false" class="nav-link">
              <span class="d-md-block">ADVENTURE</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#comedy" data-bs-toggle="tab" aria-expanded="false" class="nav-link">
              <span class="d-md-block">COMEDY</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#war" data-bs-toggle="tab" aria-expanded="false" class="nav-link">
              <span class="d-md-block">War</span>
            </a>
          </li>
          
        </ul>
        </div>
        <div class="popular_2 row mt-4">
          <div class="tab-content">

          ${content}

          </div>
        
        </div>
      </div>
    </section>`

    document.body.innerHTML += topR

}
let timeOut = 0
function headerFunctions() {
  
    const Subcategory = [
      "action",
      "animation",
      "horror",
      "thriller",
      //"drama",
      "adventure",
      "comedy",
      "war"
    ];

    document.querySelector(".searchC").onclick = evt => {
      evt.stopPropagation();
      const overlayEle = document.getElementById("overlay")
      const overlayContainer = document.querySelector("#overlay .overlayContainer")
      const hideCss = document.querySelectorAll(".hide");
      const innerText = evt.target.innerText
      clearTimeout(timeOut)

      if (evt.target.id === "searchBar" && overlayContainer.style.height === "") {
        //console.log("active")
        overlayEle.style.zIndex = 100;
        for (let i = 0; i < hideCss.length; i++) {
          hideCss[i].style.display = "none"
        }
        overlayContainer.style.height = "100%";
        document.body.style.overflow = "hidden";
        evt.target.previousElementSibling.previousElementSibling.style.display = "none";
        evt.target.previousElementSibling.style.display = "block";
      }else if (evt.target.id === "closeB") {
        
        //console.log("active")
        for (let i = 0; i < hideCss.length; i++) {
          hideCss[i].style.display = "block"
        }
        overlayContainer.style.height = null;
        document.body.style.overflow = "auto";
        evt.target.style.display = "none"
        evt.target.previousElementSibling.style.display = "block";
        timeOut = setTimeout(
          evt => {
            overlayEle.style.zIndex = -1;
          }, 500
        )
      }else if (Subcategory.includes(innerText.toLowerCase())) {
        overlayContainer.scrollTo(0,0);
        document.getElementById("searchBar").value = ""
        
        if (!(document.querySelector(".navbar-toggler").classList)[1] && window.innerWidth <= 767) {
          document.querySelector(".navbar-toggler").click()
        }
        
        document.querySelectorAll(".hide, .dropdown-menu li").forEach(element => {
          console.log(element.children[0].style.color = "white")
        });
          switch (innerText.toLowerCase()) {
            case "action":
            document.querySelector('.video-container').innerHTML = ""
              appendVideoElement("Action");
              evt.target.style.color = "red";
              break;
            case "animation":
            document.querySelector('.video-container').innerHTML = ""
              appendVideoElement("Animation");
              evt.target.style.color = "red";
              break;
            case "horror":
            document.querySelector('.video-container').innerHTML = ""
              appendVideoElement("Horror");
              evt.target.style.color = "red";
              break;
            case "thriller":
              document.querySelector('.video-container').innerHTML = ""
              appendVideoElement("Thriller");
              evt.target.style.color = "red";
              break;
            case "adventure":
              document.querySelector('.video-container').innerHTML = ""
              appendVideoElement("Adventure");
              evt.target.style.color = "red";
              break;
            case "comedy":
              document.querySelector('.video-container').innerHTML = ""
              appendVideoElement("Comedy");
              evt.target.style.color = "red";
              break;
            case "war":
              document.querySelector('.video-container').innerHTML = ""
              appendVideoElement("War");
              evt.target.style.color = "red";
              break;
          }
      }
      
    }

    document.querySelector(".navbar-toggler").onclick = evt => {
      if (!(evt.currentTarget.className).match("collapsed")) {
        document.getElementById("searchIcon").style.display = "none"
      }else {
        document.getElementById("searchIcon").style.display = "inline-block"
      }

    }

   

  }

  function eventListener() {

    const navbar_height = document.querySelector('.navbar').offsetHeight;
   // document.getElementById("center").style.marginTop = navbar_height + "px"

    if (window.innerWidth <= 767) {
      document.querySelector(".searchShow").style.display = "none";
      document.getElementById("searchIcon").style.display = "inline-block";
    }else if (window.innerWidth >= 768) {
      document.querySelector(".searchShow").style.display = "flex";
      document.getElementById("searchIcon").style.display = "none";
    }
    
    
    let mql = window.matchMedia("(max-width: 767px)");
    mql.onchange = evt => {
      if (mql.matches) {
        document.querySelector(".searchShow").style.display = "none";
        document.getElementById("searchIcon").style.display = "inline-block";
      }else if (!mql.matches){
        document.querySelector(".searchShow").style.display = "flex";
        document.getElementById("searchIcon").style.display = "none";
      }
    }

  document.getElementById("searchIcon").onclick = evt => {
      document.body.style.overflow = "hidden"
      evt.currentTarget.style.display = "none";
      document.querySelector(".smallSearchC").style.display = "grid";
      }
  document.querySelector(".smallSearchC").onclick = evt =>{
    const innerText = evt.target.innerText
    console.log(innerText)
    if (innerText === "✕") {
      document.getElementById("searchIcon").style.display = "inline-block";
      document.body.style.overflow = "auto";
      document.querySelector(".smallSearch").value = ""
      document.querySelector(".smallSearchC").style.display = "none";
      document.querySelector(".overlayContainer").style.height = null;
      document.querySelector("#overlay").style.zIndex = "";

    }
  }
  document.querySelector("#searchBar").onkeyup = evt => {
    if (evt.currentTarget.value) {
      appendVideoElement("", evt.currentTarget.value)
    }else {
      document.querySelector('.video-container').innerHTML = "";
      document.querySelector(".overlayContainer .eyeC .eyeSize").style.display = "none"
    }
  }
  document.querySelector(".smallSearch").onkeyup = evt => {
    if (evt.currentTarget.value) {
      appendVideoElement("", evt.currentTarget.value)
    }else {
      document.querySelector('.video-container').innerHTML = "";
      document.querySelector(".overlayContainer .eyeC .eyeSize").style.display = "none";
    }
  }

  document.querySelector(".eyeSize").onclick = evt => {
    seeMore()
  }

  }

  async function download(fileID) {
    const url = `https://api.streamtape.com/file/dlticket?file=${fileID}&login=50403a0e358c1473d1fc&key=VGg4qRMoLytKrw2`
    let request = await fetch(url)
    let response = await request.json()
    let time = response.result.wait_time
    //alert(response.result.ticket)
    //time = parseInt(time) + 1

    setTimeout(
        evt => {
           downloadLink(fileID, response.result.ticket.trim())
        }, parseInt(`${time}000`))
}

async function downloadLink(file, ticket) {
    const url = `https://api.streamtape.com/file/dl?file=${file}&ticket=${ticket}`
    let request = await fetch(url)
    let response = await request.json()
    //alert(response.status)
    document.querySelector("#watch video").src = response.result.url

}



function alsoLike() {
    const movieKeys = Object.keys(movieLists)
    const movieCount = Object.keys(movieLists).length
    const random12 = new Set([])

    

    let alsoLikeHTML = 
    `
      <div class="col">
          <div class="card h-100 border-0 shadow">
              <a href="https://ww4.123moviesfree.net/movie/twisters-1630857443/" class="rounded poster">
                  <picture>
                      <img src="https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg" width="200" height="300" class="lazy card-img-top entered">
                      <div class="card-body item-title">
                          <h2 class="card-title text-light fs-6 m-0">Twisters</h2>
                      </div>
                      <span class="mlbq" style="font-size: 10px">4.7</span></a>
          </div>
      </div>       
    `
    while (random12.size < 12) {
     random12.add(Math.floor(Math.random() * movieCount))
    }


    for (const i of random12) {
  
      alsoLikeHTML = 
    `
      <div class="col">
          <div class="card h-100 border-0 shadow">
              <a href="

      ./stream.html?fileID=${((movieLists[movieKeys[i]].streamlink).replace("https://streamtape.com/v/", "")).split("/")[0]}
      &title=${encodeURIComponent(movieLists[movieKeys[i]].title)}
      &vtt=${movieLists[movieKeys[i]].name}" class="rounded poster">
                  <picture>
                      <img src="${movieLists[movieKeys[i]].thumbnail}" width="200" height="300" class="lazy card-img-top entered">
                      <div class="card-body item-title">
                          <h2 class="card-title text-light fs-6 m-0">${movieLists[movieKeys[i]].title}</h2>
                      </div>
                      <span class="mlbq" style="font-size: 10px">${movieLists[movieKeys[i]].ratings.split("/")[0]}/10 ⭐</span></a>
          </div>
      </div>       
    `
      document.querySelector(".row-cols-2").innerHTML += alsoLikeHTML
    }
  
}



const keY = [    
  "AIzaSyAR_5HGhoFGl9RmWsZ1cq3knvxxlLOJpos",
  "AIzaSyCv4xtt8_AqCKqlcl9qezExF6WcKMG_xkc",
  "AIzaSyAXvzSVOhoHKO2Pgb7iglWSHGg3Illmt0I",]
let keyCounter = 0
let cap = 60
const qrCodeImg = []
const imdbImg = []
function fixQrCodeImg() {
  let count = 0
  const imdbIMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvN1DODdDqkGK9YFYZgYmqR0w43w1dr4wiJtGd8j8nEQH3yY9VXQSk6CEy&s"
  const qrIMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Cnzx13cH5BzNRjG4syzVwTNHQwCujXUdqP1j35SjEsTZGfojgdHoc9Rx&s"
  for (items in movieLists) {
    if (movieLists[items].thumbnail === qrIMG) {
      qrCodeImg.push(movieLists[items])
    }else if (movieLists[items].thumbnail === imdbIMG) {
      imdbImg.push(movieLists[items])
    }
    
  }
  
  // for (let i = 0; i < qrCodeImg.length; i++) {
  //   if (i < cap) {
  //     getMovieObj(qrCodeImg[i], keY[keyCounter])
  //   }else if (i > cap) {
  //     cap *= 2
  //     keyCounter +=1
  //   }
    
  // }
  
}


async function getMovieObj(query, keY) {
  const trimmedQuery = query.name.replaceAll(/\.mp4|\.mkv/g, "").replaceAll(/\s/g, "+")
  const qrIMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Cnzx13cH5BzNRjG4syzVwTNHQwCujXUdqP1j35SjEsTZGfojgdHoc9Rx&s"
  const file2 = `https://customsearch.googleapis.com/customsearch/v1?key=${keY}&cx=f461bca9469c44902&imgSize=medium&q=${trimmedQuery}+rating`
  console.log(file2)
  let request = await fetch(file2)
  console.log(request.status)
  let response = await request.json()

  const items = response.items


  for (column in items) { 
  
    try {
      const thumbnail = items[column].pagemap.cse_thumbnail[0].src
    
      if (thumbnail !== qrIMG) {
        movieLists[query.title].thumbnail = thumbnail
        console.log(thumbnail)
        break
      }
    } catch(e) {
      console.log(e)
    } 

  }
 }
 



