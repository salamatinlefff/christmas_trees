const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', () => {
  if (navigation.classList.contains('navigation_active')) {
    burger.classList.remove('burger_active')

    navigation.classList.remove('navigation_visible_opacity')
    navigation.classList.add('navigation_hidden_opacity')
    setTimeout(() => {
      navigation.classList.remove('navigation_active')
    }, 300)
    
    
  } else {
    burger.classList.add('burger_active')

    navigation.classList.add('navigation_active')
    setTimeout(() => {
    navigation.classList.remove('navigation_hidden_opacity')
    navigation.classList.add('navigation_visible_opacity');
    }, 100)

  }
});
// ! При первом клике не работает анимация, что-то не так, потом всё работает как надо.. На широком экране не работает анимация потому что опасити на 1000px вешается
