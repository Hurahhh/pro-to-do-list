import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {NZ_I18N, vi_VN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import vi from '@angular/common/locales/vi';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconsProviderModule} from "./icons-provider.module";

registerLocaleData(vi);

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auths/auths.module').then((m) => m.AuthsModule),
  },
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
  ],
  providers: [
    {provide: NZ_I18N, useValue: vi_VN}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
