import Swal from "sweetalert2";

class Alert {    
   async standartAlert(title ,message, icon = 'question') {
        if(message != null){
           await Swal.fire({
                    title: title,
                    text: message,
                    icon: icon,
                    width: 400,
                });
        }
        else {
            Swal.fire("standartAlert sem mensagem!");
        }
            
    }

    informationAlert() {

    }

    confirmationAlert() {

    }
}

export default Alert