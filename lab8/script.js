document.addEventListener('DOMContentLoaded', () => {
    const addElementButton = document.getElementById('add-element');
    const saveButton = document.getElementById('save');
    const elementList = document.getElementById('element-list');
    const resultDiv = document.getElementById('result');
  
    let elements = [];
  
    function createElement(name = ``, value = '') {
      const li = document.createElement('li');
  
      const inputName = document.createElement('input');
      inputName.type = 'text';
      inputName.value = name;
  
      const inputValue = document.createElement('input');
      inputValue.type = 'text';
      inputValue.value = value;
  
      const moveUpButton = document.createElement('button');
      moveUpButton.textContent = '↑';
      moveUpButton.classList.add('move-up');
      moveUpButton.onclick = () => moveElementUp(li);
  
      const moveDownButton = document.createElement('button');
      moveDownButton.textContent = '↓';
      moveDownButton.classList.add('move-down');
      moveDownButton.onclick = () => moveElementDown(li);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';
      deleteButton.classList.add('delete');
      deleteButton.onclick = () => deleteElement(li);
  
      li.appendChild(inputName);
      li.appendChild(inputValue);
      li.appendChild(moveUpButton);
      li.appendChild(moveDownButton);
      li.appendChild(deleteButton);
  
      elementList.appendChild(li);
      elements.push({ name: inputName, value: inputValue });
    }
  
    addElementButton.addEventListener('click', () => {
      createElement();
    });
  
    function moveElementUp(li) {
      const index = Array.from(elementList.children).indexOf(li);
      if (index > 0) {
        elementList.insertBefore(li, elementList.children[index - 1]);
        [elements[index], elements[index - 1]] = [elements[index - 1], elements[index]];
      }
    }
  
    function moveElementDown(li) {
      const index = Array.from(elementList.children).indexOf(li);
      if (index < elementList.children.length - 1) {
        elementList.insertBefore(li.nextElementSibling, li);
        [elements[index], elements[index + 1]] = [elements[index + 1], elements[index]];
      }
    }
  
    function deleteElement(li) {
      const index = Array.from(elementList.children).indexOf(li);
      elements.splice(index, 1);
      li.remove();
    }
  
    saveButton.addEventListener('click', () => {
      const savedData = {};
      elements.forEach(({ name, value }) => {
        savedData[name.value] = value.value;
      });
      resultDiv.textContent = JSON.stringify(savedData, null, 2);
    });
  });