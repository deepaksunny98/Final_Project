import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeListComponent } from './home-list/home-list.component';
import { FrameworkComponent } from './framework/framework.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { APP_BASE_HREF } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    HomeListComponent,
	FrameworkComponent,
	HomepageComponent,
	AboutComponent,
	HeaderComponent,
	CreateComponent,
	DetailsPageComponent,
	UpdateComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
    FormsModule,
	RouterModule.forRoot([
	{
		path: '',
		component: HomepageComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'recipes/:recipeid',
        component: DetailsPageComponent
    },
    {
        path: 'recipes/:recipeid/update',
        component: UpdateComponent
    }
	])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }