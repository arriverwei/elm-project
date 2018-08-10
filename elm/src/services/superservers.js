import axios from 'axios'

export function superdata(){
    return new Promise((resolve,reject)=>{
        axios.get('newretail/main/shoplist?address=&channel=supermarket&device_id=5B77E6A165804B90A3AEEA69EFC5BE27%7C1533799185547&scene_id=0&rule_id=0&cat_id=0&scene_type=shop&rn=20&pn=1&user_type=default&fromalipay=0&type=1&lng=113.906041&lat=22.558824&city_id=11')
        .then(response=>{       
            console.log(response)
            resolve();
        }).catch(error=>{
            console.log('失败')
        })
    })
}

export function bannerdata(){
    return new Promise((resolve,reject)=>{
        axios.get('/newretail/main/sceneentries?lat=22.558824&lng=113.906041&city_id=11&device_id=5B77E6A165804B90A3AEEA69EFC5BE27%7C1533799185547&channel=supermarket&for=index')
        .then(response=>{       
            console.log(response)
            resolve();
        }).catch(error=>{
            console.log('失败')
        })
    })
}

export function twodata(){
    return new Promise((resolve,reject)=>{
        axios.get('/newretail/main/shopentries?lat=22.558824&lng=113.906041&city_id=11&device_id=5B77E6A165804B90A3AEEA69EFC5BE27%7C1533799185547&channel=supermarket&for=index')
        .then(response=>{       
            console.log(response)
            resolve();
        }).catch(error=>{
            console.log('失败')
        })
    })
}

