pipeline {
  agent any
  stages {
    stage('Git checkout') {
      steps {
        git(url: 'https://github.com/MaTtiaa01/vite-boolfolio.git', branch: 'main')
      }
    }

    stage('open app') {
      steps {
        sh 'npm run dev'
      }
    }

  }
}