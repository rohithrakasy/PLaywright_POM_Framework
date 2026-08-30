import { expect, firefox, test } from "@playwright/test";

test("Test Hyr Tutorials", async ({ browser }) => {
  // const browser = await firefox.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.hyrtutorials.com/");

  await page.waitForLoadState("domcontentloaded");

  const menuList = await page.locator("#menu div ul li a");

  await menuList.getByText("Selenium Practice").hover();
  await menuList.getByText("Frames Practice").click();

  await expect(
    page.getByRole("heading", { name: "Frames Practice" }),
  ).toBeVisible();

  const frame1 = await page.frameLocator("#frm1");

  await frame1.locator("#course").scrollIntoViewIfNeeded();

  await frame1.locator("#course").selectOption("Javascript");

  await menuList.getByText("Selenium Practice").hover();
  await menuList.getByText("Alerts").click();

  // Alerts

  await expect(page.getByRole("heading", { name: "AlertsDemo" })).toBeVisible();

  page.once("dialog", async (dialog) => {
    console.log("Dialog Text: " + dialog.message());
    await dialog.accept();
  });

  await page.getByRole("button", { name: "Click me" }).nth(0).click();

  page.once("dialog", async (dialog) => {
    console.log("Dialog Text Second Alert: " + dialog.message());

    await dialog.accept();
  });

  await page.getByRole("button", { name: "Click me" }).nth(1).click();

  page.once("dialog", async (dialog) => {
    console.log("Dialog Text Third Alert: " + dialog.message());

    await dialog.accept("Rohith Kumar");
  });

  await page.getByRole("button", { name: "Click me" }).nth(2).click();

  // File upload

  await page.pause();

  await page.close();
});

