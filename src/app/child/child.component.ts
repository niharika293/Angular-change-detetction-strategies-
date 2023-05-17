import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit , DoCheck{

  @Input() actions!: any;

  actionsList : string[] = [];

  constructor(private cd : ChangeDetectorRef) { }

  ngOnInit(): void {
    // console.log("actions from child", this.actions);
    this.actions.subscribe((val: any) => {
      this.actionsList = [...this.actionsList, ...val ];
      // this.cd.markForCheck();
      this.cd.detectChanges();
      console.log("val", val);
      console.log("actionsList", this.actionsList);
    });
  }

  ngDoCheck(){
    // this.cd.detectChanges();
  }



}
