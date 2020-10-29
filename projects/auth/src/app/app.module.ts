import { BrowserModule } from '@angular/platform-browser'
import { ModuleWithProviders, NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { APP_BASE_HREF } from '@angular/common'
import { SharedModule } from '@app/shared/shared.module'
import { CoreModule } from '@app/core/core.module'
import { RegisterComponent } from './pages/register/register.component'
import { LoginComponent } from './pages/login/login.component'

const providers = [
  {
    provide: APP_BASE_HREF,
    useValue: '/auth'
  }
]

@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent],
  imports: [CoreModule.forRoot(), SharedModule, AppRoutingModule],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule {}

@NgModule({})
export class AuthModule {
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
