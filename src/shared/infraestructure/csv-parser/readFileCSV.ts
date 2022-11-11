import fs from 'node:fs'
import { parse } from 'csv-parse'

const csvData: Array<Array<string>> = []

export const readFileCSV = async (path: string) => {

    await readCSV(path)

    const parsedData: Array<Array<string>> = csvData.map((row) => {

        return parseCSV(row)
    })

    return CSVtoJSON(parsedData)
}

const CSVtoJSON = (csv: Array<Array<string>>) => {

    const result = []
    const headers = csv[0]


    for (let i = 1; i < csv.length; i++) {

        const obj: any = {}

        for (let j = 0; j < headers.length; j++) {

            let headerStr: string = headers[j]

            let valueStr: string = csv[i][j]

            if (headerStr && headerStr.includes('"')) {
                headerStr = headerStr.replace('"', '')
            }
            if (valueStr && valueStr.includes('"')) {
                valueStr = valueStr.replace('"', '')
            }

            obj[headerStr] = valueStr
        }

        result.push(obj)
    }

    return result
}

const readCSV = (path: string) => new Promise((resolve, reject) => {

    try {
        fs.createReadStream(path)
            .pipe(parse({ delimiter: '";', relaxQuotes: true, skip_empty_lines: true }))
            .on('data', function (row: Array<string>) {
                csvData.push(row)

            })
            .on('end', function () {
                resolve(path)
            })
    } catch (err) {
        reject(err)
    }
})

const parseCSV = (row: Array<string>) => {

    const newRow = row.map((value: any) => {
        if (value === 'NULL') return null

        return value
    })
    return newRow
}