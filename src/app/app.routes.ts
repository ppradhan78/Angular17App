import { Routes } from '@angular/router';
import { BootstrapControlsComponent } from './components/bootstrap-controls/bootstrap-controls.component';
import { MaterialControlsComponent } from './components/material-controls/material-controls.component';
import { StructuralComponent } from './components/structural/structural.component';
import { SingletonTestComponent } from './components/singleton-test/singleton-test.component';
import { NonSingletonTestComponent } from './components/non-singleton-test/non-singleton-test.component';
import { SignalDemoComponent } from './components/signal-demo/signal-demo.component';
import { ScssExampleComponent } from './components/scss-example/scss-example.component';
import { SessionManagementComponent } from './components/session-management/session-management.component';
import { TriggersComponent } from './components/triggers/triggers.component';


export const routes: Routes = [
  {
    path: 'bootstrap',
    component: BootstrapControlsComponent,
    title:"Bootstrap Works Fine"
  },
  {
    path: 'material',
    component: MaterialControlsComponent,

  },
  {
    path: 'structural',
    component: StructuralComponent
  },
  {
    path: 'singleton',
    component: SingletonTestComponent,
    outlet: "primary"
  },
  {
    path: 'nonsingleton',
    component: NonSingletonTestComponent,
    outlet: "primary"
  },
  {
    path: 'signal',
    component: SignalDemoComponent,
    outlet: "primary"
  },
 {
    path: 'scss',
   component: ScssExampleComponent,
    outlet: "primary"
  },
  {
    path: 'session',
    component: SessionManagementComponent,
    outlet: "primary"
  },
  
  {
    path: 'trigger',
    component: TriggersComponent,
    outlet: "primary"
  },
];
