import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bootstrap-controls',
  standalone: true,
  imports: [],
  templateUrl: './bootstrap-controls.component.html',
  styleUrl: './bootstrap-controls.component.scss'
})
export class BootstrapControlsComponent implements OnInit {

  constructor(private title: Title,private meta:Meta) {
   
  }
    ngOnInit(): void {
      this.setPageMetaTag();
  }
  setPageTitle() {
    alert(this.title.getTitle());
    this.title.setTitle("Title Services");
  }
  setPageMetaTag() {
    this.meta.addTag({ name: " Bootstrap", content:" Bootstrap page"})
  }
  localstorage() {
    alert(localStorage.getItem("username"));
  }
  sessionstorage() {
   alert( sessionStorage.getItem("password"));

  }
}
