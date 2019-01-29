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



// 9. === Click === Click on sign me up to say alert 'everything is full'.

// 10. === Contextmenu === right clicking on something removes it. 

// 11. === Keypress === pressing space either takes you to the bottom or the top.



});