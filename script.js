function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const imageURL = document.getElementById("image").value;

  const genderRadio = document.querySelector('input[name="gender"]:checked');
  const gender = genderRadio ? genderRadio.value : "";

  const skillCheckboxes = document.querySelectorAll(
    'input[name="skill[]"]:checked'
  ); // Create an empty array to store selected skills

  let selectedSkills = [];
  for (const checkbox of skillCheckboxes) {
    selectedSkills.push(checkbox.value);
  } // Validate data (optional)
  const registeredInfo = document.getElementById("registeredInfo");
  registeredInfo.innerHTML = `<h1>Registration Successful!</h1>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Website: ${website}</p>
      <p>Image: <img src="${imageURL}" alt="Vivek" style={ "width":25px}></p>
      <p>Gender: ${gender}</p>    
      <p>Skills: ${selectedSkills.slice(", ")}</p>    
      `;
}