test("Test Claimant portal for upload file", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://dev-claims.suretyforce.com/login");

  await page.waitForLoadState("domcontentloaded");

  await page
    .getByPlaceholder("johndoe@email.com")
    .fill("rohith+ian@coreaiconsulting.com");
  await page.getByPlaceholder("********").fill("test1234");
  await page.getByRole("button", { name: "Login" }).click();

  await page.getByRole("button", { name: "New Claim" }).click();
  await page.waitForLoadState("load");

  //Enter dot number to search

  await page.getByPlaceholder("e.g. 9876543").fill("5890036");
  await page.getByRole("button", { name: "Look Up Broker" }).click();

  // await expect(page.getByText('Teja Trucking Service')).toBeVisible();
  // await expect(page.getByText("5890036")).toBeVisible();

  await page.getByRole("button", { name: "Yes, this is correct " }).click();

  await page.getByPlaceholder("e.g. 984363").fill("5891036");

  await page.locator('input[name="totalClaimAmount"]').scrollIntoViewIfNeeded();
  await page.locator('input[name="totalClaimAmount"]').fill("8000");

  await page.locator('input[name="numberOfLoads"]').scrollIntoViewIfNeeded();
  await page.locator('input[name="numberOfLoads"]').fill("1");

  await page.getByRole("button", { name: "Continue " }).click();

  //Random Number

  const random = Math.floor(Math.random() * 10000);
  console.log("Random Number: " + random);

  //Date for pickup and drop off
  const date = new Date();
  date.setDate(date.getDate() - 4);

  const fourDaysAgo = date.toISOString().split("T")[0];
  console.log("Four days AGo: " + fourDaysAgo);

  const today = new Date().toISOString().split("T")[0];
  console.log("Today's Date: " + today);

  //Enter  Load Details
  await page.getByPlaceholder("e.g. INV-001").fill("INV-" + random);
  await page.getByPlaceholder("e.g. PRO-12345").fill("PRO-" + random);
  await page.locator("input[type='date']").nth(0).fill(fourDaysAgo);
  await page.locator("input[type='date']").nth(1).fill(today);

  await page.locator("div.space-y-1 select").nth(0).selectOption("AZ");
  await page.locator("div.space-y-1 select").nth(1).selectOption("IL");

  await page.getByPlaceholder("Select or type to search...").fill("cotton");
  await page.getByText("Cotton", { exact: true }).click();

  await page.locator("input[type='number']").nth(0).scrollIntoViewIfNeeded();

  await page.locator("input[type='number']").nth(0).fill(`${random}`);
  await page.locator("input[type='number']").nth(1).fill(`${random}`);

  await page.getByRole("button", { name: "Submit Claim" }).click();

  // Upload files

  const fileInputs = page.locator("input[type='file']");

  //Rate confirmation

  await fileInputs
    .nth(0)
    .setInputFiles(
      "C:/Users/rohit/Downloads/Test_Rate_Confirmation_RC-2001.pdf",
    );

  //Invoice

  await fileInputs
    .nth(1)
    .setInputFiles("C:/Users/rohit/Downloads/Test_Invoice_INV-2001.pdf");

  //Broker Confirmation

  await fileInputs
    .nth(2)
    .setInputFiles(
      "C:/Users/rohit/Downloads/Test_Broker_Carrier_Agreement.pdf",
    );

  await expect(
    page.getByRole("button", { name: "Upload All (" }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Upload All (" }).click();

  await expect(page.getByText("1 uploaded")).toHaveCount(3);

  const continueBtn = page.getByRole("button", { name: "Continue" });

  await expect(continueBtn).toBeVisible();
  await expect(continueBtn).toBeEnabled();
  await continueBtn.click();

  //View my claim
  await page.getByRole("button", { name: "View My Claim" }).click();

  await page.pause();

  await page.close();
});

test("Test Download Feature", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://smallpdf.com/blog/sample-pdf");

  await page.waitForLoadState("domcontentloaded");

  await page.locator("div.sc-1sjqft3-2 ul li a").nth(1).click();

  const fileinput = page.locator("input[type='file']");

  await fileinput
    .nth(0)
    .setInputFiles(
      "C:/Users/rohit/Downloads/Test_Rate_Confirmation_RC-2001.pdf",
    );

  await page.getByText("Word", { exact: true }).click();

  await page.getByRole("button", { name: "Convert" }).nth(1).click();

  await expect(page.getByText("Done", { exact: true })).toBeVisible();

  await page.locator("button[type='submit']").nth(2).click();

  // const downloadPromise = await page.waitForEvent('download');

  await page.locator("a.sc-1bu7qfl-0").nth(1).click();

  // const download = await downloadPromise;

  const downloadInputFiles = await page
    .locator("input[type='file']")
    .nth(1)
    .scrollIntoViewIfNeeded();

  const date = new Date();

  date.setDate(date.getDate() - 10);

  const tendays = date.toISOString().split("T")[0];

  console.log("Ten Days: " + tendays);

  await page.pause();

  await page.close();
});

test("Test Frames using Hyr Tutorial page", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.hyrtutorials.com/");

  await page.waitForLoadState("domcontentloaded");

  const menuItems = await page.locator("#menu div ul li a");

  await menuItems.getByText("Selenium Practice").hover();
  await menuItems.getByText("Frames Practice").click();

  await expect(
    page.getByRole("heading", { name: "Frames Practice" }),
  ).toBeVisible();

  const switchFrame1 = await page.frameLocator("#frm1");

  await switchFrame1.locator("#course").scrollIntoViewIfNeeded();

  await switchFrame1.locator("#course").selectOption("Dot Net");

  //Second Frame
  const switchFrame2 = await page.frameLocator("#frm2");

  await switchFrame2.locator("#femalerb").scrollIntoViewIfNeeded();

  await switchFrame2.locator("#femalerb").check();

  await expect(switchFrame2.locator("#femalerb")).toBeChecked();

  const lang = await switchFrame2.locator("input[type='checkbox']");

  for (let i = 0; i <= 5; i++) {
    await lang.nth(i).check();
  }

  //Third Frame
  const switchFrame3 = await page.frameLocator("#frm3");

  await expect(
    switchFrame3.getByRole("heading", { name: "Frames Practice" }),
  ).toBeVisible();

  const insidefram2 = await switchFrame3.frameLocator("#frm2");

  await insidefram2
    .getByPlaceholder("Enter Last Name")
    .scrollIntoViewIfNeeded();

  await insidefram2.getByPlaceholder("Enter Last Name").fill("Rohith");

  await page.pause();

  await page.close();
});

