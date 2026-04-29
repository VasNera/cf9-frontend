import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-step7-list-group-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './step7-list-group-menu.html',
  styleUrl: './step7-list-group-menu.css',
})
export class Step7ListGroupMenu {
  menu = [
    {text: "step2 Person Table", appLink: 'person-table-example'},
    {text: "step3 Component Input", appLink:'component-input-example'},
    {text: "step4 @for Directive", appLink: 'for-directive-example'},
    {text: "step5 Event Bind", appLink: 'event-bind-example'},
    {text:"step8 Simple Datatable", appLink:
      'simple-data-table-example'},
      {text:"step9 Output Example", appLink:
        'component-output-example'},
      {text:"step10 Template Forms",appLink:'template-driven-form-example'}
]
}
