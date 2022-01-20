
let app = new Vue({
    el: '#app',
    data: {
        corrente : null,
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
                date:`${dayjs().hour()}:${dayjs().minute()}`,
                text: this.messaggioVuoto,
                status:"sent",
            })
            this.messaggioVuoto = "",
            setTimeout(() => this.contacts[this.corrente].messages.push({
                date:`${dayjs().hour()}:${dayjs().minute()}`,
                text: "ok dude",
                status:"received",
            }),1000)
            },
            search : function (){
                this.contacts.forEach(contatto => {
                    if(contatto.name.toLowerCase().includes(this.valorericerca.toLowerCase())){
                        //console.log("la lettera  è compresa")
                        console.log(contatto.visible)
                        contatto.visible=true;
                    }else{
                        console.log("la lettera non è compresa")
                        console.log(contatto.visible)
                        contatto.visible=false;
                    }
                });
            },
            dropdown : function (){
                console.log("ciao")
                return "display"
            }
},
})     

