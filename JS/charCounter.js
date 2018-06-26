const msgInput = document.querySelector('.msgInput');
const msgCounter = document.querySelector('.msgCounter');
const tagInput = document.querySelector('.tagInput');
const tagCounter = document.querySelector('.tagCounter');

const ensureContentLength = (content, max) => {
  if(content.length > max){
    return false;
  } else{
    return true;
  }
}

msgInput.onkeyup = () => {
  const max = 144;
  msgCounter.innerHTML = max - msgInput.value.length;
  if (!ensureContentLength(msgInput.value, (max - 1))) {
    console.log('');
    msgInput.disabled = true;
  }
}

tagInput.onkeyup = () => {
  const max = 20;
  tagCounter.innerHTML = max - tagInput.value.length;
  if (!ensureContentLength(tagInput.value, (max - 1))) {
    console.log('');
    tagInput.disabled = true;
  }
}

/*
const getCurrentContentLength = (content, max) => {
    const maxLength = max;
    if (content.length > maxLength) {
      return false;
    } else {
      return true;
    }
  }
  const msgInput = document.querySelector('.msgInput');
  const msgCounter = document.querySelector('.msgCounter');
  const tagsInput = document.querySelector('.tags');
  const tagsCounter = document.querySelector('.tagsCounter');

  // Nope
  // msgInput.addEventListener('keyup', (e) => {
  //   console.log(e);
  // });

  const textFieldLengthValidator = (textField, counter, maxCount) => {
    textField.onkeyup = function() {
        counter.innerHTML = maxCount - this.value.length;

        if(!getCurrentContentLength(this.value, (maxCount - 1))) {
            textField.disabled = true;
        }
    }
  }

  textFieldLengthValidator(msgInput, msgCounter, 144);
  textFieldLengthValidator(tagsInput, tagsCounter, 42);
*/
