const config = require("./../src/config/config");
const base_url = config.base_url;
const kharari = [
    {
        name: "AyurVaid Hospital",
        image:`${base_url}/image/hospital/1`,
        city: "Sasaram",
        address: "Lokhwandi Road, Railway Station, Sasaram",
        pincode: "821111",
        lat: "24.952430",
        lon: "84.060427"
    }, {
        name: "Maharishi Hospital",
        image:`${base_url}/image/hospital/2`,
        city: "Sasaram",
        address: "Patel Nagar, Sasaram",
        pincode: "821108",
        lat: "24.942158",
        lon: "84.021949"
    }, {
        name: "Amala Ayurvedic",
        image:`${base_url}/image/hospital/3`,
        city: "kaimur",
        address: "Block Road, kaimur",
        pincode: "821108",
        lat: "24.948695",
        lon: "84.004085"
    }, {
        name: "Sreedhareeyam Research Center",
        image:`${base_url}/image/hospital/4`,
        city: "kaimur",
        address: "Station Road , Dehri",
        pincode: "821108",
        lat: "24.958345",
        lon: "84.021277"
    }
]

const delhi = [
    {
        name: "Soukya Indian Holistic",
        image:`${base_url}/image/hospital/5`,
        city: "delhi",
        address: "Bakarganj , New Delhi",
        pincode: "201012",
        lat: "28.593735",
        lon: "77.199223"
    }, {
        name: "Sahaya Hospital",
        image:`${base_url}/image/hospital/6`,
        city: "delhi",
        address: "Chandani Chowk , New Delhi",
        pincode: "201014",
        lat: "28.632314",
        lon: "77.243197"
    }, {
        name: "Punarnava Ayurveda",
        image:`${base_url}/image/hospital/7`,
        city: "delhi",
        address: "Chandani Chowk , New Delhi",
        pincode: "201014",
        lat: "28.643161",
        lon: "77.184107"
    }
]

const kolkata = [
    {
        name: "Kalari Healthcare",
        image:`${base_url}/image/hospital/8`,
        city: "kolkata",
        address: "Saltlake , Kolkata",
        pincode: "700064",
        lat: "25.5859403",
        lon: "85.2306381"
    }, {
        name: "I-AIM Healthcare Center",
        image:`${base_url}/image/hospital/9`,
        city: "kolkata",
        address: "New Town , Kolkata",
        pincode: "700065",
        lat: "25.6039341",
        lon: "85.1005"
    }, {
        name: "Nagar Ayurveda",
        image:`${base_url}/image/hospital/10`,
        city: "kolkata",
        address: "Forbesganj , Kolkata",
        pincode: "700066",
        lat: "25.3676765",
        lon: "85.0427802"
    },
    {
        name: "Punarnava Ayurveda",
        image:`${base_url}/image/hospital/11`,
        city: "kolkata",
        address: "Javed Colony , Kolkata",
        pincode: "700065",
        lat: "25.200279",
        lon: "84.9845519"
    }
]

module.exports ={
    kharari,
    delhi,
    kolkata
}
