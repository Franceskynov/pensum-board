import {Component, HostBinding, OnInit} from '@angular/core';
import {PensumService} from 'app/networking/services/pensum.service';
import {Materia, Pensum, PensumModel} from 'app/common';
import {FormControl} from '@angular/forms';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-pensum',
  templateUrl: './pensum.component.html',
  styleUrls: ['./pensum.component.scss']
})
export class PensumComponent implements OnInit {

  public pensum: Pensum;
  public maxRows: number;
  public maxColumns: number;
  public list: Array<Materia>;
  public columns: Array<string>;

  constructor(
    private pensumService: PensumService,
  ) {
    this.list = [];
    this.pensum = new PensumModel();
    this.columns = [];
    this.maxRows = 5;
    this.maxColumns = 10
    this.generate();
    this.retrieve();
  }

  ngOnInit(): void {
  }

  public generate(): void {
    for (let i = 0; i < this.maxColumns; i++) {
      this.columns.push(' ');
    }
  }

  public retrieve(): void {
    this.pensumService.retrieve().subscribe({
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
