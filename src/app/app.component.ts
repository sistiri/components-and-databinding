import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "TestServerA", content: "Just a test A" },
    { type: "server", name: "TestServerB", content: "Just a test B" },
  ];
}
