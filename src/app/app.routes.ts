import { Routes } from '@angular/router';
import { BootstrapControlsComponent } from './components/bootstrap-controls/bootstrap-controls.component';
import { MaterialControlsComponent } from './components/material-controls/material-controls.component';


export const routes: Routes = [
  {
    path: 'bootstrap',
    component: BootstrapControlsComponent,
  },
  {
    path: 'material',
    component: MaterialControlsComponent,

  },
  //{
  //  path: 'structural',
  //  component: StructuralComponent
  //},
  //{
  //  path: 'signal',
  //  component: SignalDemoComponent,
  //  outlet: "primary"
  //},
  //{
  //  path: 'singleton',
  //  component: SingletonTestComponent,
  //  outlet: "primary"
  //},
  //{
  //  path: 'nonsingleton',
  //  component: NonSingletonTestComponent,
  //  outlet: "primary"
  //},
  
 
];
