import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';

export const routes: Routes = [
    {path:'home', component:Home},
    {path:'about', component:About},
    {path:'skills', component:Skills},
    {path:'contact', component:Contact},
    {path:'projects', component:Projects},
    {path:'experience', component:Experience},
    {path:'**', redirectTo:'/home',pathMatch:'full'}
];
