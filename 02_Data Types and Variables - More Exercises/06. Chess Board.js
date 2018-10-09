const chessBoard = (n) => {
  n = Number(n);
  let stringToReturn = '';
  stringToReturn += '<div class="chessboard">\n';
  for (let i = 1; i <= n; i++){
      stringToReturn += "\t<div>\n";
      if (i % 2 == 0) {
          for (let j = 1; j <= n; j++){
              if (j % 2 === 0)
                  stringToReturn += `\t\t<span class="black"></span>\n`;
              else 
                  stringToReturn += `\t\t<span class="white"></span>\n`;
          }
      }
      else {
          for (let j = 1; j <= n; j++){
              if (j % 2 === 0)
                  stringToReturn += `\t\t<span class="white"></span>\n`;
              else 
                  stringToReturn += `\t\t<span class="black"></span>\n`;
          }         
      }
      
      stringToReturn += "\t</div>\n";
  }
  stringToReturn += "</div>\n";
  return stringToReturn;
}