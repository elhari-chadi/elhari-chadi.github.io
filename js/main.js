const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const overview = document.querySelector("#overview")
const resume = document.querySelector("#resume")
const home = document.querySelector("#home")
var wContact = 0
var wAbout = 0
var wOver = 0

const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const cont = document.querySelector('#cont')




resume.addEventListener('click', () => {
  window.location.href = "cv.pdf";

})

home.addEventListener('click', () => {
  window.location.href = "index.html";

})

function nothing() {
  return 1;
}

var consolebox = new WinBox({
  title: 'Terminal',
  class: 'no-close conso',
  mount: document.getElementById("test"),
  root: document.getElementById("cont"),
  onfocus: function() {
    this.setBackground('#00aa00')
  },
  onclose: function() {
    return true;
  },
  top: document.querySelector("#titre").getBoundingClientRect().top + document.documentElement.scrollTop + document.querySelector("#titre").offsetHeight + 20,
  right: "10%",
  bottom: "4%",
  height: "400px",
  max: true,
  left: "10%"
})

overview.addEventListener('click', () => {


  if (wOver == 0) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'terminal2.js');
    document.head.appendChild(script);

    //  window.location.href = "overview.html";
    const overBox = new WinBox({
      title: 'Overview',
      width: '1000px',
      right: "10%",
      bottom: "4%",
      class: 'no-close ovr',
      top: "2%",
      height: "300px",
      max: true,
      left: "10%",
      mount: document.getElementById("test2"),
      root: document.getElementById("cont2"),
      onclose: function() {
        wOver = 0
        return true;
      },
      onfocus: function() {
        this.setBackground('#00aa00')
      }
    })
    wOver = overBox
  }
})



about.addEventListener('click', () => {
  if (wAbout == 0) {
    const aboutBox = new WinBox({
      title: 'Projects',
      width: '350',
      height: '400px',
      top: 25,
      right: 25,
      root: document.getElementById("mnt"),
      onclose: function() {
        wAbout = 0
        return false;
      },
      bottom: 25,
      left: 25,
      mount: aboutContent,
      onfocus: function() {
        this.setBackground('#00aa00')
      }
    })
    wAbout = aboutBox
  }
})

contact.addEventListener('click', () => {
  if (wContact == 0) {
    const contactBox = new WinBox({
      title: 'Contact Me',
      background: '#00aa00',
      root: document.getElementById("mnt"),
      width: '350',
      height: '300px',
      top: 25,
      right: 25,
      onclose: function() {
        wContact = 0
        return false;
      },
      bottom: 25,
      left: 25,
      mount: contactContent,
    })
    wContact = contactBox
  }
})

$(window).resize(function() {
  if (this.resizeTO) clearTimeout(this.resizeTO);
  this.resizeTO = setTimeout(function() {
    $(this).trigger('resizeEnd');
  }, 500);
});

$(window).bind('resizeEnd', function() {
  if (consolebox.min != 1) {
    consolebox.maximize();
    consolebox.maximize();
  }
});
