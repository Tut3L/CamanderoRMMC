document.getElementById('course').addEventListener('change', function() {
    const course = this.value;
    const specializationSelect = document.getElementById('specialization');
    const specializationContainer = document.getElementById('specializationContainer');

    specializationSelect.innerHTML = '<option value="">- Select -</option>'; // Reset specialization options

    if (course === 'College') {
        const bsCourses = ['BS in Computer Science', 'BS in Information Technology', 'BS in Business Administration'];
        bsCourses.forEach(course => {
            specializationSelect.innerHTML += `<option value="${course}">${course}</option>`;
        });
        specializationContainer.style.display = 'block';
    } else if (course === 'Masteral') {
        const masteralCourses = ['Master in Business Administration', 'Master in Public Administration'];
        masteralCourses.forEach(course => {
            specializationSelect.innerHTML += `<option value="${course}">${course}</option>`;
        });
        specializationContainer.style.display = 'block';
    } else if (course === 'Senior High') {
        const seniorHighStrands = ['ABM','AB','GAS', 'HUMMS', 'STEM', 'SPORTS', 'TVL'];
        seniorHighStrands.forEach(strand => {
            specializationSelect.innerHTML += `<option value="${strand}">${strand}</option>`;
        });
        specializationContainer.style.display = 'block';
    } else if (course === 'TVET') {
        specializationSelect.innerHTML += '<option value="TVET">TVET</option>';
        specializationContainer.style.display = 'block';
    } else {
        specializationContainer.style.display = 'none';
    }
});
