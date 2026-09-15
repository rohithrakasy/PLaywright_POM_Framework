import {test} from '@playwright/test'

import {readExcel} from "../utils/excelReader.js";

test("Read Data from Excel ", async()=>{

    const testExcelData = readExcel("test-data/filtered_person_data.xlsx","Extracted Data");

    console.log(testExcelData[1]);
})