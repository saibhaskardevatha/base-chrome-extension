import fs from 'fs'
import path from 'path'
import readline from 'readline'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const prompt = (question) =>
  new Promise((resolve) => rl.question(question, resolve))

const packagePath = path.join(__dirname, 'package.json')
const manifestPath = path.join(__dirname, 'public', 'manifest.json')

async function main() {
  try {
    const extensionName = await prompt('Name of your Extension: ')

    const defaultDescription = `A Chrome extension named ${extensionName}`
    const description = await prompt('Short Description about your Extension: ')
    const finalDescription = description.trim() || defaultDescription

    if (fs.existsSync(packagePath)) {
      const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf-8'))
      packageData.name = extensionName.toLowerCase().replace(/\s+/g, '-')
      fs.writeFileSync(
        packagePath,
        JSON.stringify(packageData, null, 2),
        'utf-8',
      )
      console.log('\n ✅ Updated package.json')
    }

    if (fs.existsSync(manifestPath)) {
      const manifestData = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))
      manifestData.name = extensionName
      manifestData.description = finalDescription
      fs.writeFileSync(
        manifestPath,
        JSON.stringify(manifestData, null, 2),
        'utf-8',
      )
      console.log('\n ✅ Updated manifest.json')
    }

    console.log('\n🎉 Setup complete! Your Chrome Extension is ready.')
  } catch (error) {
    console.log(
      'Unable to update the name and description, please do it manually in package.json & public/manifest.json',
    )
  } finally {
    rl.close()
  }
}

main()
