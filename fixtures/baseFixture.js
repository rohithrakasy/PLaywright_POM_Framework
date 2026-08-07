import {test as base, request} from '@playwright/test';
import ApiClient  from '../services/ApiClient';
import ApiService  from '../services/ApiService';

import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';

export const test = base.extend({

    loginPage: async({page},use)=>{
        const loginPage = new LoginPage(page);

        await use(loginPage);
    },

    dashboardPage : async({page}, use)=>{
        const dashboardPage = new DashboardPage(page);

        await use(dashboardPage);
    },

    apiClient: [
        async ({},use)=>{
            const requestContext = await request.newContext({
                baseURL: 'https://jsonplaceholder.typicode.com',
                extraHTTPHeaders: {                            
                    'Content-Type': 'application/json'
                }
            });

            const apiClient = new ApiClient(requestContext);

            await use(apiClient);
            await apiClient.closeApiClient();
        },
        {
            scope: 'worker'
        }
    ],

    apiService: [
        async({},use)=>{
            const requestContext = await request.newContext({
                baseURL: 'https://devapi.suretyforce.com/apim',
                extraHTTPHeaders:{
                    'Content-Type': 'application/json'
                }
            });

            const apiService = new ApiService(requestContext);

            await use(apiService);
            await apiService.closeApiResource();
        },{
            scope: 'worker'
        }
    ]

});


export { expect } from '@playwright/test';