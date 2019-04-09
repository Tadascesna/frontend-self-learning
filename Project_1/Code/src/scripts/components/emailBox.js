let emailBox = module.exports = {
  init() {
    this.emailListener();
  },
  emailListener() {
    let typeBox = document.getElementById('textInput');
    typeBox.addEventListener('click', function() {
      emailBox.emailFocus();
    })
  },

  typeBoxStatus: false,

  emailFocus() {
    let getEmailContainer = document.getElementById('emailContainer');

  
    if (this.typeBoxStatus === false) {
      getEmailContainer.classList.add('-active');
      this.typeBoxStatus = true;
    }
  
    else if (this.typeBoxStatus === true) {
      getEmailContainer.classList.remove('-active');
      this.typeBoxStatus = false;
    }
  }
} 