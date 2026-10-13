import { test, expect } from "@playwright/test";
import { url } from "node:inspector";

test.only("Approve Underwriting Pending Bond Application", async ({
  browser,
}) => {
  const context = await browser.newContext();

  await context.grantPermissions(["notifications"], {
    origin: "https://dev.suretyforce.com/login",
  });

  const page = await context.newPage();

  //Navigate to Login Dev Page
  await page.goto("https://dev.suretyforce.com/login");

  await page.waitForLoadState("domcontentloaded");

  //Sign In Page

  await page
    .getByPlaceholder("johndoe@email.com")
    .fill("rohith+pfaadmin@coreaiconsulting.com");
  await page.getByPlaceholder("••••••••").fill("test1234");

  const signInBtn = page.getByRole("button", { name: "Sign In", exact: true });

  await expect(signInBtn).toBeEnabled();

  await signInBtn.click();

  await page.getByRole("button", { name: "Skip for Now", exact: true }).click();

  await page.waitForLoadState("domcontentloaded");

  //Change to Dark Theme
  await page.locator("button[aria-haspopup='menu']").first().click();

  await page.getByText("Dark", { exact: true }).click();

  //Navigate To Underwriting Section
  await page.getByText("Underwriting", { exact: true }).click();
  await page.waitForURL((url) => url.href.includes("underwriting"));

  //Scroll To Bond Applicants in Underwriting
  await page
    .getByText("Bond Applicants in Underwriting")
    .scrollIntoViewIfNeeded();

//   //Click on Pending Filter
//   await page.getByRole('button',{name:"Pending"}).click();

  /* Delete This section if it is not used */
  //Search Filter
  await page
    .getByPlaceholder("Search applicants...")
    .fill("THOMAS Trucking Services");

  const underwritingTable = await page.locator("table tbody tr").first();

  const fetchCompanyName = await underwritingTable
    .locator("td")
    .nth(1)
    .locator("div div")
    .first()
    .textContent();
  const FetchStatus = await underwritingTable
    .locator("td")
    .nth(3)
    .locator("div")
    .textContent();

  console.log(
    `Pending state Underwriting Record with Company Name: ${fetchCompanyName} and its Status: ${FetchStatus}`,
  );

  // await expect(FetchStatus).toBe("Pending");

  //Open The Application
  await underwritingTable.locator("td").last().locator("button").click();
  await page.getByText("Review Application", { exact: true }).click();

  await page.waitForLoadState("domcontentloaded");

  // // Validate the status of the application is In Queue State
  const fetchState = await page.locator("div.inline-flex").first();

//   const fetchUnderwritingBeforeAssign = await fetchState.textContent();
//   console.log(`Underwriting State: ${fetchUnderwritingBeforeAssign}`);

//   await expect(fetchUnderwritingBeforeAssign).toBe("In Queue");

  //Assign a Representative for this underwriting Application
  await page.locator("button[data-state=closed] span span").last().click();
  await page.getByText("kumar Rohith").click();

  await page.waitForLoadState('domcontentloaded');

  //Start Investigation

  await expect(fetchState).toHaveText('In Review',{timeout:15_000});

  const fetchUnderwritingAfterAssign = await fetchState.textContent();
  console.log(`Underwriting State: ${fetchUnderwritingAfterAssign}`);

  await expect(fetchUnderwritingAfterAssign).toBe("In Review");

  await page.getByRole('button',{name: 'Start Underwriting',exact: true}).click();

  //Make Decision --
  await page.getByRole('button',{name:'Make Decision',exact:true}).click();

  const selectSection =  page.locator("select.w-full");

  await selectSection.first().selectOption({value:"approved"});
  await selectSection.last().selectOption({value: 'BMC-84'});

  const submitBtn = page.getByRole('button',{name:'Submit Decision',exact:true});

  await expect(submitBtn).toBeEnabled();

  await submitBtn.click();

  await page.waitForLoadState('networkidle');

  //After Approval
  await page.waitForLoadState("networkidle");
  const fetchUnderwritingAfterApproval = await fetchState.textContent();
  console.log(`Underwriting State: ${fetchUnderwritingAfterApproval}`);

  expect(fetchUnderwritingAfterApproval).toBe("APPROVED");

//   //Click on Send for Signatures
//   await page.getByRole("button", { name: "Send for Signatures" }).click();


//   const dialog = page.getByRole("dialog", {
//     name: "Send Documents for Signature",
//   });

//   await dialog.getByText("Underwriting", { exact: true }).click();
//   await dialog.getByText("Test BMC - 85", { exact: true }).click();

//   const signer2FullName = dialog.getByPlaceholder("Full name").nth(1);
//   const signer2Email = dialog.getByPlaceholder("email@example.com").nth(1);

//   // Wait for the dynamically loaded Signer 2 fields
//   await expect(signer2FullName).toBeVisible({ timeout: 15_000 });
//   await expect(signer2FullName).toBeEditable();

//   await signer2FullName.fill("Russ");

//   await expect(signer2Email).toBeVisible();
//   await expect(signer2Email).toBeEditable();
//   await signer2Email.fill("rohith+russ@coreaiconsulting.com");

//   const sendButton = dialog.getByRole("button", {
//     name: "Send for Signature",
//     exact: true,
//   });

//   await expect(sendButton).toBeEnabled({ timeout: 15_000 });
//   await sendButton.click();

  //Mark Payment Received
  const paymentBtn = page
    .getByRole("button", { name: "Mark Payment Received", exact: true });
  await paymentBtn.scrollIntoViewIfNeeded();  
  await paymentBtn.click();

  //Submit to FMCSA
  await page
    .getByRole("button", { name: "Submit to FMCSA", exact: true })
    .click();

  //Grant Authority
  await page
    .getByRole("button", { name: "Grant Authority", exact: true })
    .click();

  //Activate Account
  await page
    .getByRole("button", { name: "Activate Account", exact: true })
    .click();

  //Validate Underwriting Complete
  const successfulText = page.getByText(
    "Account activated. Underwriting complete.",
  );

  await expect(successfulText).toBeVisible({timeout:15_000});

  await page.pause();
});
