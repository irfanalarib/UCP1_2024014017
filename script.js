const techForm = document.getElementById('techForm');
let memberArray = [];
if (techForm) {
    techForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            interest: document.getElementById('interest').value
        };

        memberArray.push(userData);
        
        alert(`Pendaftaran Sukses!\nSelamat datang, ${userData.name}`);

        const displayArea = document.getElementById('displayArea');
        const submittedData = document.getElementById('submittedData');
        
        if (displayArea && submittedData) {
            displayArea.classList.remove('d-none');
            submittedData.innerHTML = `
                <div class="alert alert-info">
                    <p><strong>Nama:</strong> ${userData.name}</p>
                    <p><strong>Email:</strong> ${userData.email}</p>
                    <p><strong>Minat:</strong> ${userData.interest}</p>
                </div>
            `;
        }

        console.log("Database Array:", memberArray);
        this.reset();
    });
}

const audio = document.getElementById('techAudio');
const img = document.getElementById('techImg');

function playAudio() { 
    if (audio) audio.play(); 
}

function stopAudio() { 
    if (audio) {
        audio.pause(); 
        audio.currentTime = 0; 
    }
}

function changeImage() {
    if (img) {
        img.src = "https://picsum.photos/400/300";
        alert("Gambar galeri telah diperbarui!");
    }
}