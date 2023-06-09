import { Component,  OnDestroy, OnInit } from '@angular/core';
import { DataStorage } from '../services/data-storage.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private dataStorage: DataStorage, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user=>{
      this.isAuthenticated = !user ? false : true;
    });
  }

  onSaveData(){
    this.dataStorage.storeRecipes();
  }

  onFetchData(){
    this.dataStorage.fetchRecipes().subscribe();
  }

  onLogout(){
    this.authService.logout()
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }


}
