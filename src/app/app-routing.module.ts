import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component'
import { ItComponent } from './component/it/it.component'
import { ItCloudComponent } from './component/itCloud/itCloud.component'
import { AzureComponent } from './component/itCloud/azure/azure.component';
import { GcpComponent } from './component/itCloud/gcp/gcp.component';
import { DockerComponent } from './component/itCloud/docker/docker.component';
import { ArchitectureComponent } from './component/it/architecture/architecture.component';
import { CloudComponent } from './component/it/cloud/cloud.component';
import { KubernetesComponent } from './component/itCloud/kubernetes/kubernetes.component';
import { DevopsComponent } from './component/itCloud/devops/devops.component';
import { TrainingComponent } from './component/itCloud/training/training.component';
import { JavacoreComponent } from './component/it/javacore/javacore.component'
import { JavaeeComponent } from './component/it/javaee/javaee.component'
import { FrameworkComponent } from './component/it/framework/framework.component'
import { DatabaseComponent } from './component/it/database/database.component'
import { SecurityComponent } from './component/it/security/security.component';
import { InterviewComponent } from './component/it/interview/interview.component';
import { TutorialComponent } from './component/it/tutorial/tutorial.component';
import { DesignComponent } from './component/it/design/design.component'; 
import { TrendComponent } from './component/it/trend/trend.component';
import { ToolComponent } from './component/it/tool/tool.component';
import { OtherComponent } from './component/it/other/other.component';
import { MethodologyComponent } from './component/it/methodology/methodology.component';

import { PhotoComponent } from './component/photo/photo.component';
import { NatureComponent } from './component/photo/nature/nature.component';
import { FamilyComponent } from './component/photo/family/family.component';

import { ChineseComponent } from './component/chinese/chinese.component';
import { TravelComponent } from './component/chinese/travel/travel.component';
import { JokeComponent } from './component/chinese/joke/joke.component';
import { PieceComponent } from './component/chinese/piece/piece.component';

import { StoryComponent } from './component/story/story.component';
import { EnglishComponent } from './component/story/english/english.component';

import { LinkComponent } from './component/link/link.component';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
  {
    path: 'it', component: ItComponent,
  },
  {
    path: 'it/architecture', component: ArchitectureComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: ArchitectureComponent
      }
    ]
  },
  {
    path: 'it/cloud', component: CloudComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: CloudComponent
      }
    ]
  },
  {
    path: 'it/javacore', component: JavacoreComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: JavacoreComponent
      }
    ]
  },
  {
    path: 'it/javaee', component: JavaeeComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: JavaeeComponent
      }
    ]
  },
  {
    path: 'it/framework', component: FrameworkComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: FrameworkComponent
      }
    ]
  },
  {
    path: 'it/database', component: DatabaseComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: DatabaseComponent
      }
    ]
  },
  {
    path: 'it/security', component: SecurityComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: SecurityComponent
      }
    ]
  },  
  {
    path: 'it/interview', component: InterviewComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: InterviewComponent
      }
    ]
  },
  {
    path: 'it/tutorial', component: TutorialComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: TutorialComponent
      }
    ]
  },
  {
    path: 'it/design', component: DesignComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: DesignComponent
      }
    ]
  },
  {
    path: 'it/trend', component: TrendComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: TrendComponent
      }
    ]
  },
  {
    path: 'it/tool', component: ToolComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: ToolComponent
      }
    ]
  },
  {
    path: 'it/other', component: OtherComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: OtherComponent
      }
    ]
  },
  {
    path: 'it/methodology', component: MethodologyComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: MethodologyComponent
      }
    ]
  },
  {
    path: 'itCloud', component: ItCloudComponent,
  },
  {
    path: 'itCloud/azure', component: AzureComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: AzureComponent
      }
    ]
  },
  {
    path: 'itCloud/gcp', component: GcpComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: GcpComponent
      }
    ]    
  },
  {
    path: 'itCloud/docker', component: DockerComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: DockerComponent
      }
    ]    
  },
  {
    path: 'itCloud/kubernetes', component: KubernetesComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: KubernetesComponent
      }
    ]
  },
  {
    path: 'itCloud/devops', component: DevopsComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: DevopsComponent
      }
    ]
  },
  {
    path: 'itCloud/training', component: TrainingComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: TrainingComponent
      }
    ]
  },
  {
    path: 'photo', component: PhotoComponent
  },
  {
    path: 'photo/nature', component: NatureComponent
  },
  {
    path: 'photo/family', component: FamilyComponent
  },
  {
    path: 'chinese', component: ChineseComponent
  },
  {
    path: 'chinese/travel', component: TravelComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: TravelComponent
      }
    ]
  },
  {
    path: 'chinese/joke', component: JokeComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: JokeComponent
      }
    ]
  },
  {
    path: 'chinese/piece', component: PieceComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: PieceComponent
      }
    ]
  },
  {
    path: 'story', component: StoryComponent,
  },
  {
    path: 'story/english', component: EnglishComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: EnglishComponent
      }
    ]
  },
  {
    path: 'story/chinese', component: EnglishComponent,
    children: [
      {
        path: ':id', component: ContentComponent       
      },
      {
        path: '', component: EnglishComponent
      }
    ]    
  },
  {
    path: 'link', component: LinkComponent
  },
  {
    path: '', component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
