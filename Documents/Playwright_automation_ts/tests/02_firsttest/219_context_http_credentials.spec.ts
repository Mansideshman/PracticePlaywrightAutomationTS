//context woith HTTP request

import{test,expect} from '@playwright/test';

test('context with HTTP auth',async ({browser})=>
{
    const context = await browser.newContext({
        httpCredentials:{
            username: 'user',
            password: 'pass'
        }
        
    });
    


const page = await context.newPage();
//will auto authenticate for HTTP Basic auth
await context.close();
});
