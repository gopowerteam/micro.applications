import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'

const COMPONENTS = []
const DIRECTIVES = []
const PIPES = []
const THIRDS = []

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  providers: [],
  entryComponents: [...COMPONENTS],
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule {}
