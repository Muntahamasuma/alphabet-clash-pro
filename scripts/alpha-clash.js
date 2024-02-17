// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playgroundSection =document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
//     // console.log(playgroundSection.classList)
// }

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
}