import { Component, OnInit } from '@angular/core';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  title = "Edit"
  imageSrc: any;
  msg: any;

  constructor() { }


  previewImage(event: any){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(file);
    }
  }

  ngOnInit(): void {
  }

}
