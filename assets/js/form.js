function sendMail () {
  var params = {
    nome: document.getElementById("nome").value,
    cognome: document.getElementById("cognome").value,
    azienda: document.getElementById("azienda").value,
    email: document.getElementById("email").value,
    motivo: document.getElementById("motivo").value,
    modalita: document.getElementsByName("modalita").value,
    messaggio: document.getElementById("messaggio").value,
  };

  emailjs.send("service_8ie8ywh","template_hsx6o6c",params).then(
    (response) => {
      console.log('Email inviata!', response.status, response.text);
    },
    (error) => {
      console.log('Errore...', error);
    },
  );
}
