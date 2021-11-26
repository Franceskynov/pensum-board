import {PensumService} from 'app/networking/services/pensum.service';
import {Materia, Pensum, PensumModel} from 'app/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pensum',
  templateUrl: './pensum.component.html',
  styleUrls: ['./pensum.component.scss']
})
export class PensumComponent implements OnInit {

  public pensum: Pensum;
  public list: Array<Materia>;

  constructor(
    private pensumService: PensumService,
    private activatedRoute: ActivatedRoute
  ) {
    this.list = [];
    this.pensum = new PensumModel();
    this.activatedRoute.params.subscribe(params => {
      this.retrieve(params['carnet'] ?? '');
    })
  }

  ngOnInit(): void {
  }

  public retrieve(carnet: string): void {
    this.pensumService.retrieve(carnet).subscribe({
      next: response => {
          this.pensum = response.body
          this.list = this.pensum.pensum
            .reduce<Array<Materia>>((accumulator, currentValue) => accumulator
              .concat(currentValue.materias), [])
      },
      error: () => {

      },
      complete: () => {

      },
    });
  }

  public materiaIndex(i: number, j: number): number {
    return this.list.indexOf(this.pensum.pensum[i].materias[j]) + 1
  }

  public identity(materia: Materia): Materia {
    return materia;
  }

}
