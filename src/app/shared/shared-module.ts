import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing-module';
import { SharedModal } from './shared-modal/shared-modal';

@NgModule({
  declarations: [SharedModal],
  imports: [CommonModule, SharedRoutingModule],
  exports:[SharedModal]
})
export class SharedModule {}
