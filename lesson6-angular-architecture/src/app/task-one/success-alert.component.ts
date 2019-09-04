import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<div>
<span>{{message}}</span>
</div>`,
  styles: [`div { 
  font-family: Lato;  
  margin-left: 20px;
  height: 50px;
  width: 30%;
  line-height: 50px;
  background: rgb(57, 235, 2);
  color: rgb(65, 147, 161);
  text-align: center; }`]
})
export class SuccessAlertComponent {
  message: string = "Well-done";
}