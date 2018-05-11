//core imports
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

//style imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'

//app imports
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { MineComponent } from './mine/mine.component'
import { BlocksComponent } from './blocks/blocks.component';
import { BalanceComponent } from './balance/balance.component';
import { WalletComponent } from './wallet/wallet.component';
import { LiveBlocksComponent } from './live-blocks/live-blocks.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MineComponent,
    BlocksComponent,
    BalanceComponent,
    WalletComponent,
    LiveBlocksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
