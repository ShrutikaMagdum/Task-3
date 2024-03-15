import { Component, Input, OnInit, } from "@angular/core";

@Component({
    selector : 'app-accordion',
    templateUrl : './accordion.component.html',
    styleUrls : ['./accordion.component.scss']

})
export class AccordionComponent implements OnInit{
    title = '';
    content = '';
    items: { title: string; content: string; active?: boolean} [] = [
        {
            title: 'Section-1',
            content: 'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet et dolore magna aliqu Lorem ipsum dolor sit am et dolore magna aliqu Lorem ipsum dolor sit am et dolore magna aliqu Lorem ipsum dolor sit am et dolore magna aliqu.'
        }
    ];
    ngOnInit(): void {}

    addItem(){
        this.items.push({
            title : this.title,
            content : this.content,
        });
    }
  selectedIndex: number = -1;

  toggleAccordion(index: number): void {
    this.selectedIndex = (this.selectedIndex === index) ? -1 : index;
  }
}