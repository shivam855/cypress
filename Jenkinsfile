pipeline {
  agent any

  tools {
    nodejs "node-lts"  // name must match your Jenkins NodeJS tool config
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/shivam855/cypress.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm i'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npm run cy:chrome'
      }
    }

    stage('Publish Report') {
      steps {
        publishHTML(target: [
          reportDir: 'cypress/reports/html',
          reportFiles: 'index.html',
          reportName: 'Cypress HTML Report'
        ])
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
      archiveArtifacts artifacts: 'cypress/reports/html/videos/**/*.mp4', allowEmptyArchive: true
    publishHTML(target: [
      allowMissing: false,
      alwaysLinkToLastBuild: true,
      keepAll: true,
      reportDir: 'cypress/reports/html',
      reportFiles: 'index.html',
      reportName: 'Cypress Test Report'
    ])
  }
}

}
