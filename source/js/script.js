  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  // var form = document.querySelector('.form');
  // var catname = document.querySelector('.appointment-name');
  // var useremail = document.querySelector('.appointment-email');
  // var usertel = document.querySelector('.appointment-tel');
  // var weight = document.querySelector('.appointment-weight');

  var isStorageSupport = true;
  var storage = "";
  var storageemail = "";
  var storagetel = "";

  try {
    storageemail = localStorage.getItem("useremail");
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storagetel = localStorage.getItem("usertel");
  } catch (err) {
    isStorageSupport = false;
  }

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  form.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (storage) {
      usertel.value = storage;
    }
    if (storageemail) {
      useremail.value = storageemail;
    }
    else {
     catname.focus();
    }
  });

  form.addEventListener("submit", function(evt) {
    if (!catname.value || !weight.value || !useremail.value || !usertel.value) {
      evt.preventDefault();
      catname.classList.add("input-text--error");
      weight.classList.add("input-text--error");
      useremail.classList.add("input-text--error");
      useretel.classList.add("input-text--error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("tel", usertel.value);
        localStorage.setItem("email", useremail.value);
      }
    }
  });
