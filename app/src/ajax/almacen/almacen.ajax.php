<?php

include('./../../../php/functions.php');
include('./../../../controllers/query/querys.C.php');
include('./../../../models/query/querys.M.php');

class ajaxAlmacen{
/*=============================================
    CREAR/EDITAR ALMACEN
=============================================*/
    public $almacens;
    public function ajaxCrearAlmacen(){

        $data = $this->almacens;
        if ($data[8]=="NO") { // edit=="no" insert almacen

        } else { //editar
            $nomFil = $data[2];
            if ($data[0] == "PRINCIPAL") {
                $val = '';
                $ingreso = 1;
            } else {
                $val = $data[1];
                $ingreso = 0;
            }
            $update = array(
                "table" => "almacen", #nombre de tabla
                "tipo" => $data[0],
                "nombre" => $data[2],
                "direccion" => $data[3],
                "descripcion" => $data[5],
                "idUbigeo" => $data[6],
                'idSucursal' => $data[7],
                'fecha_cierre' => $val,
                'ingreso' => $ingreso
            );

            $where = array(
                "id" => $data[9], #condifion columna y valor
            );

            $almacen=ControllerQueryes::UPDATE($update,$where);
        }
        
        if ($almacen >0||$almacen =='ok') {
            $path = dirname(__FILE__)."/../../../../public/img/". $nomFil;
            if (!file_exists($path)) {
                mkdir($path, 0777, true);
            }
            $swift = array(
                "icon" => "success",
                "sms" => "Almacen guardado",
                "rForm" => "addFormAlmacen",
            );
            $succes = Functions::SwiftAlert($swift);
            echo $succes;
        } else {

            $alertify = array(
                "color" => "error",
                "sms" => "No se guardo los datos del Almacen",
            );
            $error = Functions::Alertify($alertify);
            echo $error;
        }
    }

}
/*=============================================
---CREAR/EDITAR ALMACEN
=============================================*/
// if (isset($_POST['addAlmacen'])) {
//     $addalmacen = new ajaxAlmacen();
//     $addalmacen->almacens = $_POST['addAlmacen'];
//     $addalmacen->ajaxCrearAlmacen();
// }
