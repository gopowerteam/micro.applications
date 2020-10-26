import { BrowserModule } from '@angular/platform-browser'
import { ModuleWithProviders, NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { APP_BASE_HREF } from '@angular/common'
import { Page1Component } from './pages/page1/page1.component'
import { Page2Component } from './pages/page2/page2.component'
import { SharedModule } from '@app/shared/shared.module'
import { CoreModule } from '@app/core/core.module'

const providers = [
  {
    provide: APP_BASE_HREF,
    useValue: '/app01'
  }
]

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component],
  imports: [CoreModule.forRoot(), SharedModule, AppRoutingModule],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule {}

@NgModule({})
export class App01Module {
  public static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers
    }
  }

  public static getConfig() {
    return
  }
}
