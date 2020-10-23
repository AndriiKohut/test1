document.getElementById('check').onclick = (function () {
  document.getElementById('check').classList.toggle('active');
})(
  // "meth" is not meaningful - what it's actually doing?
  // variables and methods/functions and other names should nicely describe what they actually do
  // in this case good names are:
  /**
   * initPaymentMethodSwitch
   * handlePaymentSwitch
   * paymentMethodSelector
   * paymentMethodSwitcher
   **/

  // If you're not goin to call tab(), meth()
  // for such things you can just create self executable function
  // IIFE
  // https://developer.mozilla.org/en-US/docs/Glossary/Self-Executing_Anonymous_Function
  // https://developer.mozilla.org/en-US/docs/Glossary/IIFE

  (function () {
    let shippingMethods = document.querySelectorAll('.price__box'),
      tabContent = document.querySelectorAll('.bill__inner_right'),
      tabName;

    shippingMethods.forEach((item) => {
      item.addEventListener('click', selectTabNav);
    });

    function selectTabNav() {
      // pay attention to texts so ther shouldn't be any typos :)
      // checked !== checked
      shippingMethods.forEach((item) => {
        item.classList.remove('checked');
      });
      this.classList.add('checked');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
      tabContent.forEach((item) => {
        item.classList.contains(tabName)
          ? item.classList.add('checked')
          : item.classList.remove('checked');
      });
    }

    // use let for methods if you're going to reassgin it, it'll be more clear
    // use the same methodology for delcaration
    /*
      let meth = function() {
      function selectTabContent(tabName) {
    */
    let paymentMethods = document.querySelectorAll('.payment-method');

    paymentMethods.forEach((item) => {
      item.addEventListener('click', selectMethod);
    });

    function selectMethod() {
      paymentMethods.forEach((item) => {
        item.classList.remove('checked');
      });
      this.classList.add('checked');
    }
  })(),
);

function handleKeyPress(event) {
  const element = event.target;
  // follow similar naming conventions
  // selectMethod
  // input_onchange => inputOnChange

  // give more descriptive names
  // like handleKeyPress (in this particular case)

  if (this.value.length < element.getAttribute('maxlength') - 1) {
    return;
  }
  let i;
  let elements = this.form.elements;
  for (i = 0, numElements = elements.length; i < numElements; i++) {
    if (elements[i] == element) {
      break;
    }
  }
  if (elements[i + 1]) {
    elements[i + 1].focus();
  }
}
// it's better to avoid different call methods so don't mess inline onkeypress with addEventListeners
// you can do this if you don't have another way but try to avoid such cases :)

const cardInputs = document.querySelectorAll('.card .input');

cardInputs.forEach(function (element) {
  element.addEventListener('keypress', handleKeyPress);
});

// Cleanup code, remove comments :)
