import path from 'path';
import fs from 'fs';

export default function saveData(data) {
  const fileName = 'quotes.json'
  const savePath = path.join(__dirname, '..', 'data', fileName)
  console.log(savePath)
  fs.writeFile(savePath, JSON.stringify(data), error => {
    if (error) throw error

    console.log('success!')
  })
}