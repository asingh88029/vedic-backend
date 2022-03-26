const config = require("./../src/config/config");
const base_url = config.base_url;
const kharari = [
    {
        id:"hospital1",
        name: "AyurVaid Hospital",
        image:`${base_url}/image/hospital/1`,
        city: "Sasaram",
        address: "Lokhwandi Road, Railway Station, Sasaram",
        pincode: "821111",
        map_add:"X335+6V9, Admapur, Bihar 821115, India"
    }, {
        id:"hospital2",
        name: "Maharishi Hospital",
        image:`${base_url}/image/hospital/2`,
        city: "Sasaram",
        address: "Patel Nagar, Sasaram",
        pincode: "821108",
        map_add:"W2VC+6PG, Nooran Ganj, Sasaram, Bihar 821115, India"
    }, {
        id:"hospital3",
        name: "Amala Ayurvedic",
        image:`${base_url}/image/hospital/3`,
        city: "kaimur",
        address: "Block Road, kaimur",
        pincode: "821108",
        map_add:"Prabhakar Road,Rouza Road No-1, near sher-sah suri tomb, Saket Nagar Colony, Sasaram, Bihar 821115, India"
    }, {
        id:"hospital4",
        name: "Sreedhareeyam Research Center",
        image:`${base_url}/image/hospital/4`,
        city: "kaimur",
        address: "Station Road , Dehri",
        pincode: "821108",
        map_add:"railway station sasaram ward no 7 821115 gopalganj, Mohaddiganj, Sasaram, Bihar 821115, India"
    }
]

const delhi = [
    {
        id:"hospital5",
        name: "Soukya Indian Holistic",
        image:`${base_url}/image/hospital/5`,
        city: "delhi",
        address: "Bakarganj , New Delhi",
        pincode: "201012",
        map_add:"NWC Ground, 15208, Lok Kalyan Marg, Chanakyapuri, New Delhi, Delhi 110003, India"
    }, {
        id:"hospital6",
        name: "Sahaya Hospital",
        image:`${base_url}/image/hospital/6`,
        city: "delhi",
        address: "Chandani Chowk , New Delhi",
        pincode: "201014",
        map_add:"163/1, Bahadur Shah Zafar Marg, Vikram Nagar, New Delhi, Delhi 110002, India"
    }
]

module.exports ={
    kharari,
    delhi
}
