class Datos{
    autorizacion;
    estado;
    hora;
    placa;
    propietario;
}
export class CarrosDatos{
    datos = Datos;
    nombre;
    constructor(datos, nombre){
        this.datos = datos;
        this.nombre = nombre;
    }
}