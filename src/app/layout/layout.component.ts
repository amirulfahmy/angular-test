import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/core/services/auth.service';
import { ConfirmationModalComponent } from '../components/confirmation-modal/confirmation-modal.component';

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
    private router: Router,
    private ngbModal: NgbModal
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
    const dialog = this.ngbModal.open(ConfirmationModalComponent, {
      size: 'md',
      backdrop: 'static',
      centered: true
    });

    dialog.componentInstance.title = "Confirmation";
    dialog.componentInstance.message = "Are you sure you want to sign out?";

    dialog.result.then(res => {
      if (res === true){
        this.authService.logOut();

      }
    })

  }
}
