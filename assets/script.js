document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorElement = document.getElementById('error-message');

  const validUsername = "kelompok8";
  const validPassword = "gitajinggarosita";

  if (username === validUsername && password === validPassword) {
    
    window.location.href = "dashboard.html";
  } else {
    errorElement.textContent = "Username atau password salah!";
  }
});

function updateSensorData() {
  document.getElementById('pressure').textContent = 
    Math.floor(Math.random() * 60 + 10) + "psi";
  
  document.getElementById('humidity').textContent = 
    Math.floor(Math.random() * 50 + 30) + " %";
  
  document.getElementById('sound').textContent = 
    Math.floor(Math.random() * 1000) + " dB";

  setTimeout(updateSensorData, 3000);
}

function togglePressure() {
  const btn = document.getElementById('press');
  const isOn = btn.textContent.includes('ON');
  
  if (isOn) {
    btn.textContent = 'Pressure OFF';
    btn.classList.remove('bg-indigo-700');
    btn.classList.add('bg-red-500')
    addLog('pressure dimatikan');
  } else {
    btn.textContent = 'Pressure ON';
    btn.classList.remove('bg-red-500');
    btn.classList.add('bg-indigo-700');
    addLog('pressure dinyalakan');
  }
}

function toggleHumidity() {
  const btn = document.getElementById('humid');
  const isOn = btn.textContent.includes('ON');
  
  if (isOn) {
    btn.textContent = 'Hygrometer OFF';
    btn.classList.remove('bg-indigo-700');
    btn.classList.add('bg-red-500')
    addLog('hygrometer dimatikan');
  } else {
    btn.textContent = 'Hygrometer ON';
    btn.classList.remove('bg-red-500');
    btn.classList.add('bg-indigo-700');
    addLog('hygrometer dinyalakan');
  }
}
  function toggleSound() {
  const btn = document.getElementById('soun');
  const isOn = btn.textContent.includes('ON');
  
  if (isOn) {
    btn.textContent = 'Soundmeter OFF';
    btn.classList.remove('bg-indigo-700');
    btn.classList.add('bg-red-500')
    addLog('soundmeter dimatikan');
  } else {
    btn.textContent = 'Soundmeter ON';
    btn.classList.remove('bg-red-500');
    btn.classList.add('bg-indigo-700');
    addLog('soundmeter dinyalakan');
  }
}
// Log Aktivitas
function addLog(message) {
  const logElement = document.getElementById('activity-log');
  const timestamp = new Date().toLocaleTimeString();
  logElement.innerHTML = `<p>[${timestamp}] ${message}</p>` + logElement.innerHTML;
}

// Inisialisasi
updateSensorData();
addLog('Sistem IoT berjalan!');