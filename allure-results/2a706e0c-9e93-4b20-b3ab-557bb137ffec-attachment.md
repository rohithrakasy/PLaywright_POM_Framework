# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CrossBrowserAllureReportTest.spec.js >> Validate CrossBrowser and Allure Reporting
- Location: tests\CrossBrowserAllureReportTest.spec.js:3:5

# Error details

```
ReferenceError: expect is not defined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e6]:
          - img [ref=e8]
          - generic [ref=e10]: SuretyForce
        - generic [ref=e12]:
          - img [ref=e13]
          - searchbox "Search by name or ID…" [ref=e16]
          - img [ref=e18]
        - button "58" [ref=e22] [cursor=pointer]:
          - img
          - generic [ref=e23]: "58"
    - generic [ref=e24]:
      - complementary [ref=e25]:
        - generic [ref=e26]:
          - navigation [ref=e27]:
            - link "Home" [ref=e28] [cursor=pointer]:
              - /url: /dashboard/home
              - img [ref=e29]
              - text: Home
            - generic [ref=e32]:
              - heading "Business Operations" [level=3] [ref=e33]
              - generic [ref=e34]:
                - link "Bonds" [ref=e35] [cursor=pointer]:
                  - /url: /dashboard/bonds
                  - img [ref=e36]
                  - text: Bonds
                - link "Underwriting" [ref=e42] [cursor=pointer]:
                  - /url: /dashboard/underwriting
                  - img [ref=e43]
                  - text: Underwriting
                - link "Trust" [ref=e48] [cursor=pointer]:
                  - /url: /dashboard/trust
                  - img [ref=e49]
                  - text: Trust
                - link "Claims" [ref=e51] [cursor=pointer]:
                  - /url: /dashboard/claims
                  - img [ref=e52]
                  - text: Claims
                - link "Insurance" [ref=e58] [cursor=pointer]:
                  - /url: /dashboard/insurance
                  - img [ref=e59]
                  - text: Insurance
                - link "Commercial Surety" [ref=e63] [cursor=pointer]:
                  - /url: /dashboard/surety
                  - img [ref=e64]
                  - text: Commercial Surety
            - generic [ref=e72]:
              - heading "Data" [level=3] [ref=e73]
              - generic [ref=e74]:
                - link "Companies" [ref=e75] [cursor=pointer]:
                  - /url: /dashboard/brokers
                  - img [ref=e76]
                  - text: Companies
                - link "People" [ref=e81] [cursor=pointer]:
                  - /url: /dashboard/people
                  - img [ref=e82]
                  - text: People
                - link "Tasks" [ref=e86] [cursor=pointer]:
                  - /url: /dashboard/tasks
                  - img [ref=e87]
                  - text: Tasks
                - link "Fraud Alerts" [ref=e90] [cursor=pointer]:
                  - /url: /dashboard/logs/fraud
                  - img [ref=e91]
                  - text: Fraud Alerts
                - link "Campaigns" [ref=e95] [cursor=pointer]:
                  - /url: /dashboard/campaigns
                  - img [ref=e96]
                  - text: Campaigns
                - link "Segments" [ref=e99] [cursor=pointer]:
                  - /url: /dashboard/segments
                  - img [ref=e100]
                  - text: Segments
                - link "Reports" [ref=e104] [cursor=pointer]:
                  - /url: /dashboard/reports
                  - img [ref=e105]
                  - text: Reports
                - link "Audit" [ref=e109] [cursor=pointer]:
                  - /url: /dashboard/logs
                  - img [ref=e110]
                  - text: Audit
          - button "R Rohith K Admin" [ref=e116] [cursor=pointer]:
            - generic [ref=e118]: R
            - generic [ref=e119]:
              - paragraph [ref=e120]: Rohith K
              - paragraph [ref=e121]: Admin
            - img
      - main [ref=e122]:
        - generic [ref=e124]:
          - generic [ref=e125]:
            - generic [ref=e126]:
              - heading "Underwriting Overview" [level=1] [ref=e127]
              - paragraph [ref=e128]: Review and process customer applications
            - generic [ref=e129]:
              - link "View All Applications" [ref=e130] [cursor=pointer]:
                - /url: /dashboard/underwriting/applications
              - link "Review Pending" [ref=e131] [cursor=pointer]:
                - /url: /dashboard/underwriting/applications?filter=pending
          - generic [ref=e132]:
            - tablist [ref=e133]:
              - tab "Overview" [selected] [ref=e134] [cursor=pointer]
              - tab "Tasks" [ref=e135] [cursor=pointer]
            - tabpanel "Overview" [ref=e136]:
              - generic [ref=e137]:
                - generic [ref=e140]:
                  - generic [ref=e141]:
                    - paragraph [ref=e142]: Total Applications
                    - paragraph [ref=e143]: "46"
                  - img [ref=e145]
                - generic [ref=e150]:
                  - generic [ref=e151]:
                    - generic [ref=e152]:
                      - paragraph [ref=e153]: Pending / In Progress
                      - paragraph [ref=e154]: "1"
                    - img [ref=e156]
                  - generic [ref=e159]:
                    - img [ref=e160]
                    - generic [ref=e164]: 20 overdue (7+ days)
                - generic [ref=e167]:
                  - generic [ref=e168]:
                    - paragraph [ref=e169]: Approved
                    - paragraph [ref=e170]: "19"
                  - img [ref=e172]
                - generic [ref=e177]:
                  - generic [ref=e178]:
                    - paragraph [ref=e179]: Denied
                    - paragraph [ref=e180]: "1"
                  - img [ref=e182]
              - generic [ref=e186]:
                - generic [ref=e187]:
                  - generic [ref=e188]:
                    - generic [ref=e189]: Workload Distribution
                    - generic [ref=e190]: Applications by stage
                  - generic [ref=e192]:
                    - generic [ref=e194]:
                      - generic [ref=e195]: Pending
                      - generic [ref=e196]: "0"
                    - generic [ref=e199]:
                      - generic [ref=e200]: In Progress
                      - generic [ref=e201]: "1"
                    - generic [ref=e205]:
                      - generic [ref=e206]: Approved / Approved w/ Conditions
                      - generic [ref=e207]: "19"
                    - generic [ref=e211]:
                      - generic [ref=e212]: Submitted to FMCSA
                      - generic [ref=e213]: "13"
                    - generic [ref=e217]:
                      - generic [ref=e218]: Denied
                      - generic [ref=e219]: "1"
                - generic [ref=e222]:
                  - generic [ref=e223]:
                    - generic [ref=e224]: Quick Actions
                    - generic [ref=e225]: Common underwriting tasks
                  - generic [ref=e227]:
                    - link "Pending Review Review applications awaiting decision" [ref=e228] [cursor=pointer]:
                      - /url: /dashboard/underwriting/pending
                      - generic [ref=e229]:
                        - img [ref=e231]
                        - generic [ref=e234]:
                          - heading "Pending Review" [level=3] [ref=e235]
                          - paragraph [ref=e236]: Review applications awaiting decision
                    - link "Overdue Items Applications past review deadline" [ref=e237] [cursor=pointer]:
                      - /url: /dashboard/underwriting/applications?filter=overdue
                      - generic [ref=e238]:
                        - img [ref=e240]
                        - generic [ref=e244]:
                          - heading "Overdue Items" [level=3] [ref=e245]
                          - paragraph [ref=e246]: Applications past review deadline
                    - generic [ref=e247] [cursor=pointer]:
                      - img [ref=e249]
                      - generic [ref=e253]:
                        - heading "Applications Waiting for Signatures" [level=3] [ref=e254]
                        - paragraph [ref=e255]: Track signature completion status
                    - generic [ref=e256] [cursor=pointer]:
                      - img [ref=e258]
                      - generic [ref=e261]:
                        - heading "Applications Submitted to FMCSA" [level=3] [ref=e262]
                        - paragraph [ref=e263]: Check on bond status while FMCSA processes filing
              - generic [ref=e264]:
                - generic [ref=e266] [cursor=pointer]:
                  - generic [ref=e267]:
                    - generic [ref=e268]: Bond Applicants in Underwriting (1)
                    - paragraph [ref=e269]: Applications currently being processed by underwriting team
                  - generic [ref=e270]:
                    - generic [ref=e271]:
                      - generic [ref=e272]: Showing 1-1 of 1
                      - combobox [ref=e273]:
                        - generic: "10"
                        - img [ref=e274]
                    - img [ref=e276]
                - generic [ref=e279]:
                  - generic [ref=e280]:
                    - generic [ref=e281]:
                      - img [ref=e282]
                      - textbox "Search applicants..." [ref=e285]: Test User Trucking Service
                    - generic [ref=e286]:
                      - button "All" [ref=e287] [cursor=pointer]
                      - button "Pending" [ref=e288] [cursor=pointer]
                      - button "In Progress" [ref=e289] [cursor=pointer]
                      - button "Approved" [ref=e290] [cursor=pointer]
                      - button "Approved w/ Conditions" [ref=e291] [cursor=pointer]
                      - button "Denied" [ref=e292] [cursor=pointer]
                  - table [ref=e294]:
                    - rowgroup [ref=e295]:
                      - row "Company Contact Status Days in Queue Payment Conditions" [ref=e296]:
                        - columnheader [ref=e297]:
                          - checkbox [checked] [ref=e298] [cursor=pointer]:
                            - generic:
                              - img
                        - columnheader "Company" [ref=e299] [cursor=pointer]:
                          - generic [ref=e300]:
                            - generic [ref=e301]: Company
                            - img [ref=e302]
                        - columnheader "Contact" [ref=e307]
                        - columnheader "Status" [ref=e308] [cursor=pointer]:
                          - generic [ref=e309]:
                            - generic [ref=e310]: Status
                            - img [ref=e311]
                        - columnheader "Days in Queue" [ref=e316] [cursor=pointer]:
                          - generic [ref=e317]:
                            - generic [ref=e318]: Days in Queue
                            - img [ref=e319]
                        - columnheader "Payment" [ref=e324]
                        - columnheader "Conditions" [ref=e325]
                        - columnheader [ref=e326]
                    - rowgroup [ref=e327]:
                      - row "Test User Trucking Service a77578d1 Test User In Progress 6 days Unpaid None" [ref=e328]:
                        - cell [ref=e329]:
                          - checkbox [checked] [active] [ref=e330] [cursor=pointer]:
                            - generic:
                              - img
                        - cell "Test User Trucking Service a77578d1" [ref=e331]:
                          - generic [ref=e332]:
                            - generic [ref=e333] [cursor=pointer]: Test User Trucking Service
                            - button "a77578d1" [ref=e335] [cursor=pointer]
                        - cell "Test User" [ref=e336]:
                          - paragraph [ref=e337]: Test User
                        - cell "In Progress" [ref=e338]:
                          - generic [ref=e339]: In Progress
                        - cell "6 days" [ref=e340]:
                          - generic [ref=e341]: 6 days
                        - cell "Unpaid" [ref=e342]:
                          - generic [ref=e343]: Unpaid
                        - cell "None" [ref=e344]
                        - cell [ref=e345]:
                          - button [ref=e346] [cursor=pointer]:
                            - img
              - generic [ref=e347]:
                - generic [ref=e349] [cursor=pointer]:
                  - generic [ref=e350]:
                    - generic [ref=e351]: Applications Waiting for Signatures (44)
                    - paragraph [ref=e352]: Applications with decisions made and signatures sent, awaiting completion
                  - generic [ref=e353]:
                    - generic [ref=e354]:
                      - generic [ref=e355]: Showing 1-10 of 44
                      - combobox [ref=e356]:
                        - generic: "10"
                        - img [ref=e357]
                    - img [ref=e359]
                - generic [ref=e362]:
                  - table [ref=e364]:
                    - rowgroup [ref=e365]:
                      - row "Company Contact Status Conditions Days Since Created" [ref=e366]:
                        - columnheader "Company" [ref=e367]:
                          - generic [ref=e369]: Company
                        - columnheader "Contact" [ref=e370]
                        - columnheader "Status" [ref=e371]
                        - columnheader "Conditions" [ref=e372]
                        - columnheader "Days Since Created" [ref=e373] [cursor=pointer]:
                          - generic [ref=e374]:
                            - generic [ref=e375]: Days Since Created
                            - img [ref=e376]
                        - columnheader [ref=e381]
                    - rowgroup [ref=e382]:
                      - row "Acme Freight Services 33fdd639 Sarah Garcia Approved None 132 days" [ref=e383] [cursor=pointer]:
                        - cell "Acme Freight Services 33fdd639" [ref=e384]:
                          - generic [ref=e385]:
                            - generic [ref=e386]: Acme Freight Services
                            - button "33fdd639" [ref=e388]
                        - cell "Sarah Garcia" [ref=e389]:
                          - paragraph [ref=e390]: Sarah Garcia
                        - cell "Approved" [ref=e391]:
                          - generic [ref=e392]: Approved
                        - cell "None" [ref=e393]
                        - cell "132 days" [ref=e394]:
                          - generic [ref=e395]: 132 days
                        - cell [ref=e396]:
                          - link [ref=e397]:
                            - /url: /dashboard/underwriting/applications/33fdd639-73c4-406b-b68a-d03a37da834c
                            - img
                      - row "Acme Freight Services a551bbaa Sarah Garcia Approved w/ Conditions 1 condition 131 days" [ref=e398] [cursor=pointer]:
                        - cell "Acme Freight Services a551bbaa" [ref=e399]:
                          - generic [ref=e400]:
                            - generic [ref=e401]: Acme Freight Services
                            - button "a551bbaa" [ref=e403]
                        - cell "Sarah Garcia" [ref=e404]:
                          - paragraph [ref=e405]: Sarah Garcia
                        - cell "Approved w/ Conditions" [ref=e406]:
                          - generic [ref=e407]: Approved w/ Conditions
                        - cell "1 condition" [ref=e408]:
                          - generic [ref=e409]: 1 condition
                        - cell "131 days" [ref=e410]:
                          - generic [ref=e411]: 131 days
                        - cell [ref=e412]:
                          - link [ref=e413]:
                            - /url: /dashboard/underwriting/applications/a551bbaa-5409-44ff-ac92-60538548cca3
                            - img
                      - row "Advanced Delivery Solutions 9e9c1d13 Jessica Garcia Approved w/ Conditions 1 condition 130 days" [ref=e414] [cursor=pointer]:
                        - cell "Advanced Delivery Solutions 9e9c1d13" [ref=e415]:
                          - generic [ref=e416]:
                            - generic [ref=e417]: Advanced Delivery Solutions
                            - button "9e9c1d13" [ref=e419]
                        - cell "Jessica Garcia" [ref=e420]:
                          - paragraph [ref=e421]: Jessica Garcia
                        - cell "Approved w/ Conditions" [ref=e422]:
                          - generic [ref=e423]: Approved w/ Conditions
                        - cell "1 condition" [ref=e424]:
                          - generic [ref=e425]: 1 condition
                        - cell "130 days" [ref=e426]:
                          - generic [ref=e427]: 130 days
                        - cell [ref=e428]:
                          - link [ref=e429]:
                            - /url: /dashboard/underwriting/applications/9e9c1d13-7f6d-49df-b810-7eaf119bb46f
                            - img
                      - row "Advanced Delivery Solutions 6fb398e5 Jessica Garcia Approved w/ Conditions 1 condition 130 days" [ref=e430] [cursor=pointer]:
                        - cell "Advanced Delivery Solutions 6fb398e5" [ref=e431]:
                          - generic [ref=e432]:
                            - generic [ref=e433]: Advanced Delivery Solutions
                            - button "6fb398e5" [ref=e435]
                        - cell "Jessica Garcia" [ref=e436]:
                          - paragraph [ref=e437]: Jessica Garcia
                        - cell "Approved w/ Conditions" [ref=e438]:
                          - generic [ref=e439]: Approved w/ Conditions
                        - cell "1 condition" [ref=e440]:
                          - generic [ref=e441]: 1 condition
                        - cell "130 days" [ref=e442]:
                          - generic [ref=e443]: 130 days
                        - cell [ref=e444]:
                          - link [ref=e445]:
                            - /url: /dashboard/underwriting/applications/6fb398e5-1202-40d5-9769-ac6655245527
                            - img
                      - row "asfrawheaw 89cac158 qrtfgs sdbxc Approved w/ Conditions 1 condition 109 days" [ref=e446] [cursor=pointer]:
                        - cell "asfrawheaw 89cac158" [ref=e447]:
                          - generic [ref=e448]:
                            - generic [ref=e449]: asfrawheaw
                            - button "89cac158" [ref=e451]
                        - cell "qrtfgs sdbxc" [ref=e452]:
                          - paragraph [ref=e453]: qrtfgs sdbxc
                        - cell "Approved w/ Conditions" [ref=e454]:
                          - generic [ref=e455]: Approved w/ Conditions
                        - cell "1 condition" [ref=e456]:
                          - generic [ref=e457]: 1 condition
                        - cell "109 days" [ref=e458]:
                          - generic [ref=e459]: 109 days
                        - cell [ref=e460]:
                          - link [ref=e461]:
                            - /url: /dashboard/underwriting/applications/89cac158-e56d-45b1-ae43-5dfc487b0882
                            - img
                      - 'row "asdf hrtjft 743ad052 oaieuq `kssa Approved None 104 days" [ref=e462] [cursor=pointer]':
                        - cell "asdf hrtjft 743ad052" [ref=e463]:
                          - generic [ref=e464]:
                            - generic [ref=e465]: asdf hrtjft
                            - button "743ad052" [ref=e467]
                        - 'cell "oaieuq `kssa" [ref=e468]':
                          - paragraph [ref=e469]: "oaieuq `kssa"
                        - cell "Approved" [ref=e470]:
                          - generic [ref=e471]: Approved
                        - cell "None" [ref=e472]
                        - cell "104 days" [ref=e473]:
                          - generic [ref=e474]: 104 days
                        - cell [ref=e475]:
                          - link [ref=e476]:
                            - /url: /dashboard/underwriting/applications/743ad052-dcff-4ca4-a8ca-18032294364f
                            - img
                      - row "Lopez Transports 79708b3c Jose Lopez Approved None 102 days" [ref=e477] [cursor=pointer]:
                        - cell "Lopez Transports 79708b3c" [ref=e478]:
                          - generic [ref=e479]:
                            - generic [ref=e480]: Lopez Transports
                            - button "79708b3c" [ref=e482]
                        - cell "Jose Lopez" [ref=e483]:
                          - paragraph [ref=e484]: Jose Lopez
                        - cell "Approved" [ref=e485]:
                          - generic [ref=e486]: Approved
                        - cell "None" [ref=e487]
                        - cell "102 days" [ref=e488]:
                          - generic [ref=e489]: 102 days
                        - cell [ref=e490]:
                          - link [ref=e491]:
                            - /url: /dashboard/underwriting/applications/79708b3c-2958-4037-8d1b-02057ad0ff8b
                            - img
                      - row "Franks moving services d73b3d1c Frank Meyers Approved None 101 days" [ref=e492] [cursor=pointer]:
                        - cell "Franks moving services d73b3d1c" [ref=e493]:
                          - generic [ref=e494]:
                            - generic [ref=e495]: Franks moving services
                            - button "d73b3d1c" [ref=e497]
                        - cell "Frank Meyers" [ref=e498]:
                          - paragraph [ref=e499]: Frank Meyers
                        - cell "Approved" [ref=e500]:
                          - generic [ref=e501]: Approved
                        - cell "None" [ref=e502]
                        - cell "101 days" [ref=e503]:
                          - generic [ref=e504]: 101 days
                        - cell [ref=e505]:
                          - link [ref=e506]:
                            - /url: /dashboard/underwriting/applications/d73b3d1c-100a-4f2a-a562-ad50098c6a08
                            - img
                      - row "Bobs Trucking 30999767 Bob Smiths Approved None 66 days" [ref=e507] [cursor=pointer]:
                        - cell "Bobs Trucking 30999767" [ref=e508]:
                          - generic [ref=e509]:
                            - generic [ref=e510]: Bobs Trucking
                            - button "30999767" [ref=e512]
                        - cell "Bob Smiths" [ref=e513]:
                          - paragraph [ref=e514]: Bob Smiths
                        - cell "Approved" [ref=e515]:
                          - generic [ref=e516]: Approved
                        - cell "None" [ref=e517]
                        - cell "66 days" [ref=e518]:
                          - generic [ref=e519]: 66 days
                        - cell [ref=e520]:
                          - link [ref=e521]:
                            - /url: /dashboard/underwriting/applications/30999767-fe52-41e1-952e-6780339fa131
                            - img
                      - row "bob bob trucking 7d611994 Mickey Bob Approved None 65 days" [ref=e522] [cursor=pointer]:
                        - cell "bob bob trucking 7d611994" [ref=e523]:
                          - generic [ref=e524]:
                            - generic [ref=e525]: bob bob trucking
                            - button "7d611994" [ref=e527]
                        - cell "Mickey Bob" [ref=e528]:
                          - paragraph [ref=e529]: Mickey Bob
                        - cell "Approved" [ref=e530]:
                          - generic [ref=e531]: Approved
                        - cell "None" [ref=e532]
                        - cell "65 days" [ref=e533]:
                          - generic [ref=e534]: 65 days
                        - cell [ref=e535]:
                          - link [ref=e536]:
                            - /url: /dashboard/underwriting/applications/7d611994-7239-4cd2-a4b5-35dfb4a2062a
                            - img
                  - generic [ref=e537]:
                    - generic [ref=e538]: Page 1 of 5
                    - generic [ref=e539]:
                      - button "Previous" [disabled]:
                        - img
                        - text: Previous
                      - button "Next" [ref=e540] [cursor=pointer]:
                        - text: Next
                        - img
              - generic [ref=e541]:
                - generic [ref=e543] [cursor=pointer]:
                  - generic [ref=e544]:
                    - generic [ref=e545]: Applications Submitted to FMCSA (13)
                    - paragraph [ref=e546]: Filed with FMCSA and not yet activated — check that the bond status matches what's expected
                  - generic [ref=e547]:
                    - generic [ref=e548]:
                      - generic [ref=e549]: Showing 1-10 of 13
                      - combobox [ref=e550]:
                        - generic: "10"
                        - img [ref=e551]
                    - img [ref=e553]
                - generic [ref=e556]:
                  - table [ref=e558]:
                    - rowgroup [ref=e559]:
                      - row "Company Contact Status Days in Queue Payment Conditions" [ref=e560]:
                        - columnheader "Company" [ref=e561]
                        - columnheader "Contact" [ref=e562]
                        - columnheader "Status" [ref=e563]
                        - columnheader "Days in Queue" [ref=e564] [cursor=pointer]:
                          - generic [ref=e565]:
                            - generic [ref=e566]: Days in Queue
                            - img [ref=e567]
                        - columnheader "Payment" [ref=e572]
                        - columnheader "Conditions" [ref=e573]
                        - columnheader [ref=e574]
                    - rowgroup [ref=e575]:
                      - row "The Science Dude 3d50bb1c Will Nye SUBMITTED TO FMCSA 55 days Paid None" [ref=e576] [cursor=pointer]:
                        - cell "The Science Dude 3d50bb1c" [ref=e577]:
                          - generic [ref=e578]:
                            - generic [ref=e579]: The Science Dude
                            - button "3d50bb1c" [ref=e581]
                        - cell "Will Nye" [ref=e582]:
                          - paragraph [ref=e583]: Will Nye
                        - cell "SUBMITTED TO FMCSA" [ref=e584]:
                          - generic [ref=e585]: SUBMITTED TO FMCSA
                        - cell "55 days" [ref=e586]:
                          - generic [ref=e587]: 55 days
                        - cell "Paid" [ref=e588]:
                          - generic [ref=e589]: Paid
                        - cell "None" [ref=e590]
                        - cell [ref=e591]:
                          - button [ref=e592]:
                            - img
                      - row "lokithor llc 0e805e1f loki thor PENDING 62 days Paid None" [ref=e593] [cursor=pointer]:
                        - cell "lokithor llc 0e805e1f" [ref=e594]:
                          - generic [ref=e595]:
                            - generic [ref=e596]: lokithor llc
                            - button "0e805e1f" [ref=e598]
                        - cell "loki thor" [ref=e599]:
                          - paragraph [ref=e600]: loki thor
                        - cell "PENDING" [ref=e601]:
                          - generic [ref=e602]: PENDING
                        - cell "62 days" [ref=e603]:
                          - generic [ref=e604]: 62 days
                        - cell "Paid" [ref=e605]:
                          - generic [ref=e606]: Paid
                        - cell "None" [ref=e607]
                        - cell [ref=e608]:
                          - button [ref=e609]:
                            - img
                      - row "AddCheckTwo LLC 891de6a9 AddressCeheck Two PENDING 62 days Paid None" [ref=e610] [cursor=pointer]:
                        - cell "AddCheckTwo LLC 891de6a9" [ref=e611]:
                          - generic [ref=e612]:
                            - generic [ref=e613]: AddCheckTwo LLC
                            - button "891de6a9" [ref=e615]
                        - cell "AddressCeheck Two" [ref=e616]:
                          - paragraph [ref=e617]: AddressCeheck Two
                        - cell "PENDING" [ref=e618]:
                          - generic [ref=e619]: PENDING
                        - cell "62 days" [ref=e620]:
                          - generic [ref=e621]: 62 days
                        - cell "Paid" [ref=e622]:
                          - generic [ref=e623]: Paid
                        - cell "None" [ref=e624]
                        - cell [ref=e625]:
                          - button [ref=e626]:
                            - img
                      - row "Lucky 3 Company dd09d107 ThirdTimes Acharm PENDING 62 days Paid None" [ref=e627] [cursor=pointer]:
                        - cell "Lucky 3 Company dd09d107" [ref=e628]:
                          - generic [ref=e629]:
                            - generic [ref=e630]: Lucky 3 Company
                            - button "dd09d107" [ref=e632]
                        - cell "ThirdTimes Acharm" [ref=e633]:
                          - paragraph [ref=e634]: ThirdTimes Acharm
                        - cell "PENDING" [ref=e635]:
                          - generic [ref=e636]: PENDING
                        - cell "62 days" [ref=e637]:
                          - generic [ref=e638]: 62 days
                        - cell "Paid" [ref=e639]:
                          - generic [ref=e640]: Paid
                        - cell "None" [ref=e641]
                        - cell [ref=e642]:
                          - button [ref=e643]:
                            - img
                      - row "Hoopa LLC 8f79f669 Fred Hoopa PENDING 65 days Unpaid None" [ref=e644] [cursor=pointer]:
                        - cell "Hoopa LLC 8f79f669" [ref=e645]:
                          - generic [ref=e646]:
                            - generic [ref=e647]: Hoopa LLC
                            - button "8f79f669" [ref=e649]
                        - cell "Fred Hoopa" [ref=e650]:
                          - paragraph [ref=e651]: Fred Hoopa
                        - cell "PENDING" [ref=e652]:
                          - generic [ref=e653]: PENDING
                        - cell "65 days" [ref=e654]:
                          - generic [ref=e655]: 65 days
                        - cell "Unpaid" [ref=e656]:
                          - generic [ref=e657]: Unpaid
                        - cell "None" [ref=e658]
                        - cell [ref=e659]:
                          - button [ref=e660]:
                            - img
                      - row "Samuel Services f5b2c348 Samuel Harhal PENDING 65 days Unpaid None" [ref=e661] [cursor=pointer]:
                        - cell "Samuel Services f5b2c348" [ref=e662]:
                          - generic [ref=e663]:
                            - generic [ref=e664]: Samuel Services
                            - button "f5b2c348" [ref=e666]
                        - cell "Samuel Harhal" [ref=e667]:
                          - paragraph [ref=e668]: Samuel Harhal
                        - cell "PENDING" [ref=e669]:
                          - generic [ref=e670]: PENDING
                        - cell "65 days" [ref=e671]:
                          - generic [ref=e672]: 65 days
                        - cell "Unpaid" [ref=e673]:
                          - generic [ref=e674]: Unpaid
                        - cell "None" [ref=e675]
                        - cell [ref=e676]:
                          - button [ref=e677]:
                            - img
                      - row "Yes You LLC 50e3bfb6 Hugh Me PENDING 65 days Unpaid None" [ref=e678] [cursor=pointer]:
                        - cell "Yes You LLC 50e3bfb6" [ref=e679]:
                          - generic [ref=e680]:
                            - generic [ref=e681]: Yes You LLC
                            - button "50e3bfb6" [ref=e683]
                        - cell "Hugh Me" [ref=e684]:
                          - paragraph [ref=e685]: Hugh Me
                        - cell "PENDING" [ref=e686]:
                          - generic [ref=e687]: PENDING
                        - cell "65 days" [ref=e688]:
                          - generic [ref=e689]: 65 days
                        - cell "Unpaid" [ref=e690]:
                          - generic [ref=e691]: Unpaid
                        - cell "None" [ref=e692]
                        - cell [ref=e693]:
                          - button [ref=e694]:
                            - img
                      - row "Bobs Trucking 30999767 Bob Smiths PENDING 66 days Unpaid None" [ref=e695] [cursor=pointer]:
                        - cell "Bobs Trucking 30999767" [ref=e696]:
                          - generic [ref=e697]:
                            - generic [ref=e698]: Bobs Trucking
                            - button "30999767" [ref=e700]
                        - cell "Bob Smiths" [ref=e701]:
                          - paragraph [ref=e702]: Bob Smiths
                        - cell "PENDING" [ref=e703]:
                          - generic [ref=e704]: PENDING
                        - cell "66 days" [ref=e705]:
                          - generic [ref=e706]: 66 days
                        - cell "Unpaid" [ref=e707]:
                          - generic [ref=e708]: Unpaid
                        - cell "None" [ref=e709]
                        - cell [ref=e710]:
                          - button [ref=e711]:
                            - img
                      - row "Franks moving services d73b3d1c Frank Meyers PENDING 101 days Unpaid None" [ref=e712] [cursor=pointer]:
                        - cell "Franks moving services d73b3d1c" [ref=e713]:
                          - generic [ref=e714]:
                            - generic [ref=e715]: Franks moving services
                            - button "d73b3d1c" [ref=e717]
                        - cell "Frank Meyers" [ref=e718]:
                          - paragraph [ref=e719]: Frank Meyers
                        - cell "PENDING" [ref=e720]:
                          - generic [ref=e721]: PENDING
                        - cell "101 days" [ref=e722]:
                          - generic [ref=e723]: 101 days
                        - cell "Unpaid" [ref=e724]:
                          - generic [ref=e725]: Unpaid
                        - cell "None" [ref=e726]
                        - cell [ref=e727]:
                          - button [ref=e728]:
                            - img
                      - row "Lopez Transports 79708b3c Jose Lopez PENDING 102 days Unpaid None" [ref=e729] [cursor=pointer]:
                        - cell "Lopez Transports 79708b3c" [ref=e730]:
                          - generic [ref=e731]:
                            - generic [ref=e732]: Lopez Transports
                            - button "79708b3c" [ref=e734]
                        - cell "Jose Lopez" [ref=e735]:
                          - paragraph [ref=e736]: Jose Lopez
                        - cell "PENDING" [ref=e737]:
                          - generic [ref=e738]: PENDING
                        - cell "102 days" [ref=e739]:
                          - generic [ref=e740]: 102 days
                        - cell "Unpaid" [ref=e741]:
                          - generic [ref=e742]: Unpaid
                        - cell "None" [ref=e743]
                        - cell [ref=e744]:
                          - button [ref=e745]:
                            - img
                  - generic [ref=e746]:
                    - generic [ref=e747]: Page 1 of 2
                    - generic [ref=e748]:
                      - button "Previous" [disabled]:
                        - img
                        - text: Previous
                      - button "Next" [ref=e749] [cursor=pointer]:
                        - text: Next
                        - img
              - generic [ref=e750]:
                - generic [ref=e752] [cursor=pointer]:
                  - generic [ref=e753]:
                    - generic [ref=e754]: Trusts In Underwriting (0)
                    - paragraph [ref=e755]: Open reinstatement, MC transfer, and principal change cases pending underwriting review
                  - generic [ref=e756]:
                    - generic [ref=e757]:
                      - generic [ref=e758]: Showing 1–0 of 0
                      - combobox [ref=e759]:
                        - generic: "10"
                        - img [ref=e760]
                    - img [ref=e762]
                - paragraph [ref=e767]: No trust cases currently in underwriting.
  - region "Notifications (F8)":
    - list
  - region "Notifications (F8)":
    - list
  - region "Notifications alt+T"
  - alert [ref=e768]
