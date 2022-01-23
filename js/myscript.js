
let app = new Vue({
    el: '#app',
    data: {
        corrente : null,
        messaggioVuoto:"",
        valorericerca: "",
        cerca: null,
        dropDownCorrente:null,
        dropDownTendina: null,
        dropDownChat2:null,
        cambioSfondo: false,
        
        risposteRandom: [
            "🙂😊😀😁","ciao", "come stai?", "sei scemo?", "fumi?", "voglio andare al mare,vuoi venire?", "o scè", "ti sto dicendo cose a casoxd", "ciao mirtillo","ciao mora"
        ],
        contacts: [
            {
            name: 'Batman',
            avatar: 'img/avatar_01.png',
            visible: true,
            online: "Ultimo accesso 10/10/2022",
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
            online: "Ultimo accesso 1/10/2022",
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
            text: 'Mi piacerebbe. ',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Heisenberg',
            avatar: 'img/avatar_04.png',
            visible: true,
            online: "Ultimo accesso 12/12/2022",
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
            online: "Ultimo accesso 10/12/2022",
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
    updated: function () {
        let box = document.querySelector(".ms_boxchat");
        box.scrollTop = box.scrollHeight;
    },
    methods: {
    /*function che ti cambia l'utente attivo nella lista contatti*/
        scegliutente: function(attivautente){
            this.corrente = attivautente
            this.dropDownCorrente = null
            //console.log(this.dropDownCorrente, "ciao")
            //console.log(this.corrente)
            },
        /*function che ti cambia la classe in base al messaggio sia ricevuto o inviato*/
        messaggiricevuti: function(i){
            if(this.contacts[this.corrente].messages[i].status == 'received'){
            return 'ms_chatboxleft'
            }else{
                return 'ms_chatboxright'
            }
        },

        
        /*stascrivendo : function(){
            let boxscritta = document.querySelector(".stascrivendo").innerHTML = "stascrivendo"

        },
        /*function che ti pusha il messaggio che scrivi nell input
        e ti da la risposta con il setTimeout*/
        nuovoMessaggio: function () {
            if(this.messaggioVuoto != 0){
                this.contacts[this.corrente].messages.push({
                    date:`${dayjs().hour()}:${dayjs().minute()} ${dayjs().date()}-${dayjs().month()}1-${dayjs().year()}`,
                    text: this.messaggioVuoto,
                    status:"sent",
                })
                this.messaggioVuoto = ""
                const   indiceContatto = this.corrente;
                (setTimeout(() =>{ this.rispostaMessaggio(indiceContatto)}
                ,2000)
                )}
                setTimeout(() => {
                    this.contacts[this.corrente].online = "Sta scrivendo...";
                }, 1000);
                setTimeout(() => {
                    this.contacts[this.corrente].online = "Online";
                }, 2000);
                setTimeout(() => {
                    this.contacts[this.corrente].online = "Ultimo accesso oggi alle " + dayjs().format("HH:mm");;
                }, 7000);
                
            
        },

        rispostaMessaggio : function (indiceContatto){
            this.contacts[indiceContatto].messages.push({
            date:`${dayjs().hour()}:${dayjs().minute()} ${dayjs().date()}-${dayjs().month()}1-${dayjs().year()}`,
            text: this.risposteRandom[Math.floor (Math.random() * this.risposteRandom.length)],
            status:"received",
            })
        },

            /*function che lavora sulla barra search per far 
            apparire e sparire i contatti se l'input di ricerca
            è compreso in contatto.name*/
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

            /*cambioBackground : function(){
                if(this.cambioSfondo != false){
                    this.cambioSfondo = false;
                    console.log("sfondo bianco")
                    console.log(this.cambioSfondo)
                }else
                    this.cambioSfondo = true;
                console.log("sfondo nero")
                console.log(this.cambioSfondo)
            },*/

            dropDownChat: function(corrente){
                console.log("la funzione è partita")
                //console.log("ciaos")
                //let tendina = document.getElementById("myDropdown");
                //tendina.classList.add("block")
                if(this.dropDownTendina != corrente){
                    this.dropDownTendina = corrente
                    console.log("sei nell if ")
                    console.log(this.dropDownTendina)
                    console.log(corrente)
                }else{
                    this.dropDownTendina = null
                    console.log("sei nell else ")
                }
                
            },
            
            dropdown : function (indice){
                //this.dropDownCorrente = this.dropDownCorrente != indice ? indice : null
                if(this.dropDownCorrente != indice){
                    this.dropDownCorrente = indice
                }else{
                    this.dropDownCorrente = null
                }
            },

            /*function che ti cancella i messaggi */
            cancellazioneMessaggi : function (corrente, indice){
                this.contacts[corrente].messages.splice(indice, 1)
            },

            rimuoviChat : function ( corrente ){
                console.log(this.contacts[corrente])
                this.contacts.splice(corrente, 1)
            }
        },

})          


