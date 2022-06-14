import axios from "axios";
import { CarrosDatos } from "../models/CarrosDatos";

const url="https://proyecto-81877-default-rtdb.firebaseio.com/.json";
const getCursos = async () => {
    try {
      const data = await (await axios.get(url)).data;
      var carros=[];
      console.log(data);
      for( var carro in data){
        var key=carro;
        var value=data[carro];
        carros.push(new CarrosDatos(value,key));
      }
      console.log(carros);
      return data;
    } catch (e) {
      throw e;
    }
  };
  
export class UsuarioService {

    getProductsSmall() {
        return fetch('../data/customers-small.json').then(res => res.json()).then(d => d.data);
    }

    getProducts() {
        return fetch('../data/customers-small.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch('../data/customers-small.json').then(res => res.json()).then(d => d.data);
    }
}

export {getCursos};