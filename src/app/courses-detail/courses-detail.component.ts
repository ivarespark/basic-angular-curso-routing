import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent {

  course : String = '';

  constructor(private route: ActivatedRoute) {} // usar el constructor sólo para inyectar dependencias

  ngOnInit() { // esto se ejecuta cuando el componente ha inicializado  (ver ciclo de vida de compnentes)
    this.route.params.subscribe(params => {
      this.course = params['course'];
    });
  }

}
