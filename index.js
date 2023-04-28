var celebs = [
    /*Taylor Swift*/"https://media.vogue.in/wp-content/uploads/2019/03/Taylor-Swift2-400x400.jpg", 
    /*olivia rodrigo */ "http://images.sk-static.com/images/media/img/col6/20210113-024938-851136.jpg",
    /*jakey */"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a88e1f03-f931-4e43-9325-92758c8ce4ca/dckr0w8-67028867-7af5-4987-ab36-e04b9a7c30e4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E4OGUxZjAzLWY5MzEtNGU0My05MzI1LTkyNzU4YzhjZTRjYVwvZGNrcjB3OC02NzAyODg2Ny03YWY1LTQ5ODctYWIzNi1lMDRiOWE3YzMwZTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UWbATXDY03mdsE7LuE24qLYSgQznuBp8DSNOuyJ7bHk",
    /*dylan brien */"https://pbs.twimg.com/profile_images/441438607828451328/g24eSR4S_400x400.jpeg",
    /*cardi*/"https://pyxis.nymag.com/v1/imgs/381/ef7/dd19778cf415a34a8c9ef3fe11915a9e62-27-cardib.rsquare.w700.jpg",
    /*will*/"https://pbs.twimg.com/profile_images/2833439682/3d44e6de40db4c108bfef35a5d0fec8f_400x400.jpeg",
    /*chris rock*/"https://bookingagentinfo.com/wp-content/uploads/2020/02/Chris-Rock-Contact-Information.jpg",
    /*megan fox*/"https://lh5.googleusercontent.com/kbT3YIphtUVNOofTobWJ7mo9QkMRjKZXEpgt9mAcjWZxaccB5XIemmRsTXrP05jKlrhe7TxQEXarc9toUDvJ-VLAJVto93qgzstMomCRKVok49XcjLF56WRuYGlzPA7rgJ1ytvBm",
    /*timothee c*/"https://celebposter.com/thumbs/Timothee-Chalamet-poster_2882053_b.jpg",
    /*tom holland*/"https://biographymask.com/wp-content/uploads/2021/04/Tom-Holland.jpg",
    /*louis patridge*/"https://biographymask.com/wp-content/uploads/2020/10/Louis-Partridge.jpg",
    /*angelina jolie*/"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2005%2F04%2F12%2F112217-2017-angelina.jpg&w=400&h=400&c=sc&poi=%5B818%2C818%5D&q=60",
    /*gracie abrams*/"https://biographymask.com/wp-content/uploads/2021/08/Gracie-Abrams-pp.jpg",
    /*steph curry*/"https://bookingagentinfo.com/wp-content/uploads/2016/09/Stephen-Curry-Contact-Information.jpg",
    /*conan gray*/"https://i.pinimg.com/originals/2b/37/6f/2b376fdb7fe284e8fccefcb3ccbd2ab2.png",
    /*gwneyth patlrow*/"https://static.toiimg.com/thumb/imgsize-7485,msid-15806945,width-400,resizemode-4/15806945.jpg",
    /*harry styles*/"https://pbs.twimg.com/profile_images/1206348813998407688/l5PlCgWL_400x400.jpg",
    /*johnny dep*/"https://barnebys.imgix.net/https%3A%2F%2Fpictures.abebooks.com%2FPHPAUTOGRAPHS%2F30787431224.jpg?auto=format%2Ccompress&crop=0&cs=tinysrgb&fit=crop&h=400&ixlib=php-2.3.0&trim=auto&w=400&s=245a3e051e7b01adde20026eee638812",
    /*emma watson*/"https://pbs.twimg.com/profile_images/486193636296912896/oqxLlsmo.jpeg",
    /*emma stone*/"https://thumbor.forbes.com/thumbor/400x400/https://specials-images.forbesimg.com/imageserve/a1cafc3b81904cbc8b0df9b2b0f033eb/960x960.jpg?fit=scale&background=000000",
    /*selena gomez*/"https://pbs.twimg.com/profile_images/1490735661409832963/MdjPf5jL_400x400.jpg",
    /*phoebeb ridgers*/"https://idposter.com/img/bigs/960/id941246.jpg",
    /*zendaya*/"https://biographymask.com/wp-content/uploads/2019/10/Zendaya-actress..jpg",
    /*robert pattison*/"https://biographymask.com/wp-content/uploads/2019/11/Robert-Pattinson.jpg",
    /*taylor lautner*/"https://celebposter.com/thumbs/Taylor-Lautner-poster_2250566_b.jpg",
    /*billie eilish*/"https://pbs.twimg.com/profile_images/1387065127208247299/bni08CVZ_400x400.jpg",
    /*simu liu*/"https://preview.redd.it/v2a7jihxjsz61.jpg?width=400&format=pjpg&auto=webp&s=e9bcb706b1867b33f452db6ab9af58f68fe6541b",
    /*dua lipa*/"https://i.ebayimg.com/images/g/DmkAAOSwjbZhSA9o/s-l400.jpg",
    /*gemma chan*/"https://biographymask.com/wp-content/uploads/2021/09/Gemma-Chan-pp.jpg",
    /*awkwafina*/"https://biographymask.com/wp-content/uploads/2021/04/Awkwafina.jpg",
    /*kim k*/"https://thumbor.forbes.com/thumbor/400x400/https://specials-images.forbesimg.com/imageserve/582b7ef3a7ea431d601967d6/960x960.jpg?fit=scale&background=000000",
    /*gigi hadid*/"https://biographymask.com/wp-content/uploads/2020/04/Gigi-Hadid.jpg",
    /*zayn*/"https://avatarfiles.alphacoders.com/189/189349.jpg",
    /*jack harlow*/"https://biographymask.com/wp-content/uploads/2021/04/Jack-Harlow-.jpg",
    /*ian somerhalder*/"https://i.pinimg.com/474x/86/b6/c3/86b6c328e494a7af72fe54675d7abbde.jpg",
]

