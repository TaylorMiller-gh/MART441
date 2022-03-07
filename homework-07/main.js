var info = new Array();

class viewer {

  constructor(title, img, auth, desc, year) {
    this.title = title;
    this.img = img;
    this.auth = auth;
    this.desc = desc;
    this.year = year;
  }

  toString() {
    let str;
    str = 'Title: ${this.title}; Auth: ${this.auth}; ${this.desc}; ${this.img}';
    return str;
  }
}

function setArray () {

  var viewer1 = new viewer('Thich Nhat Hanh', './images/hanh.jpg', 'Unknown', 'Thich Nhat Hanh is the founder of Engaged Buddhism, or socially engaged Buddhism, and has worked on social justice internationally since the 1940s.', '2015');
  info.push(viewer1);
  var viewer2 = new viewer('Marina Abramović', './images/marina.JPG', 'Museum of Modern Art', 'Performance artist Marina Abramović has confronted cultural issues and social identity for over forty years with performative art.', '2010');
  info.push(viewer2);
  var viewer3 = new viewer('Napalm Death', './images/death.jpg', 'Kevin Estrada', 'Founders of Grindcore, Napalm Death roar messages of humanism and equal rights through a shocking, visceral form of music.', '2020');
  info.push(viewer3);
  var viewer4 = new viewer('Pussy Riot', './images/riot.jpg', 'Youtube/Pussy Riot', '"Hooligan" performance group of Moscow, Pussy Riot, has staged guerilla performances since 2011 to stand against Russian tyranny and promote feminism, LGBTQ+ rights, and equality.', '2018');
  info.push(viewer4);
  var viewer5 = new viewer('Natalie Wynn', './images/wynn.jpg', 'Youtube/Contrapoints', 'Natalie Wynn (aka Contrapoints) challenges cultural norms and tyranny through aesthetic/performative video essays, discussing a range of topics such as identity, ethics, politics, and philosophy.', '2021');
  info.push(viewer5);

}

function display() {

  //console.log('okay');
  //console.log(info.join());

  var random = Math.floor(Math.random()*info.length);

  document.getElementById('title').innerHTML = info[random].title;
  document.getElementById('auth').innerHTML = "Image Source: " + info[random].auth;
  document.getElementById('desc').innerHTML = info[random].desc;
  document.getElementById('year').innerHTML = ", " + info[random].year;
  document.getElementById('img').src = info[random].img;
}
