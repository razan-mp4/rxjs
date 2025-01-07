import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { LogService } from './log.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    providers: [DataService, LogService], // Реєструємо сервіси
})
export class SharedModule {}
