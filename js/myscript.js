
let app = new Vue({
    el: '#app',
    data: {
        corrente : 0,
        messaggioVuoto:"",
        valorericerca: "",
        cerca: null,
        contacts: [
            {
            name: 'Batman',
            avatar: 'img/avatar_01.png',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Donald',
            avatar: 'img/avatar_02.png',
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Heisenberg',
            avatar: 'img/avatar_04.png',
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Luisa',
            avatar: 'img/avatar_03.png',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
            ],
            },
            ]
    },
    methods: {
    /*function che ti cambia l'utente attivo nella lista contatti*/
        scegliutente: function(attivautente){
            this.corrente = attivautente
            console.log(this.corrente)
            },
        /*function che ti cambia la classe in basse al messaggio sia ricevuto o inviato*/
        messaggiricevuti: function(i){
            if(this.contacts[this.corrente].messages[i].status == 'received'){
            return 'ms_chatboxleft'
            }else{
                return 'ms_chatboxright'
            }
        },
        /*function che ti pusha il messaggio che scrivi nell input e ti da la risposta con il setTimeout*/
        nuovoMessaggio: function () {
            this.contacts[this.corrente].messages.push({
                date:"",
                text: this.messaggioVuoto,
                status:"sent",
            })
            this.messaggioVuoto = "",
            setTimeout(() => this.contacts[this.corrente].messages.push({
                date:"",
                text: "ok",
                status:"received",
            }),1000)
            },
            search : function (indice){
                //console.log(this.contacts[this.corrente].name)
                //console.log(this.valorericerca)
                if(!this.contacts[indice].name.toLowerCase().includes(this.valorericerca.toLowerCase())){
                    console.log("la lettera non è compresa")
                    return "none"
                }   return "block"
            }
            
},
})     

/*function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }*/