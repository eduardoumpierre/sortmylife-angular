import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route} from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

	constructor(private authService: AuthService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
		console.log("AuthGuard Active");

		return this.verificarAcesso();
	}

	private verificarAcesso() {
		if (localStorage.getItem('currentUser')) {
			return true;
		}

		this.router.navigate(['login']);

		return false;
	}

	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean{
		console.log("canLoad: Verificando se o usuário pode carregar o módulo");

		return this.verificarAcesso();
	}
}
