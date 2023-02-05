/**
 * some JavaScript code for this blog theme
 */
/* jshint asi:true */

/////////////////////////header////////////////////////////
/**
 * clickMenu
 */
(function() {
  if (window.innerWidth <= 770) {
    var menuBtn = document.querySelector('#headerMenu')
    var nav = document.querySelector('#headerNav')
    menuBtn.onclick = function(e) {
      e.stopPropagation()
      if (menuBtn.classList.contains('active')) {
        menuBtn.classList.remove('active')
        nav.classList.remove('nav-show')
      } else {
        nav.classList.add('nav-show')
        menuBtn.classList.add('active')
      }
    }
    document.querySelector('body').addEventListener('click', function() {
      nav.classList.remove('nav-show')
      menuBtn.classList.remove('active')
    })
  }
}());

//////////////////////////back to top////////////////////////////
(function() {
  var backToTop = document.querySelector('.back-to-top')
  var backToTopA = document.querySelector('.back-to-top a')
  // console.log(backToTop);
  window.addEventListener('scroll', function() {

    // 页面顶部滚进去的距离
    var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)

    if (scrollTop > 200) {
      backToTop.classList.add('back-to-top-show')
    } else {
      backToTop.classList.remove('back-to-top-show')
    }
  })

  backToTopA.addEventListener('click',function (e) {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  })
}());

//////////////////////////hover on demo//////////////////////////////
(function() {
  var demoItems = document.querySelectorAll('.grid-item')
}());

//////////////////////////image preview//////////////////////////////
(function(){
    const imagePriviewModal = document.querySelector('#imagePriviewModal');
    const closeBtn = imagePriviewModal.querySelector('#imagePriviewClose');
    const previewImg = imagePriviewModal.querySelector('#imagePriviewImg');
    const caption = imagePriviewModal.querySelector('#imagePriviewCaption');

    let imgs = document.querySelectorAll('img');
    imgs.forEach(function(img){
      img.onclick = function(){
        imagePriviewModal.style.display = "block";
        previewImg.src = this.src;
        caption.innerHTML = this.alt;
      }
    })

    closeBtn.onclick = function(){
        imagePriviewModal.style.display = "none";
    }

    imagePriviewModal.onclick = function(){
        imagePriviewModal.style.display = "none";
    }
}());


