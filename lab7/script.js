document.getElementById('generate-btn').addEventListener('click', generateShapes);

function generateShapes() {
    const container = document.getElementById('container');

    const shapeCountInput = document.getElementById('shape-count');
    const numberOfShapes = parseInt(shapeCountInput.value, 10);

    if (isNaN(numberOfShapes) || numberOfShapes <= 0) {
        alert('Введите корректное количество фигур');
        return;
    }

    const shapeType = document.getElementById('shape-type').value;

    for (let i = 0; i < numberOfShapes; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape', shapeType);

        const size = Math.floor(Math.random() * 80) + 20;
        const x = Math.random() * (container.clientWidth - size);
        const y = Math.random() * (container.clientHeight - size);

        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${x}px`;
        shape.style.top = `${y}px`;

        shape.addEventListener('click', () => selectShape(shape));
        shape.addEventListener('dblclick', () => removeShape(shape));

        container.appendChild(shape);
    }
}

function selectShape(shape) {
    const selectedShape = document.querySelector('.selected');
    if (selectedShape) {
        selectedShape.classList.remove('selected');
    }
    shape.classList.add('selected');
}

function removeShape(shape) {
    shape.remove();
}