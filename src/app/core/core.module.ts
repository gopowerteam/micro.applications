import { NgModule, Optional, SkipSelf, ModuleWithProviders, APP_INITIALIZER } from '@angular/core'
import { CommonModule, APP_BASE_HREF } from '@angular/common'
import { throwIfAlreadyLoaded } from './module-import-guard'

const GLOBAL_THIRD_MODULES = []

const appBaseHrefFactory = () => '/'

@NgModule({
  declarations: [],
  imports: [CommonModule, ...GLOBAL_THIRD_MODULES],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule')
  }

  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: APP_BASE_HREF,
          useFactory: appBaseHrefFactory
        }
      ]
    }
  }
}
