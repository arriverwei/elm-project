

export default{
    install(Vue){
        Vue.filter('img',(value)=>{
            
            if(!value){
                return '';
            }
            if(value.endsWith('png')){
                value = value+'.png'
            }
            else if(value.endsWith('jpeg')){
                value = value +'.jpeg'
            }       
            value ='https://fuss10.elemecdn.com' + '/' + value + `?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`;

            return value;
        })
    }
}