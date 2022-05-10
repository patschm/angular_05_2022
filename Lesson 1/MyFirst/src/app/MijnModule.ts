import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BlaModule } from "src/bla/bla.module";
import { MijnComponent } from "./MijnComponent";

@NgModule({
    declarations:[MijnComponent],
    exports:[],
    providers:[],
    bootstrap:[MijnComponent],
    imports:[BrowserModule, BlaModule]
})
export class MijnModule
{

}