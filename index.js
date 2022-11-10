const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

async function getUrlData(siteUrl) {
    try {
        const { data } = await axios({
                method: "GET",
                url: siteUrl
            })
            // console.log(data)

        const $ = cheerio.load(data)
            // console.log($)
        const rows = "#content-center > div > div";

        $(rows).each((parentIndex, parentElem) => {
            console.log(parentIndex)
            $(parentElem).children().each((childIdx, childElem) => {
                const rowData = $(childElem).text()
                console.log(rowData)
            })
        })
    } catch (error) {

    }
}

getUrlData('https://livescores.com')