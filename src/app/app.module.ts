import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoState } from './todo/todo-state';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    /* Defining new State */
    /* `forRoot` initializing and preparing the Actions Lifecycle State (only use it ones in App) */
    /* `forFeature` updating and  merging the feature state that was initialized with the Function `forRoot` */
    NgxsModule.forRoot([TodoState], {
      developmentMode: !environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