test("Automate Bond Process happy path", async ({ browser }) => {
  const context = await browser.newContext();

  await context.grantPermissions(["notifications"], {
    origin: "https://staging.suretyforce.com",
  });
  const page = await context.newPage();

  await page.goto("https://staging.suretyforce.com/login");

  await page.waitForLoadState("domcontentloaded");

  // Login
  await page
    .getByPlaceholder("johndoe@email.com")
    .fill("rohith+staging@coreaiconsulting.com");
  await page.getByPlaceholder("••••••••").fill("test12345");
  await page.getByRole("button", { name: "Sign In", exact: true }).click();

  //Home Page

  await page.getByRole("button", { name: "Skip for Now" }).click();

  await page.waitForLoadState("domcontentloaded");

  /* Below two lines of code is not required due to as we grantpermissions at context level so this enable notificatios will not be visible

  // await expect(page.getByRole('button',{name:'Enable notifications'})).toBeVisible();


  // await page.getByRole('button',{name:'Enable notifications'}).click();

  */

  const enableBtn = page.getByRole("button", { name: "Enable notifications" });

  if (await enableBtn.isVisible()) {
    await enableBtn.click();
  }

  console.log("UrL: ", await page.url());

  await page.getByRole("link", { name: "Bonds" }).click();

  //Validate Header Bonds Pipeline
  await expect(
    page.getByRole("heading", { name: "Bond Pipeline" }),
  ).toBeVisible();

  //click on New Bond
  await page.getByRole("link", { name: "New Bond" }).click();

  //click on New Cutomer
  await page.getByText("New Customer").nth(0).click();

  //Fill New Broker Form

  const firstNames = ["John", "David", "Michael", "James", "Robert"];
  const lastNames = ["Smith", "Brown", "Wilson", "Taylor", "Anderson"];
  const pickRandomFirstnames =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const pickRandomLastNames =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  console.log("Fisrt Name: " + pickRandomFirstnames);
  console.log("Last Name: " + pickRandomLastNames);

  await page.getByPlaceholder("First name").fill(pickRandomFirstnames);
  await page.getByPlaceholder("Last name").fill(pickRandomLastNames);

  //generate random value

  const randomVal = Math.floor(1000 + Math.random() * 9000);

  console.log("Random Value: " + randomVal);

  const phoneNum = Math.floor(
    1000000000 + Math.random() * 9000000000,
  ).toString();

  const randomemail = `rohith+BondApp${randomVal}@coreaiconsulting.com`;

  const comapanyName = `${pickRandomFirstnames} Trucking Services_${randomVal}`;

  const dotNumber = Math.floor(1000000 + Math.random() * 9000000).toString();

  console.log("Phone:", phoneNum);
  console.log("Email:", randomemail);
  console.log("Company:", comapanyName);
  console.log("DOT Number:", dotNumber);

  //fill These above random values in respective fields
  await page.getByPlaceholder("(555) 555-5555").fill(phoneNum);

  await page.getByPlaceholder("email@example.com").fill(randomemail);

  await page.getByPlaceholder("Company name").fill(comapanyName);

  await page.getByPlaceholder("XXXXXXX").fill(dotNumber);

  //Click on Start bond Application
  await page.getByRole("button", { name: "Start Application" }).click();

  //Validation General Inform Inform Header

  await expect(
    page.getByRole("heading", { name: "General Information" }),
  ).toBeVisible();

  //fill some random values

  const genraldropDown = page.locator(".space-y-2 select");
  //select business type

  await page.locator(".space-y-2 select").nth(0).selectOption("Corporation");

  //Years in Business

  await genraldropDown.nth(1).selectOption("3-5 years");

  const federalId = Math.floor(
    100000000 + Math.random() + 900000000,
  ).toString();
  await page.locator("#federalTaxId").fill(federalId);

  await genraldropDown.nth(3).selectOption("No");

  //Business address
  await page.locator("#businessAddress").scrollIntoViewIfNeeded();

  await page.locator("#businessAddress").fill("8111 cabrillo landing ct");
  await page.locator("#businessCity").fill("katy");
  await genraldropDown.nth(5).selectOption("Texas");
  await page.locator("#businessZip").fill("77494");

  //statistical Info
  await genraldropDown.nth(6).selectOption("200 - 500K");

  //owner Info
  await page
    .getByPlaceholder("Enter ownership percentage")
    .scrollIntoViewIfNeeded();

  await page.getByPlaceholder("Enter ownership percentage").fill("100");

  //fill date
  await page.locator("input[type='date']").fill("1935-11-06");

  //Fill SSN
  await page.locator("#primaryContactSsn").clear();

  await page.locator("#primaryContactSsn").fill("666108111");

  await page.getByLabel("Same as Business Address").click();

  //click on continue to credit check

  await page.getByRole("button", { name: "Continue to Credit Check" }).click();

  await page.waitForLoadState("domcontentloaded");

  //Credit check consent
  await page.getByLabel("Credit Check Authorization *").click();
  await page.getByLabel("Information Accuracy *").click();
  await page.getByLabel("Privacy Policy Agreement *").click();

  const pullCreditBtn = page.getByRole("button", { name: "Pull credit" });
  const continueBtn = page.getByRole("button", { name: "Continue" });

  await expect(pullCreditBtn).toBeEnabled();

  await pullCreditBtn.click();

  await expect(continueBtn).toBeEnabled({ timeout: 30000 });

  await continueBtn.click();

  await page.pause();

  await page.close();
});

