import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragExit, CdkDragEnter } from '@angular/cdk/drag-drop';
import { TargetLocator } from 'selenium-webdriver';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragdropangular';

  newVal : number = 0;

  @Input() total = 0;
  @Input() total_1 = 0;
  @Input() total_2 =0;

  // @Input() time;


  try = [
    {
      'programName': 'k TV',
      "make": "make good",
      "body": "spot cancelled Email",
      "emailDate": "Email-05 - 30/08/2016",
      "time": "15sec",
      "price": "65000"
    },
    {
      'programName': 'k TV',
      "make": "make good",
      "body": "spot cancelled Email",
      "emailDate": "Email-05 - 30/08/2016",
      "time": "35sec",
      "price": "65000"
    }
  ];

  try2 = [
    {
      'programName': 'Sun TV',
      "make": "make good",
      "body": "spot cancelled Email",
      "emailDate": "Email-05 - 30/08/2016",
      "time": "20sec",
      "price": "45000"
    }
  ]
  try3 = [
    {
      'programName': 'Sun TV',
      "make": "make good",
      "body": "spot cancelled Email",
      "emailDate": "Email-05 - 30/08/2016",
      "time": "25sec",
      "price": "45000"
    }

  ];
  datacontainer;
  tempvar : number = 0;

  CdkDragEnter(event) {
    console.log(event.container.data, event.container.data.length, "tofindlength111")
  }

  // cdkDragDropEntered(event: CdkDragEnter<string[]>) {

  //   if (event.item.dropped) {
  //     this.newVal = event.item.element.nativeElement.getElementsByTagName("b").item(0).innerHTML
  //     this.newVal = Number(this.newVal.substring(0, 2));
  //     if(event.item.dropContainer.id == "cdk-drop-list-0"){
  //     this.total_1 += this.newVal;
  //     }
  //     else if(event.item.dropContainer.id == "cdk-drop-list-1"){
  //       this.total += this.newVal;
  //       console.log(this.total_1, "droplist1")
  //     }
  //     else if(event.item.dropContainer.id == "cdk-drop-list-2"){

  //       this.total_2 += this.newVal;

  //     }
  //     console.log(this.newVal, this.total, event.item.element.nativeElement.getElementsByTagName("b").item(0).innerHTML);
  //     console.log(event.container.data , event.container.data.length , "tofindlength")
  //   }

  // }

  // cdkDragExited(event: CdkDragExit<string[]>) {

  //   if (event.item.exited) {
  //     this.newVal = event.item.element.nativeElement.getElementsByTagName("b").item(0).innerHTML
  //     this.newVal = Number(this.newVal.substring(0, 2));
  //     // this.total -= this.newVal;
  //     console.log( this.newVal, event.item.element.nativeElement.getElementsByTagName("b").item(0).innerHTML);
  //     console.log("exited")
  //   }

  // }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    if(event.container.id == "cdk-drop-list-0"){
      console.log("id fetched");
    event.container.data.forEach((elem) => {
      this.newVal += Number(elem["time"].substring(0, 2));
      this.tempvar  =  this.newVal;
      this.total = this.tempvar;
      this.tempvar = 0;
    })
    this.newVal = 0;        
  }

    else if(event.container.id == "cdk-drop-list-1"){
      console.log("id fetched_1");
    event.container.data.forEach((elem) => {
      Number(elem["time"].substring(0, 2));
      console.log(this.tempvar , "inside drop1")
      this.newVal += Number(elem["time"].substring(0, 2));
      console.log(this.newVal , "newval");
      this.tempvar  =  this.newVal;
      console.log(this.tempvar , "tempval");
      this.total_1 = this.tempvar;
      this.tempvar = 0;
      // this.newVal = 0
    })
    console.log(this.total_1 , "total1");
    this.newVal = 0;        
  }
    else{
      console.log("id fetched_2");
      event.container.data.forEach((elem) => {
        Number(elem["time"].substring(0, 2));
        console.log(this.tempvar , "inside drop2")
        this.newVal += Number(elem["time"].substring(0, 2));
        console.log(this.newVal , "newval");
        this.tempvar  =  this.newVal;
        console.log(this.tempvar , "tempval");
        this.total_2 = this.tempvar;
        this.tempvar = 0;
        // this.newVal = 0
      })
      console.log(this.total_2 , "total2");
      this.newVal = 0;        
    }
    console.log(this.newVal , this.total_2 , this.tempvar)


    // if (event.container.data.length) {
    //   this.cdkDragDropEntered
    //   console.log(this.cdkDragDropEntered, event.container[0]);
    // }
    // this.datacontainer = event.container.data
    // for (let i = 0; i < event.container.data.length; i++) {
    //   console.log("i incremeted");
    //   this.newVal = this.cdkDragDropEntered
    //   this.newVal = event.container.element.nativeElement.getElementsByTagName("b").item(0).innerHTML
    //   this.newVal = Number(this.newVal.substring(0, 2));
    //   this.total_2 += this.newVal;
    //   console.log(this.newVal)
    // }

  }

}
