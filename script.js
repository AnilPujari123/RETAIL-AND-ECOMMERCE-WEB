const bar = document.getElementByid('bar');
const close = document.getElementByid('close');
const nav = document.getElementByid('navbar');

if (bar) {
    bar.addEventlistener('click', () => {
      nav.classlist.add('active')  
    })
}


if (close) {
    close.addEventlistener('click', () => {
      nav.classlist.remove('active')  
    })
}
