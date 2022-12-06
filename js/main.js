//import fetchJsonp from 'fetch-jsonp'; old from Brads video

const key = "X36ZOwMdQHQULSUcBHhOE27bY9uyL5NDYpAAVq3KehhZdAX8bt";
const secretKey = "bGrEU0kTzrrUPrycDWXj4NQgwWon4CPgoGkHqlOB";

// Command to get your Bearer Token:
// curl -d "grant_type=client_credentials&client_id=X36ZOwMdQHQULSUcBHhOE27bY9uyL5NDYpAAVq3KehhZdAX8bt&client_secret=bGrEU0kTzrrUPrycDWXj4NQgwWon4CPgoGkHqlOB" https://api.petfinder.com/v2/oauth2/token

//Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJYMzZaT3dNZFFIUVVMU1VjQkhoT0UyN2JZOXV5TDVORFlwQUFWcTNLZWhoWmRBWDhidCIsImp0aSI6IjI2YzUyZmFjZTFmNGJmZTFlMTk2Y2I5MGEyMWZhNTNiM2RlYTJjYWJhYzkyYTliMmNjZmYyZTZmNWEzMTQ1NzNmNDkzYWUyZDBkNmU2NGRlIiwiaWF0IjoxNjcwMzU3MTE5LCJuYmYiOjE2NzAzNTcxMTksImV4cCI6MTY3MDM2MDcxOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.zVTGgSsfQFQSAMyG9HPk1Tx4Bs-NfmNinNCmy68KXTm6cm6m9E1dFKLsIZq9QH59DeCC__ZwLbnA-0UET_IjmJmSozfyqMxk2zKNKmUKvn77Nyw4vHk8raBMjudROiqxvqIvlU17Fn4yYCD1rnt0wdw8iBO0rWGzpSabscvtJByl-7tunqwyPIxM2uz6oKGXmrSu4YS2BADt_yQXfTREByvOd7NdF4qVI3oDsGE1EDTTVg71v5pPQih2WOXs2cnjk0XjGM2M0mFQxGhqjAsgW42x-dl_HEMG46RgT57CScQNnirRhOvmeT5AmIcBQpaWOtBO1sJ8Jb0fi2HPLFPxUA

const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals);

//Fetch Animals From API
function fetchAnimals(e) {
    e.preventDefault();

    const myHeaders = new Headers();

    //copy and paste Bearer Token inside this section like so:
    myHeaders.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJYMzZaT3dNZFFIUVVMU1VjQkhoT0UyN2JZOXV5TDVORFlwQUFWcTNLZWhoWmRBWDhidCIsImp0aSI6IjI2YzUyZmFjZTFmNGJmZTFlMTk2Y2I5MGEyMWZhNTNiM2RlYTJjYWJhYzkyYTliMmNjZmYyZTZmNWEzMTQ1NzNmNDkzYWUyZDBkNmU2NGRlIiwiaWF0IjoxNjcwMzU3MTE5LCJuYmYiOjE2NzAzNTcxMTksImV4cCI6MTY3MDM2MDcxOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.zVTGgSsfQFQSAMyG9HPk1Tx4Bs-NfmNinNCmy68KXTm6cm6m9E1dFKLsIZq9QH59DeCC__ZwLbnA-0UET_IjmJmSozfyqMxk2zKNKmUKvn77Nyw4vHk8raBMjudROiqxvqIvlU17Fn4yYCD1rnt0wdw8iBO0rWGzpSabscvtJByl-7tunqwyPIxM2uz6oKGXmrSu4YS2BADt_yQXfTREByvOd7NdF4qVI3oDsGE1EDTTVg71v5pPQih2WOXs2cnjk0XjGM2M0mFQxGhqjAsgW42x-dl_HEMG46RgT57CScQNnirRhOvmeT5AmIcBQpaWOtBO1sJ8Jb0fi2HPLFPxUA');

    // Get User Input
    const animal = document.querySelector('#animal').value;
    const zip = document.querySelector('#zip').value;

    //Fetch Pets
    fetch(`https://api.petfinder.com/v2/animals?type=${animal}&location=${zip}`, {
      method: 'GET',
      headers: myHeaders,
    })
    .then(res => res.json())
    .then(data => {

      console.log(data);
      //showAnimals(data)
      
    })
    .catch(err => console.log(err));
};


//JSONP Callback
function callback(data) {
    console.log(data);
}

//Show Listings of Pets
function showAnimals(pets) {
    const results = document.querySelector('#results');
    //Clear First
    results.innerHTML = '';
    // Loop Through Pets
    pets.forEach(pet => {
        const div = docuemtn. createElement('div');
        div.classList.add('card', 'card-body', 'mb-3');
        div.innerHTML = `
          <div class="row">
            <div class="col-sm-6">
              <h4>${pet.name$t} (${pet.age.$t})</h4>
              <p class="text-secondary">${pet.breeds.breed.$t}</p>
              <p class="text-secondary">${pet.contact.address1.$t} ${pet.contact.city.$t} ${pet.contact.state.$t}${pet.contact.zip.$t} </p>
              <ul class="list-group">
              <li c;ass="list-group-item">Phone: ${pet.contact.phone.$t}</li>
              ${pet.contact.email.$t ? `<li class="list-group-item">Email: ${pet.contact.email.$t}</li>`:``}
              <li class="list-group-item">Shelter ID: ${pet.shelterID.$t}</li>
              </ul>
            </div>
            <div class="col-sm-6 text-center">
              <img class="img-fluid rounded-circle mt-2" src="${pet.media.photos.photo[3].$t}">

            </div>
          </div>  
        `;

        results.appendChild(div);
    })
}