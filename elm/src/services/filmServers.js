import axios from 'axios'



export function getstore(offset,name){
        
    let url;
    if(name=='综合排序'){
        url='restapi/shopping/v3/restaurants?latitude=22.547&longitude=114.085947&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5'
    }else if(name=='好评优先'){
        url='restapi/shopping/v3/restaurants?latitude=22.547&longitude=114.085947&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&order_by=7&rank_id=&terminal=h5'
    }
    else if(name=='销量最高'){
        url='restapi/shopping/v3/restaurants?latitude=22.609725&longitude=114.029113&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5'
    }else if(name=='起送价最低'){
        url='restapi/shopping/v3/restaurants?latitude=22.609725&longitude=114.029113&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&order_by=1&rank_id=&terminal=h5'
    }else if(name=='配送最快'){
        url='restapi/shopping/v3/restaurants?latitude=22.609725&longitude=114.029113&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&order_by=2&rank_id=&terminal=h5'
    }else if(name=='配送费最低'){
        url='restapi/shopping/v3/restaurants?latitude=22.609725&longitude=114.029113&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&order_by=9&rank_id=&terminal=h5'
    }else if(name=='人均从高到低'){
        url='restapi/shopping/v3/restaurants?latitude=22.609725&longitude=114.029113&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&order_by=10&rank_id=&terminal=h5'
    }else{
        url='restapi/shopping/v3/restaurants?latitude=22.609725&longitude=114.029113&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&order_by=11&rank_id=&terminal=h5'
    }
    return new Promise((resolve, reject)=>{
        axios.get(url, {
            params: {
                offset
            }
        })
        .then(response=>{
            let data=response.data.items.map(item=>{
                return{
                    name:item.restaurant.name,
                    rating:item.restaurant.rating,
                    mouthshow:item.restaurant.recent_order_num,
                    sendprice:item.restaurant.piecewise_agent_fee.rules[0].price,
                    sendfee:item.restaurant.piecewise_agent_fee.rules[0].fee,
                    flavors:item.restaurant.flavors[0].name,
                    distance:item.restaurant.distance,
                    time:item.restaurant.order_lead_time,
                    tag:item.restaurant.support_tags,
                    content:item.restaurant.activities,
                    img:item.restaurant.image_path,
                    id:item.restaurant.id
                }
            })
            resolve(data);
        })
        .catch(error=>{
            console.log('失败');
        })
    })  
    }

        export function getSwiper(){
            return new Promise((resolve,reject)=>{
                axios.get('restapi/shopping/openapi/entries?latitude=22.609725&longitude=114.029113&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5').then(response=>{       
                    let data=response.data[0].entries.map(item=>{
                        return{
                            name:item.name,                   
                            id:item.id,
                            image_hash:item.image_hash
                        }
                        
                    })
                    resolve(data);
                }).catch(error=>{
                    console.log('失败')
                })
            })
        }


        export function getmerchants(){
            return new Promise((resolve,reject)=>{
                axios.get('restapi/shopping/v1/restaurants/outside_filter/attributes?latitude=22.609725&longitude=114.029113&terminal=h5').then(response=>{
                    let data=response.data
                    resolve(data)
                }).catch(error=>{
                    console.log('失败')
                })
            })
        }


        export function getSearchSuggest(){
            return new Promise((resolve,reject)=>{
                axios.get('restapi/member/gifts/suggest').then(response=>{
                    let data=response.data.map(item=>{
                        return{
                            corner_marker:item.corner_marker,
                            image_hash:item.image_hash,
                            title:item.title,
                            points_required:item.points_required,
                            original_price:item.original_price
                        }
                    })
                    resolve(data)
                }).catch(error=>{
                    console.log('失败')
                })
            })
        }
        


        export function getSearch(){
            return new Promise((resolve,reject)=>{
                axios.get('restapi/member/v1/discover?platform=1&block_index=0').then(response=>{          
                    let data=response.data[1].map(item=>{                
                        return{
                            content_url:item.content_url,
                            id:item.id,
                            main_pic_hash:item.main_pic_hash,
                            subtitle:item.subtitle,
                            title:item.title,
                            title_color:item.title_color,
                            ubt_stats_id:item.ubt_stats_id
                        }
                    })
                    resolve(data);
                }).catch(error=>{
                    console.log('失败')
                })
            })
        }

        //详情商家信息
        export function storeDetail(id){
            return new Promise((resolve,reject)=>{
                axios.get('/shopping/v2/menu?',{
                    params: {
                        restaurant_id:id
                    }
                })
                .then(response=>{
                    let data=response.data.map(item=>{
                        return{
                            description:item.description,
                            foodlist:item.foods,
                            name:item.name,
                        }
                    });  
                    resolve(data);
                }).catch(error=>{
                    console.log('失败')
                })
            })
        }