// PROMPT-----------------------------------------------------------------

var container = document.getElementById("celebCont");
container.style.opacity="100%";
num=0;
console.log("You have started the game");


// CELEB IMGS--------------------------------------------------------------
var i = celebs.length;
j= Math.floor(Math.random()*(i+1));
k= Math.floor(Math.random()*(i+1));
  
var img1 = document.createElement("img");
img1.src = celebs[j];
img1.className="img1";

 var img2 = document.createElement("img");
 img2.src= celebs[k];
 img2.className="img2";

var celeb1= document.getElementById("celebbox1");
celeb1.appendChild(img1);
$(celeb1).click(function(){
    k= Math.floor(Math.random()*(i+1));
    img2.src = celebs[k];
    if(k=celebs.length){
        k = -1;
    }
 }
)
 var celeb2= document.getElementById("celebbox2");
 celeb2.appendChild(img2);
 $(celeb2).click(function(){
    j= Math.floor(Math.random()*(i+1));
    img1.src = celebs[j];
    if(j=celebs.length){
        j = -1;
    }
 }
)


//SCORE COUNT--------------------------------------------------------------
var clickCount=0;
$(container).click(function(){
    clickCount++;   
    console.log(clickCount);
    if(clickCount>9 ){
       stop(); 
        // console.log("YOU WONNNNNNNN!!!!!!! DID YOU LIKE THE GAME?");
    }

    // if(clickCount > 9 ){
    //     stop(); 
    //      console.log("YOU WONNNNNNNN!!!!!!! DID YOU LIKE THE GAME?");
    //  }
   
 }
)

var lastClicked;

function stop(){
   
    $(document).ready(function(){
        $('button').click(function(event){
            lastClicked = event.target.className;
            console.log(lastClicked);

     if (lastClicked = img1){
        
        celeb2.style.display="none";
        celeb1.style.display="block";
    }
    else if (lastClicked = img2){
        celeb1.style.display="none";
        celeb2.style.display="block";
    }

    prompt.innerHTML="You'd Rather " + choosePrompt[num];
    prompt.style.fontSize="300%";
    prompt.style.color="rgb(115, 255, 0)";
    prompt.style.lineHeight="80px";
    celeb1.style.height="500px";
    celeb2.style.height="500px";
    celeb1.style.width="500px";
    celeb2.style.width="500px";
    img1.style.height="400px";
    img2.style.height="400px";
    img1.style.width="400px";
    img2.style.width="400px";
    container.appendChild(playAgain);
    container.style.display="block";
        });
     });
}

var playAgain= document.createElement("button");
playAgain.innerHTML="Play Again";
playAgain.className="playAgainButton";
$(playAgain).click(function(){
    num=0;
    window.location.reload();
})




