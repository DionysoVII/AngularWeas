interface Mp3 {
    audioVolume: number
    songDuration: number
    song: string
    details: Details
}

interface Details{
    autor: string
    year: number
}

const audioPlayer: Mp3 ={
    audioVolume: 75,
    songDuration: 120,
    song: "Toxicity",
    details: {
        autor: 'SOAD',
        year: 2001
    }
}

const{song: Song, songDuration: Duration} = audioPlayer
const{autor: autor}=audioPlayer.details
// console.log(Song)
// console.log(Duration)


// console.log(autor)


const [,, dagg ='not found']: string[] = ['Doran','Souma',]



console.log(dagg)

























