import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

/**
 * @description Modules
 */
import {NgxMaskModule} from 'ngx-mask';
import {MatModule} from 'app/common/shared/material/material.module';
import {PipesModule} from 'app/common/shared/pipes/pipes.module';

@NgModule({
  declarations: [

  ],
  imports: [
    MatModule,
    CommonModule,
    NgxMaskModule,
    PipesModule,
  ],
  exports: [
    MatModule,
    NgxMaskModule,
    PipesModule,
  ],
  providers: [
  ]
})
export class SharedModule {
}
