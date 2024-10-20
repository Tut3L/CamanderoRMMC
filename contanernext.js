document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.container');
    const nextButton = document.getElementById('nextButton');
    const returnButton = document.getElementById('returnButton');
    const agreeCheckbox = document.getElementById('agreelabel');
    let currentContainerIndex = 0;

    function updateVisibility() {
        containers.forEach((container, index) => {
            container.style.display = index === currentContainerIndex ? 'block' : 'none';
        });
        returnButton.style.display = currentContainerIndex > 0 ? 'inline' : 'none';
        nextButton.textContent = currentContainerIndex === containers.length - 1 ? 'Submit' : 'Next';
    }

    function validateCurrentContainer() {
        const currentContainer = containers[currentContainerIndex];
        const inputs = currentContainer.querySelectorAll('input[required], select[required], textarea[required]');
        for (const input of inputs) {
            if (!input.checkValidity()) {
                input.reportValidity();
                return false;
            }
        }
        return true;
    }

    nextButton.addEventListener('click', () => {
        if (currentContainerIndex < containers.length - 1) {
            if (validateCurrentContainer()) {
                currentContainerIndex++;
                updateVisibility();
            }
        } else {
            if (agreeCheckbox.checked) {
                document.getElementById('enrollmentForm').submit();
            } else {
                alert("You must agree to the terms before submitting.");
            }
        }
    });

    returnButton.addEventListener('click', () => {
        if (currentContainerIndex > 0) {
            currentContainerIndex--;
            updateVisibility();
        }
    });

    updateVisibility();
});
