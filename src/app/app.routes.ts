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
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { DynamicallyReactiveFormsComponent } from './components/dynamically-reactive-forms/dynamically-reactive-forms.component';
import { EmployeeComponent } from './components/reactive-forms/employee/employee.component';
import { FormValidationComponent } from './components/reactive-forms/form-validation/form-validation.component';
import { ValidatorExampleComponent } from './components/validator-example/validator-example.component';


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
  {
    path: 'template',
    component: TemplateDrivenComponent,
    outlet: "primary"
  },
  {
    path: 'reactive',
    component: ReactiveFormsComponent,
    outlet: "primary"
  },
  {
    path: 'dreactive',
    component: DynamicallyReactiveFormsComponent,
    outlet: "primary"
  },
  {
    path: 'emp',
    component: EmployeeComponent,
    outlet: "primary"
  },
  {
    path: 'rfv',
    component: FormValidationComponent,
    outlet: "primary"
  },
  {
    path: 've',
    component: ValidatorExampleComponent,
    outlet: "primary"
  },
];
