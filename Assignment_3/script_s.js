class restaurantManager{
    restaurantList=[{
     id:1,
     name:'PunjabiTadka', 
     address:'Ashoka Road',
     city:'Delhi'
 },
 {
     id:2,
     name:'Tamra Restaurant',
     address:'Connaught Palace',
     city:'New Delhi'
 },
 {
     id:3,
     name:'Curry Nights Restaurant',
     address:'Alinagar',
     city:'Gorakhpur'
 },
 {
     id:4,
     name:'Pirates of Grill',
     address:'Gomti Nagar',
     city:'Lucknow'
 }];

      printAllRestaurantNames = () => {
        return this.restaurantList.map(restaurant => restaurant.name);
      }

      filterRestaurantsByCity = (place) => {
        return this.restaurantList.filter(restaurant => restaurant.city == place)
      }
}

const restautantObj = new restaurantManager();

const res1 = restautantObj.printAllRestaurantNames();
console.log(res1);

console.log(restautantObj.filterRestaurantsByCity("Delhi"));

orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

const res2 = Object.values(orderData).reduce((start,end) => start + end );
console.log(res2);

const flag = Object.keys(orderData);
console.log(flag);

let arr = [];
const res3 = flag.map((item, index) => {
      const obj = {
          'id' : index + 1,
          'order': item,
          'orderpercentage' : ((orderData[item]/res2 )*100).toFixed(2),   //( 20 / 199) * 100
          'restaurant': 'Punjabi Tadka'
      }
      arr.push(obj);
})
console.log(arr);


