import { Routes } from '@angular/router';
import { CustomerAccountComponent } from './pages/customer-account/customer-account.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ServiceComponent } from './pages/service/service.component';

export const routes: Routes = [
    {
        path:"Home",
        component:DashbordComponent
    },
    {
        path:"Customer_Account",
        component:CustomerAccountComponent
    },
    {
        path:"Service",
        component:ServiceComponent
    }
];
