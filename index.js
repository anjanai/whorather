var celeb_bank = [
    [
	/*
	  Bill Clinton, Prince Charles
	  Mr Bean
	  Richard Gere
	  Virat Kohli
	  Benjamin Bratt
	  Amitabh (younger days)
	  Sophia Loren	  
	*/
	"https://upload.wikimedia.org/wikipedia/commons/d/d3/Bill_Clinton.jpg",
	"https://hips.hearstapps.com/hmg-prod/images/prince-charles-prince-of-wales-poses-for-an-official-news-photo-1573163200.jpg",
	"https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
	"https://m.media-amazon.com/images/M/MV5BMTI2NDQ2OTY4M15BMl5BanBnXkFtZTYwNTYyNjc4._V1_FMjpg_UX1000_.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShm-Yo8ZoIK9bJPSjEW0Zo3ig9Mlk-ZOIW7g&usqp=CAU",
	"https://static.tvtropes.org/pmwiki/pub/images/benjamin_bratt.jpg",
	"https://i.ndtvimg.com/i/2015-05/amitabh-bachchan_640x480_51431434404.jpg",
	"https://content.api.news/v3/images/bin/a99dc8298b33c91e4e4ce69873970d96",
    ],

    
    [
	/*
	  Steve Jobs, Bill Gates
	  Viv Richards
	  Hritik Roshan
	  Lewis Hamilton (F1)
	  Hugh Grant
	  Amitabh (older days)
	  Julia Roberts
	*/
	"https://cdn.mos.cms.futurecdn.net/3f8ff38c50a1ebb8045c180b7fce9b5b-1200-80.jpg",
	"https://hai.stanford.edu/sites/default/files/styles/person_big/public/2020-03/billgatesheadshot.jpg?itok=6fmYlCKg",
	"https://www.caribbeannationalweekly.com/wp-content/uploads/2022/05/VIV-RICHARDS.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hrithik_at_Rado_launch.jpg/220px-Hrithik_at_Rado_launch.jpg",
	"https://cdn-6.motorsport.com/images/mgl/0mb95oa2/s800/lewis-hamilton-mercedes-1.jpg",
	"https://m.media-amazon.com/images/M/MV5BMTc4MTgxOTk2Ml5BMl5BanBnXkFtZTcwNzMwMjYwMw@@._V1_FMjpg_UX1000_.jpg",
	"https://m.media-amazon.com/images/M/MV5BNTk1OTUxMzIzMV5BMl5BanBnXkFtZTcwMzMxMjI0Nw@@._V1_.jpg",
	"https://cdn.britannica.com/01/236601-050-2CFDF711/Julia-Roberts-2019.jpg",
    ],

    
    [
	/*
	  Seinfeld, Jay Leno
	  Indian Comedian Vir Das
	  Zakir Hussein
	  Joey from Friends
	  Paul McCartney
	  Anil Ambani
	  Julie Andrews
	  
	*/
	"https://www.pbs.org/wnet/pioneers-of-television/files/2014/04/9088097831_d31af2d6e5_o.jpg",
	"https://hips.hearstapps.com/hmg-prod/images/gettyimages-660314202.jpg",
	"https://i.scdn.co/image/ab6761610000e5eb0b0764268407db8b3a218301",
	"https://upload.wikimedia.org/wikipedia/en/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Paul_McCartney_2021_%28cropped%29.jpg/800px-Paul_McCartney_2021_%28cropped%29.jpg",
	"https://cdn.dnaindia.com/sites/default/files/2023/04/27/2587080-anil-ambani.png?im=FitAndFill=(1200,900)",
	"https://hips.hearstapps.com/hmg-prod/images/julie-andrews-GettyImages-130044748_1600.jpg",
    ]
]

var container = document.getElementById("celebCont");
container.style.opacity="100%";
const urlParams = new URLSearchParams(window.location.search);
n = urlParams.get('n');
if (!n) n=0;
var celebs = celeb_bank[n];

// CELEB IMGS--------------------------------------------------------------
var i = celebs.length;
j= 0;

function create_image (num) {
    let img = document.createElement("img");
    img.src = celebs[j++];
    img.className="img" + num;
    let box, xbox;
    
    if (num == 1) {
	box = document.getElementById("celebbox1");
	xbox = document.getElementById("celebbox2");
    } else {
	box = document.getElementById("celebbox2");
	xbox = document.getElementById("celebbox1");
    }
    box.appendChild(img);
    $(box).click(function(){
	if (j == celebs.length) xbox.style.display="none";
	else xbox.children[0].src = celebs[j++];
    })
}

create_image(1);
create_image(2);





