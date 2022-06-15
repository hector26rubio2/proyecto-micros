import axios from "axios";
import { Usuario } from "../models/UsuarioModel";

const url = "https://proyecto-81877-default-rtdb.firebaseio.com/199 255 225 10/.json";

const getUSuario = async () => {
  try {
    const data = await (await axios.get(url)).data;
    console.log(data);
    var usuarios = [];
 
    for (var key in data) {
          usuarios.push(new Usuario( data[key]));
    }

    return data;
  } catch (e) {
    throw e;
  }
};

const  updateUsuario=async(carro)=>{
  try {
    const reponse= await axios.post(url,carro, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(reponse)
  } catch (error) {
    
  }
}


export { getUSuario , updateUsuario};
