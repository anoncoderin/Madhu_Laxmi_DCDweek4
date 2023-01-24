import { test, expect } from '@playwright/test'

var homePage = 'http://localhost:3000';
var aboutPage = 'http://localhost:3000/about';
var gradesPage = 'http://localhost:3000'/grades';

test.beforeAll(async()=>{


    console.log("Before tests")
})

test.afterAll(async()=>{
    console.log('After tests');
})

test.describe('Head tag area',()=> {
    test('Contains the Head tag and its content', async ({page})=>{
        await page.goto(homePage);

        await expect(page).toHaveTitle("Example#");
        
        const metaDescription = page.locator('meta[name="description"]');
        await

    })
})