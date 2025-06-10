import fileUrl from 'file-url'
import puppeteer from 'puppeteer'
;(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
  const page = await browser.newPage()
  await page.goto(fileUrl('index.html'))
  await page.pdf({ path: 'cv.pdf', preferCSSPageSize: true })
  await browser.close()
})()
