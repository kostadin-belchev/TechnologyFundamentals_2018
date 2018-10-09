const solve = (radius, height) => {
  let volume = Math.PI*radius*radius*(height/3);
  let surfaceArea = Math.PI*radius*(radius+Math.sqrt(height*height + radius*radius));
  console.log("volume = " + volume.toFixed(4));
  console.log("area = " + surfaceArea.toFixed(4));
}