test("Validate Multiple tabs/Windows", async ({ browser }) => {
  const context = await browser.newContext();
  await context.grantPermissions(["notifications"], {
    origin: "https://www.hyrtutorials.com/",
  });

  const page = await context.newPage();

  await page.goto("https://www.hyrtutorials.com/");

  await page.waitForLoadState("domcontentloaded");

  const selectorMenu = page.locator(".menu  div ul li a");

  await selectorMenu.getByText("Selenium Practice").hover();
  await selectorMenu.getByText("Window Handles").click();

  await page.waitForLoadState("domcontentloaded");

  await expect(
    page.getByRole("heading", { name: "Window Handles Practice" }),
  ).toBeVisible();

  const [newTab] = await Promise.all([
    context.waitForEvent("page"),
    page.getByRole("button", { name: "Open New Tab" }).click(),
  ]);

  await expect(newTab.getByRole("heading", { name: "AlertsDemo" }));

  newTab.once("dialog", async (dialog) => {
    const msg = await dialog.message();

    console.log(msg);

    await dialog.accept();
  });

  await newTab.getByRole("button", { name: "Click me" }).nth(0).click();

  const [newWindow] = await Promise.all([
    context.waitForEvent("page"),
    page.getByRole("button", { name: "Open New Window" }).click(),
  ]);

  await newWindow.bringToFront();

  await newWindow.getByPlaceholder("Enter Email").scrollIntoViewIfNeeded();

  await newWindow.getByPlaceholder("Enter Email").fill("test@testmail.com");

  // await newWindow.pause();
  await newWindow.close();

  await page.pause();

  await page.close();
});

