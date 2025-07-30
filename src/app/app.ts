import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { FronteggAuthService, FronteggAppService } from '@frontegg/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
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

  tenantsState = signal<any>(null);

  constructor() {
    this.loadingSubscription = this.fronteggAppService.isLoading$.subscribe(
      (isLoading) => (this.isLoading = isLoading)
    );
  }

  ngOnInit(): void {
    this.fronteggAuthService?.user$.subscribe((user) => {
      this.user = user;
    });

    this.fronteggAuthService.tenantsState$.subscribe((state) => {
      this.tenantsState.set(state);
    });
  }

  loginWithRedirect(): void {
    this.fronteggAuthService.loginWithRedirect();
  }

  logOut(): void {
    const fronteggBaseUrl = 'https://app-tkyztdfvr4u7.frontegg.com';
    window.location.href = `${fronteggBaseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  }

  showAdminPortal(): void {
    this.fronteggAppService?.showAdminPortal();
  }

  onTenantChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const tenantId = target.value;

    this.fronteggAuthService.switchTenant({
      tenantId: tenantId,
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }
}
