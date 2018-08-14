
function setGoodsItem(value){
    //
    localStorage.setItem("arr",value);
}
function getGoodsItem(){
    //
    let data=JSON.parse(localStorage.arr);
    return data;
}

export default {
    setGoodsItem,
    getGoodsItem,
};