test("Validate Upload Files in Underwriting", async ({ browser }) => {
  const context = await browser.newContext();

  await context.grantPermissions(["notifications"], {
    origin: "https://dev.suretyforce.com/",
  });

  const page = await context.newPage();

  await page.goto("https://dev.suretyforce.com/login");

  await page.waitForLoadState("domcontentloaded");

  await page
    .locator("input[type='email']")
    .fill("rohith+pfaadmin@coreaiconsulting.com");
  await page.locator("input[type='password']").fill("test1234");

  await page.getByRole("button", { name: "Sign In" }).isEnabled();
  await page.getByRole("button", { name: "Sign In" }).click();

  await page.getByRole("button", { name: "Skip for Now" }).click();

  await page.waitForLoadState("domcontentloaded");

  //Select Underwriting Tab
  await page.getByRole("link", { name: "Underwriting" }).click();

  await expect(
    page.getByRole("heading", { name: "Underwriting Overview" }),
  ).toBeVisible();

  await page
    .getByText("Bond Applicants in Underwriting")
    .scrollIntoViewIfNeeded();

  await page
    .getByPlaceholder("Search applicants...")
    .fill("Test User Trucking Service");

  const firstRow = page
    .locator("table.w-full")
    .nth(0)
    .locator("tbody tr td div")
    .nth(3);

  await expect(firstRow.getByText("Pending", { exact: true })).toBeVisible();

  const statusoFApplication = await firstRow.textContent();
  console.log("Status of the Application: " + statusoFApplication);

  await await page
    .locator("table.w-full")
    .nth(0)
    .locator("tbody tr td div")
    .nth(1)
    .click();

  await page
    .getByRole("button", { name: "Upload Document" })
    .scrollIntoViewIfNeeded();

  const [filechooser] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.getByRole("button", { name: "Upload Document" }).click(),
  ]);

  await filechooser.setFiles(
    "C:/Users/rohit/Downloads/Test_Broker_Carrier_Agreement.pdf",
  );

  await expect(page.getByText("1 document", { exact: true })).toBeVisible();


  //Delete Document
  await page.locator("button.text-red-600").click();
  await page.getByRole('button',{name:'Delete'}).click();


  await expect(page.getByText("0 documents",{exact:true})).toBeVisible();

  await page.getByText("Assigned To:").locator("button[type='button']").nth(3).click();

  await page.getByText("Kumar Rohith",{exact:true}).click();



  await page.pause();
});

test("Validate Upload Files in Underwriting in Status In Progress", async ({ browser }) => {
  const context = await browser.newContext();

  await context.grantPermissions(["notifications"], {
    origin: "https://dev.suretyforce.com/",
  });

  const page = await context.newPage();

  await page.goto("https://dev.suretyforce.com/login");

  await page.waitForLoadState("domcontentloaded");

  await page
    .locator("input[type='email']")
    .fill("rohith+pfaadmin@coreaiconsulting.com");
  await page.locator("input[type='password']").fill("test1234");

  await page.getByRole("button", { name: "Sign In" }).isEnabled();
  await page.getByRole("button", { name: "Sign In" }).click();

  await page.getByRole("button", { name: "Skip for Now" }).click();

  await page.waitForLoadState("domcontentloaded");

  //Select Underwriting Tab
  await page.getByRole("link", { name: "Underwriting" }).click();

  await page.waitForLoadState("domcontentloaded");

  await expect(
    page.getByRole("heading", { name: "Underwriting Overview" }),
  ).toBeVisible();

  await page
    .getByText("Bond Applicants in Underwriting")
    .scrollIntoViewIfNeeded();

  await page
    .getByPlaceholder("Search applicants...")
    .fill("Test User Trucking Service");

  const firstRow = page
    .locator("table.w-full")
    .nth(0)
    .locator("tbody tr td div")
    .nth(3);

  await expect(firstRow.getByText("In Progress", { exact: true })).toBeVisible();

  const statusoFApplication = await firstRow.textContent();
  console.log("Status of the Application: " + statusoFApplication);

  await await page
    .locator("table.w-full")
    .nth(0)
    .locator("tbody tr td div")
    .nth(1)
    .click();

  
  // await page.locator("button[type='button']").nth(2).click();

  // await page.getByText("Kumar Rohith",{exact:true}).click();

  await page.getByRole('button',{name:'Open Review'}).scrollIntoViewIfNeeded();

  // await page.pause();

  await page.getByRole('button',{name:'Open Review'}).click();

  const [fileUpload] =await Promise.all([

    page.waitForEvent('filechooser'),
    page.getByRole('button',{name:'Upload'}).nth(0).click()
  ]);

  await fileUpload.setFiles("C:/Users/rohit/Downloads/Test_Broker_Carrier_Agreement.pdf");

  await expect(page.getByText("Select all (1)",{exact:true})).toBeVisible();

  await page.locator("button[role='checkbox']").last().click();

  

  const downloadPromise = page.waitForEvent('download');

  await page.getByRole('button',{name:'Download Selected ('}).click();

  const download = await downloadPromise;

  await download.saveAs("C:\\Users\\rohit\\Downloads\\" + download.suggestedFilename());

  console.log("Download");

  //Delete
  // await page.locator("button.text-muted-foreground").last().click();



  await page.pause();
});

