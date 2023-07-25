import { NgModule } from "@angular/core";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { SharedModule } from "../shared.module";
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [FileUploadComponent, BreadcrumbComponent, CarouselComponent],
  imports: [SharedModule],
  exports: [FileUploadComponent, BreadcrumbComponent,CarouselComponent],
})
export class ComponentsModule {}
