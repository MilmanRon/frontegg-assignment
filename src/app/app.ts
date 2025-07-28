import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FronteggAuthService,
  FronteggAppService,
  ContextHolder,
} from '@frontegg/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  protected title = 'frontegg-assignment';

  private fronteggAuthService = inject(FronteggAuthService);
  private fronteggAppService = inject(FronteggAppService);

  isLoading = true;
  loadingSubscription: Subscription;
  user?: any;

  constructor() {
    this.loadingSubscription = this.fronteggAppService.isLoading$.subscribe(
      (isLoading) => (this.isLoading = isLoading)
    );
  }

  ngOnInit(): void {
    this.fronteggAuthService?.user$.subscribe((user) => {
      this.user = user;
    });
  }

  loginWithRedirect(): void {
    this.fronteggAuthService.loginWithRedirect();
  }

  logOut(): void {
    const baseUrl = ContextHolder.for('Angular Demo App').getContext()
      .baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }
}
