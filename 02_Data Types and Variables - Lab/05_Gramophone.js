const getPlateRotations = (bandName = '', albumName = '', songName = '') => {
    let songDuration = (albumName.length * bandName.length) * songName.length / 2
    let rotations = Math.ceil(songDuration / 2.5)
    return `The plate was rotated ${rotations} times.`
}

console.log(getPlateRotations('Black Sabbath', 'Paranoid', 'War Pigs'));
