sendMessage = () => {
  const newDiv = document.createElement("div");
    newDiv.classList.add('chatMsg');
    let chatInput = document.querySelector('#chat-input').value;
    const newContent = document.createTextNode(chatInput);
    newDiv.appendChild(newContent);
    const widget = document.querySelector(".widget");
    let chatWrapper = document.querySelector("chat-wrapper");
    document.querySelector('#chat-input').value = '';
    if (document.querySelectorAll('.chatMsg').length > 0) {
      chatWrapper = document.querySelectorAll('.chatMsg')[0];
    }
    widget.insertBefore(newDiv, chatWrapper);
  }
