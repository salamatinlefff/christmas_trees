const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationActive = document.querySelector('.navigation_active');

burger.addEventListener('click', () => {
  if (!navigation.classList.contains('navigation_active')) {
    navigation.classList.add('navigation_active')
    
    setTimeout(() => {
      navigation.classList.remove('navigation_hidden_opacity')
      navigation.classList.add('navigation_visible_opacity')
    }, 100)
    
  } else {
    navigation.classList.remove('navigation_visible_opacity')
    navigation.classList.add('navigation_hidden_opacity')
    setTimeout(() => {
      navigation.classList.remove('navigation_active')
    }, 300)
    
  }
});

