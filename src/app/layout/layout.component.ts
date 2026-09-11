import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  private $destroy: Subject<void> = new Subject<void>();
  pageTitle: string = '';

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
     this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.$destroy)
    )
    .subscribe(() => {
      let route = this.activatedRoute;

      while (route.firstChild) {
        route = route.firstChild;
      }
      this.pageTitle = route.snapshot.data['title'] ?? '';
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.$destroy.next();
    this.$destroy.complete();
  }

  logOut(){
    this.authService.logOut();
  }
}
