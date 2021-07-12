import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModelo } from 'src/app/modelos/Usuario.modelo';
import * as crypto from 'crypto-js'
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  fgValidacion: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router :Router) { }

  construirFormulario() {

    this.fgValidacion = this.fb.group({
      correo: ['', Validators.required],
      clave: ['', Validators.required]

    });

  }

  ngOnInit(): void {
    this.construirFormulario();
  }

  get obtenerFGV() {
    return this.fgValidacion.controls;
  }

  IdentificarUsuario() {
    console.log("hola")
    let usuario = this.obtenerFGV.correo.value;
    let clave = this.obtenerFGV.clave.value;
    let modelo = new UsuarioModelo();
    modelo.nombre_usuario = usuario;
    modelo.clave = crypto.MD5(clave).toString();
    this.servicioSeguridad.IdentificarUsuario(modelo).subscribe(
      (data: UsuarioModelo) => {
        this.servicioSeguridad.GuardarDatosEnLocal(data)
        this.router.navigate(["/"]);

      },
       (error: any) => {
        alert("Datos invalidos")
      })

  }

}
