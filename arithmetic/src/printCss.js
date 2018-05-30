const cssText = `
body {
  height: 297mm;
  width: 210mm;
  /* to centre page on screen*/
  margin-left: auto;
  margin-right: auto;
}

h1,
h2 {
  font-family: 微软雅黑;
}

.center {
  text-align: center;
}

div.row {
  margin-left: 5mm;
  margin-right: 5mm;
  margin-top: 5mm;
}

div.row > h2 {
  display: inline;
}

h3 {
  float: left;
  font-size: 1.5em;
  /*Consolas Courier New*/
  font-family: Courier New;
  width: 20%;
  margin-top: 0;
  margin-bottom: 0.9em;
}

.incompact {
  font-size: 1.3em;
  width: 25%;
}

.most-incompact {
  width: 33%;
}

.name {
  margin-left: 100mm;
}
`

export default cssText
