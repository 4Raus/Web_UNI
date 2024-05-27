function serializeForm(formNode) {
  const {elements} = formNode;

  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .forEach((element) => {
      const {name, value} = element;
      return {name, value};
    });
  return data;
}

function validateRegForm(data) {
  const email = data.find(el => el.name === 'logemail');
  if (email === undefined) {
    throw new 'Email not found';
  }
  const name = data.find(el => el.name === 'logname');
  if (name === undefined) {
    throw new 'Name not found';
  }
  const password = data.find(el => el.name === '')
}

function handleRegFormSubmit(event) {
  event.preventDefault()
  const data = serializeForm(regForm);

  console.log('Send!')
}

const regForm = document.getElementById('reg-form')
// regForm.addEventListener('submit', handleRegFormSubmit)