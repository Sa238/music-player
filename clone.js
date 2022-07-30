let musics=[

    {
        id:1,
        name:"channa mereya",
        artist:"Arijit Singh",
        audioSrc:"music player clone/audio/Channa_Mereya.mp3",
        imageSrc:"music player clone/images/channa mereya.jpg"
    },
    {
        id:2,
        name:"Crook Mere bina",
        artist:"Nikhil D'souza",
        audioSrc:"music player clone/audio/Crook - Mere Bina.mp3",
        imageSrc:"music player clone/images/Crook-mere bina.jpg"
    },
    {
        id:3,
        name:"Hosana-Ekk deewana tha",
        artist:"Leon D'Souza, Suzanne & Blaaze",
        audioSrc:"music player clone/audio/Hosanna_-_Ekk_Deewana_Tha___Prateik_Babar___Amy_Jackson.mp3",
        imageSrc:"music player clone/images/Hosana ek deewana tha.jpg"
    },
    {
        id:4,
        name:"Love Me",
        artist:"Justin Bieber",
        audioSrc:"music player clone/audio/Love_Me_(Album_Version).mp3",
        imageSrc:"music player clone/images/love me.jpg"
    },
    {
        id:5,
        name:"Tu jane na ",
        artist:"Atif Aslam",
        audioSrc:"music player clone/audio/TU_JAA~1.MP3",
        imageSrc:"music player clone/images/Tu jane na.jpg"
    }

]


for(let i=0;i<musics.length;i++)
{

    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let desc=document.createElement("div");
    desc.classList.add("desc");


    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    desc.append(h2);

    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    desc.append(h3);

    tile.append(desc);

    tile.addEventListener("click",function(){
        playMusic(musics[i]);
    });

    document.querySelector(".music-list").append(tile);

}



function playMusic(music)

{
    console.log(music)
    

    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    // document.querySelector(".audio").src=music.audioSrc;
    // document.querySelector(".audio").play();

}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";

}