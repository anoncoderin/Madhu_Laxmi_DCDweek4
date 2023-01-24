import { test, expect } from '@playwright/test'

var homePage = 'http://localhost:3000';
var aboutPage = 'http://localhost:3000/about';
var gradesPage = 'http://localhost:3000/grades';

test.beforeAll(async()=>{


    console.log("Before tests")
})

test.afterAll(async()=>{
    console.log('After tests');
})

test.describe('Head tag area',()=> {
    test('Contains the Head tag and its content', async ({page})=>{
        await page.goto(homePage);

        await expect(page).toHaveTitle("Example #1");
        
        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content', 'Generated by create next app')

        const linkIcon = page.locator('link[rel="icon"]');
        await expect(linkIcon).toHaveAttribute('href','/favicon.ico');

    })
})
test.describe('Main content test',()=>{
    test('Should contain a heading welcome to my home page', async ({page})=> {
        await page.goto(homePage);
       await expect(page.locator('h1')).toContainText("Welcome to my home page")
    })
})
test('Should contain a list to describe CRUD', async ({ page })=>{



    await expect(page.locator('ul > li')).toContainText(["Create", "Read", "Update", "Delete"])
})

test.describe('linking to another page',()=>{
    test('should contain a link to about page', async({ page})=>{

   
    await page.goto(homePage);
    await page.click('text=About page')
    await expect(page).toHaveURL(aboutPage)
})

test('Should contain a link to grades page', async({ page })=>{

    await page.goto(homePage);
    await page.click('text=Grades page')
    await expect(page).toHaveURL(gradesPage)

})

})
