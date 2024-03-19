import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {

  public nameLower: string = 'candela'
  public nameUper: string = 'CANDELA'
  public fullName: string = 'CandElA'

  public customDate: Date = new Date;
}
