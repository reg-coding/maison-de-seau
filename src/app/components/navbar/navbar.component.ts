import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  brandName: String = "Maison de Seau";
  isHome:Boolean =  true
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && val.url != "/") {
        this.isHome =  false;
      }
    });
  }

  ngOnInit() {}
}
