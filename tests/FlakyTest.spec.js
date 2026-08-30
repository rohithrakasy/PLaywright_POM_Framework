import {expect, test} from '@playwright/test';

test("Validate Retries concept", async({page})=>{

    console.log("REtry Number: ", test.info().retry);

    if(test.info().retry === 0){
        expect(true).toBe(false);
    }

    expect(true).toBe(true);
});

