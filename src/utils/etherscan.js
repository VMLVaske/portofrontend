import axios from 'axios';

var add = "0xb66284947F9A35bD9FA893D444F19033FeBdA4A1"
var baseUri = "https://api.etherscan.io/api"
let key = "4HiPclIQOj7CwyXwTKw1sz5ylErFTlRwiFkK5WtBC1JgLntW1"

export default async function getAddressData() {
    const uri = `${baseUri}`

    const params = {
        module: account,
        action: txlist,
        address: add,
        startblock: 0,
        endblock: 99999999,
        sort: asc,
        apikey: process.env.ETHERSCAN_API_KEY
    }

    const response = await axios.get(uri, { params })

    console.log("inside etherscan")
    console.log("this is data: ", response.data)

    return response.data;
}
