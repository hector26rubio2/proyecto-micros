import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getUSuario } from "../../service/UsuarioService";

import { Fieldset } from 'primereact/fieldset';


import "./Usuario.css";

export const Usuario = () => {
  const [Usuarios,setUsuario] = useState([]);
  //const productService = new ProductService();

  async function obtenerCursos() {
    try {
      var usuarios = Object.values( await getUSuario());
      
      setUsuario(usuarios)
    } catch (error) {

      console.log(error);
    }
  }
  useEffect(() => {
    obtenerCursos();
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const vehiculoTemplate = (rowData) => {
    return (
      <img
        src={`images/product/${rowData.vehiculo}`}
        onError={(e) =>
          (e.target.src =
            "https://firebasestorage.googleapis.com/v0/b/proyecto-81877.appspot.com/o/data%2Fphoto.jpg?alt=media&token=2964b532-e1cc-4982-8144-bfee83c67a05 ")
        }
        alt={rowData.vehiculo}
        className="product-image"
      />
    );
  };

  const horaBodyTemplate =(rowData) =>{
    return formatCurrency(rowData.hora);
  }
  const placaBodyTemplate = (rowData) => {
    return formatCurrency(rowData.placa);
  };

  const estadoBodyTemplate = (rowData) => {
    return formatCurrency(rowData.estado);
  };

 
  const statusBodyTemplate = (rowData) => {
    var autorizacion = ""
    if (rowData.autorizacion)
    {
      autorizacion = "Aprovado"
    }else{
      autorizacion = "Denegado"
    }
    return (
      <span
        className={`product-badge status-${autorizacion.toLowerCase()}`}
      >
        {autorizacion}
      </span>
    );
  };

 
  return (
    <div className="datatable-templating-demo">

      <Fieldset legend="Usuarios" toggleable > 
      <div className="card">
     
     
        <DataTable
          value={Usuarios}
        
          responsiveLayout="scroll"
        >
          <Column field="propietario" header="Propietario"></Column>
          <Column header="Vehiculo" body={vehiculoTemplate}></Column>
          <Column
            field="placa"
            header="Placa"
            body={placaBodyTemplate}
          ></Column>
          <Column field="hora" header="Hora"
          body={horaBodyTemplate}></Column>
          <Column
            field="estado"
            header="Estado"
            body={estadoBodyTemplate}
          ></Column>
          <Column header="Autorización" body={statusBodyTemplate}></Column>
        </DataTable>
      </div>
      </Fieldset>
    </div>
  );
};