test("Validate Download Functionallity", async({browser})=>{

  const context = await browser.newContext();

  await context.grantPermissions(['notifications'],{
    origin:"https://dev.suretyforce.com/login"
  });

  const page = await context.newPage();

  await page.goto("https://dev.suretyforce.com/login");

  await page.waitForLoadState('domcontentloaded');

  await page.getByPlaceholder("johndoe@email.com").fill("rohith+pfaadmin@coreaiconsulting.com");
  await page.locator("input[type='password']").fill("test1234");
  await page.getByRole('button',{name:'Sign In'}).click();

  await page.getByRole("button", { name: "Skip for Now" }).click();

  await page.getByText('Underwriting').click();

  await page.waitForLoadState("domcontentloaded");

  await page.getByPlaceholder("Search applicants...").fill("Test User Trucking Service");

  const firstTable = page.locator("table.w-full").first();

  const checkFirstRow = await firstTable.locator("tbody tr td");

  await checkFirstRow.nth(0).locator("button[role='checkbox']").click();

  const fetchStatus = await checkFirstRow.nth(3).locator("div").textContent();
  console.log("Company Status: "+ fetchStatus);

  await expect(fetchStatus).toBe("In Progress");

  await checkFirstRow.nth(1).locator("div div").first().click();

  await page.getByRole('button',{name:'Open Review',exact:true}).click();

  const deleteBtn =  page.locator("button.text-muted-foreground").last();
  if(deleteBtn.isVisible()){
    await deleteBtn.click();
  }


  

  const [chooseFile] = await Promise.all([
  page.waitForEvent('filechooser'),
  page.getByRole('button',{name:'Upload'}).first().click()
  ]);

  await chooseFile.setFiles("C:/Users/rohit/Downloads/Test_Broker_Carrier_Agreement.pdf");

  await expect(page.getByText("Select all")).toBeVisible();

  /* This below code is to delete uploaded File 

  // await page.locator("button.text-muted-foreground").last().click();

  */

  //Download File

  await page.locator("button[data-state='unchecked']").last().click();

  await expect(page.getByRole('button',{name:'Download Selected ('})).toBeVisible();

  const downloadPromiseFile = page.waitForEvent('download');

  await page.getByRole('button',{name:'Download Selected ('}).click();

  const downloadFile = await downloadPromiseFile;

  await downloadFile.saveAs("C:\\Users\\rohit\\Downloads\\"+ downloadFile.suggestedFilename());

  console.log("Downloaded successfully");


  // const deleteBtn =  page.locator("button.text-muted-foreground").last();

  if(deleteBtn.isVisible()){
    await deleteBtn.click();
  }



  await page.pause();

  await page.close();




});


test.only("Validate Underwriting sTatus In progress", async({browser})=>{

  const context = await browser.newContext();

  await context.grantPermissions(['notifications'],{
    origin:"https://dev.suretyforce.com/login"
  });

  const page = await context.newPage();

  await page.goto("https://dev.suretyforce.com/login");

  await page.waitForLoadState('domcontentloaded');

  await page.getByPlaceholder("johndoe@email.com").fill("rohith+pfaadmin@coreaiconsulting.com");
  await page.locator("input[type='password']").fill("test1234");
  await page.getByRole('button',{name:'Sign In'}).click();

  await page.getByRole("button", { name: "Skip for Now" }).click();

  await page.getByText('Underwriting').click();

  await page.waitForLoadState("domcontentloaded");

  await page.getByPlaceholder("Search applicants...").fill("Test User Trucking Service");

  const firstTable = page.locator("table.w-full").first();

  const checkFirstRow = await firstTable.locator("tbody tr td");

  await checkFirstRow.nth(0).locator("button[role='checkbox']").click();

  const fetchStatus = await checkFirstRow.nth(3).locator("div").textContent();
  console.log("Company Status: "+ fetchStatus);

  await expect(fetchStatus).toBe("In Progress");

  await checkFirstRow.nth(1).locator("div div").first().click();

  await page.getByRole('button',{name:'Open Review',exact:true}).click();

});