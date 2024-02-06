import { Component, OnInit } from '@angular/core';
import { RestserviceService } from 'src/app/restservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.css']
})
export class FontComponent implements OnInit {

  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll(){
    this.rootelement.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  fromdata: FormGroup;

  constructor(private rest: RestserviceService, private builder: FormBuilder) {
    this.fromdata = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      MobileNo: new FormControl('', [Validators.required]),
      BussinessName: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {

  }

  onsubmit(formdata: any) {
    this.rest.postmessage(formdata).subscribe((data: any) => {
      location.href = 'https://mailthis.to/confirm'
      console.log(data);
      this.fromdata.reset();
    }, (error: any) => {
      console.log(error);
    })
  }

}
