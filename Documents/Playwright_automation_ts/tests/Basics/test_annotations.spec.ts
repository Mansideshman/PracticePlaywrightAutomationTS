import { test, expect} from '@playwright/test';

//skip test
test.skip('skipped test',async({ page })=>
{
    //this test is skipped
})
//only run this test
test.only('focused test',async ({ page })=>
{
    //only this test runs

});


test.fail('expected to fail',async({ page})=>
{
//Test is expected to fail
});

//slow test (3x timeout)
test.slow('slow test',async ({ page })=>
{
    //Has extended timeout
});

//conditional skip

test('conditional',async({page,browserName})=>
{
    test.skip(browserName === 'firefox','Not supported in Firefox');

});