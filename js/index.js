// Your code goes here

// 1. === Load === wait for everything on load.\
window.addEventListener('load', () => {

// 2. === Mouseover === change title image on mouseover.

  const titleImage = document.getElementById('title-image');
  titleImage.addEventListener('mouseover', () => {
    titleImage.src = 'img/destination.jpg';
  });

// 3. === Mouseout === change title image back on mouseout.
  titleImage.addEventListener('mouseout', () => {
    titleImage.src = 'img/fun-bus.jpg';
  });

// 4. === Keydown === go to contact link when you hit the c key.

  window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyC') {
      window.location.href = '/contact';
    }
  });

// 5. === Focus === change the color of the navigation item when in "focus".

  const navs = document.querySelectorAll('.nav-link');

    navs.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
      });
      item.addEventListener('focus', () => {
        item.style.color = '#17A2B8';
      });

// 6. === Blur === change the color of the navigation item when not in focus anymore 
    item.addEventListener('blur', () => {
      item.style.color = '#212529'; 
    });
  });

// 7. === Dblclick === open an image in new window when you double click on it.

  const adventure = document.getElementById('adventure');
  adventure.addEventListener('dblclick', () => {
    window.location.href = 'img/adventure.jpg';
  });

// 8. === Scroll === Make header get smaller as you "scroll" down.

  const header = document.querySelector('header');
    window.addEventListener('scroll', (event) => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.height = '40px';
      } else {
        header.style.height = '90px';
      }
    });

// 9. === Click === Click on first 'sign me up' to say alert 'everything is full'.

  const check = document.querySelectorAll('.btn');
    check[0].addEventListener('click', () => {
      alert('Unfortunately, this resort is now fully booked!');
    });

// 10. === Contextmenu === right clicking on something removes it. 

  window.addEventListener('contextmenu', (event) => {
    // preventDefault() prevents the right click menu from being displayed. 
    event.preventDefault();
    event.target.remove();
  });

// 11. === Keypress === pressing space either takes you to the bottom or the top.

window.addEventListener('keyup', (event) => {
  if (event.code === 'KeyJ') {
    const { body } = document;
    const html = document.documentElement;

    const height = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);

    const currentScrollLocation = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScrollLocation === 0) {
      window.scrollTo({
        top: height,
        left: 1000,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }
});
// === Preventing event propagation

  let contentDestination = document.querySelector('.content-destination');
  let imageDestination = document.querySelector('#destination');

  contentDestination.addEventListener('click', () => {
    console.log("handler for SECTION");
  });

  imageDestination.addEventListener('click', event => {
    console.log("handler for IMAGE");
    if (event.target.nodeName == 'IMG') {
      event.stopPropagation();
    } 
  });


});