import React from "react";
import Amplify, { Interactions } from "aws-amplify";
import { ChatBot, AmplifyTheme } from "aws-amplify-react";
import awsconfig from "../../aws-export";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Credenciales from "../Credenciales";

Amplify.configure(awsconfig);
// Imported default theme can be customized by overloading attributes
export class ChatPageAyuda extends React.Component {
  render() {
    return (
      <div style={{ minWidth: "100%" }}>
        <Navbar
          props={this.props}
          tituloP={"Inicio"}
          foto={Credenciales.Perfil}
        />
        <FullChatPageAyuda props={this.props} />
      </div>
    );
  }
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));
export default function FullChatPageAyuda({ props }) {
  const classes = useStyles();

  const handleComplete = (err, confirmation) => {
    if (err) {
      alert("Bot conversation failed");
      return;
    }

    //alert("Success: " + JSON.stringify(confirmation, null, 2));
    return "¿Puedo puedo ayudar en algo mas?";
  };
  return (
    <div className={classes.root}>
      <h1>ChatBot de Ayuda</h1>
      <ChatBot
        title="My ChatBot"
        botName="BookTrip_esLATAM"
        welcomeMessage="Hola, Soy un chatbot para ayudarte a entender mejor los procesos en esta pagina"
        onComplete={handleComplete}
        //clearOnComplete={true}
        conversationModeOn={true}
      />
    </div>
  );
}
