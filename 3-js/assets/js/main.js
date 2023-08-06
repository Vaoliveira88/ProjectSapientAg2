// jQuery
// $(document).ready(function() {
// code
// });

// Vanilla JS

window.onload = function () {
  const $toggleMenuBtn = document.querySelector('#menu-button')
  const $menu = document.querySelector('#menu');
  const $videoCover = document.querySelector('#video-cover');
  const $videoPlayer = document.querySelector('#video-player');
  const $accordionItems = document.querySelectorAll('.item');
  const $factElement = document.querySelector('#wiki .extract');

  $toggleMenuBtn.addEventListener('click', () => {
    $menu.classList.toggle('-active');
  });

  $videoCover.addEventListener('click', () => {
    $videoPlayer.play();
  });

  $videoPlayer.addEventListener('playing', () => {
    if (!$videoCover.classList.contains('-inactive')) {
      $videoCover.classList.add('-inactive');
    }
  });

  $accordionItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('-active')
    })
  })

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const response = JSON.parse(this.responseText);
    $factElement.innerHTML = response.fact;
  }
  xhttp.open('GET', 'https://catfact.ninja/fact');
  xhttp.send();

  const switchModal = () => {
    const modalWiki = document.querySelector(".modal-wiki");
    const btn = document.getElementById("button-modal");

    modalWiki.classList.toggle("modal-wiki-active");
    if (modalWiki.classList.contains("modal-wiki-active")) {
      btn.textContent = "Fechar";
    } else {
      btn.textContent = "Abrir foto";
    }
  };

  const btn = document.getElementById("button-modal");
  btn.addEventListener("click", switchModal);

  const closeModal = document.getElementById("close-modal");
  closeModal.addEventListener("click", switchModal);

  window.onclick = function (event) {
    const modalWiki = document.querySelector(".modal-wiki");
    if (event.target === modalWiki) {
      switchModal();
    }
  };

};