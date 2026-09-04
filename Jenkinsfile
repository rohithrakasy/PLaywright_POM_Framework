pipeline{
    agent any
    tools{
        nodejs 'NodeJS-20'
    }
    stages{

        stage('Checkout'){
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies'){

            steps{
                bat 'npm ci'
            }
        }

        stage('Run Playwright Tests'){
            steps{
                bat 'npx playwright test hyrPrac.spec.js'
            }
        }
    }
}