```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | 
  3  | test("Validate CrossBrowser and Allure Reporting", async ({ browser }) => {
  4  |   const context = await browser.newContext();
  5  | 
  6  |   await context.grantPermissions(["notifications"], {
  7  |     origin: "https://dev.suretyforce.com/login",
  8  |   });
  9  | 
  10 |   const page = await context.newPage();
  11 | 
  12 |   await test.step("Navigate to PFA Main Application", async () => {
  13 |     await page.goto("https://dev.suretyforce.com/login");
  14 | 
  15 |     await page.waitForLoadState("domcontentloaded");
  16 | 
  17 |     await page
  18 |       .getByPlaceholder("johndoe@email.com")
  19 |       .fill("rohith+pfaadmin@coreaiconsulting.com");
  20 |     await page.locator("input[type='password']").fill("test1234");
  21 |     await page.getByRole("button", { name: "Sign In" }).click();
  22 | 
  23 |     await page.getByRole("button", { name: "Skip for Now" }).click();
  24 |   });
  25 | 
  26 |   await test.step("Validate Underwriting Module", async () => {
  27 |     await page.getByText("Underwriting").click();
  28 | 
  29 |     await page.waitForLoadState("domcontentloaded");
  30 |   });
  31 | 
  32 |   await test.step("Perform Validation if Documents are Visible and Delete if it is", async () => {
  33 |     await page
  34 |       .getByPlaceholder("Search applicants...")
  35 |       .fill("Test User Trucking Service");
  36 | 
  37 |     const firstTable = page.locator("table.w-full").first();
  38 | 
  39 |     const checkFirstRow = await firstTable.locator("tbody tr td");
  40 | 
  41 |     await checkFirstRow.nth(0).locator("button[role='checkbox']").click();
  42 | 
  43 |     const fetchStatus = await checkFirstRow.nth(3).locator("div").textContent();
  44 |     console.log("Company Status: " + fetchStatus);
  45 | 
> 46 |     await expect(fetchStatus).toBe("In Progress");
     |     ^ ReferenceError: expect is not defined
  47 | 
  48 |     await checkFirstRow.nth(1).locator("div div").first().click();
  49 | 
  50 |     await page
  51 |       .getByRole("button", { name: "Open Review", exact: true })
  52 |       .click();
  53 | 
  54 |     const deleteBtn = page.locator("button.text-muted-foreground").last();
  55 |     if (deleteBtn.isVisible()) {
  56 |       await deleteBtn.click();
  57 |     }
  58 |   });
  59 | });
  60 | 
```