import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItComponent } from './component/it/it.component';
import { InterviewComponent } from './component/it/interview/interview.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { JavacoreComponent } from './component/it/javacore/javacore.component';
import { FooterComponent } from './footer/footer.component';
import { AdsComponent } from './ads/ads.component';
import { ContentComponent } from './content/content.component';
import { PhotoComponent } from './component/photo/photo.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CloudComponent } from './component/it/cloud/cloud.component';
import { KubernetesComponent } from './component/itCloud/kubernetes/kubernetes.component';
import { K8staskComponent } from './component/itCloud/k8stask/k8stask.component';
import { TrainingComponent } from './component/itCloud/training/training.component';
import { DevopsComponent } from './component/itCloud/devops/devops.component';
import { TutorialComponent } from './component/it/tutorial/tutorial.component';
import { SecurityComponent } from './component/it/security/security.component';
import { ItCloudComponent } from './component/itCloud/itCloud.component';
import { AzureComponent } from './component/itCloud/azure/azure.component';
import { GcpComponent } from './component/itCloud/gcp/gcp.component';
import { DockerComponent } from './component/itCloud/docker/docker.component';
import { FamilyComponent } from './component/photo/family/family.component';
import { NatureComponent } from './component/photo/nature/nature.component';
import { PhotoContentComponent } from './component/photo/photo-content/photo-content.component';
import { TrendComponent } from './component/it/trend/trend.component';
import { ChineseComponent } from './component/chinese/chinese.component';
import { JokeComponent } from './component/chinese/joke/joke.component';
import { PieceComponent } from './component/chinese/piece/piece.component';
import { FrameworkComponent } from './component/it/framework/framework.component';
import { DatabaseComponent } from './component/it/database/database.component';
import { ArchitectureComponent } from './component/it/architecture/architecture.component';
import { JavaeeComponent } from './component/it/javaee/javaee.component';
import { TravelComponent } from './component/chinese/travel/travel.component';
import { StoryComponent } from './component/story/story.component';
import { EnglishComponent } from './component/story/english/english.component';
import { LinkComponent } from './component/link/link.component';
import { ToolComponent } from './component/it/tool/tool.component';
import { DesignComponent } from './component/it/design/design.component';
import { OtherComponent } from './component/it/other/other.component';
import { MethodologyComponent } from './component/it/methodology/methodology.component';

@NgModule({
  declarations: [
    AppComponent,
    ItComponent,
    ItCloudComponent,
    AzureComponent,
    GcpComponent,
    DockerComponent,
    InterviewComponent,
    SideMenuComponent,
    JavacoreComponent,
    FooterComponent,
    AdsComponent,
    ContentComponent,
    PhotoComponent,
    WelcomeComponent,
    CloudComponent,
    KubernetesComponent,
    K8staskComponent,
    DevopsComponent,
    TrainingComponent,
    TutorialComponent,
    SecurityComponent,
    FamilyComponent,
    NatureComponent,
    PhotoContentComponent,
    TrendComponent,
    ChineseComponent,
    JokeComponent,
    PieceComponent,
    FrameworkComponent,
    DatabaseComponent,
    ArchitectureComponent,
    JavaeeComponent,
    TravelComponent,
    StoryComponent,
    EnglishComponent,
    LinkComponent,
    ToolComponent,
    DesignComponent,
    OtherComponent,
    MethodologyComponent
  ],
  imports:[
 CommonModule,
NgtUniversalModule,
 
    
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
})
export class AppModule { }
