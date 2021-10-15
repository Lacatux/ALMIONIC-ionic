import { Component, OnInit } from '@angular/core';
import { CursoService } from '../services/curso.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Curso } from '../curso';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  cursos;
  
  constructor(private activatedRoute: ActivatedRoute, private cursoService: CursoService, public loadingController:LoadingController) { }

    async getCursosHome() {
      const loading = await this.loadingController.create({ message: 'Cargando...' }); 
    await loading.present(); 
    await this.cursoService.getCursos().subscribe(res => { 
        this.cursos = res;
        console.log(this.cursos);
        loading.dismiss(); 
    }, err => {
      console.error(err); 
        loading.dismiss(); 
    }); 
    }

    ngOnInit() {
      this.getCursosHome();
    }
}
