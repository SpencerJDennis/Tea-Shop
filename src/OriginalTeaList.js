import { v4 } from 'uuid'; 

export default{
  "success": true,
  "data": {
    "tea": [
      {
        "id": v4(),
        "name": "Gyokuro",
        "origin": "Japan",
        "price": 10,
        "description": "Gyokuro, which means “jade dew” (玉露), is Japan’s rarest and most expensive green tea. ",
        "stock": 130
      },
      {
        "id": v4(),
        "name": "Earl Grey",
        "origin": "Global",
        "price": 5,
        "description": "Earl Grey tea is a staple in British tea assortments, well-loved globally for its signature floral aroma and bold taste.",
        "stock": 130
      },
      {
        "id": v4(),
        "name": "Jasmine",
        "origin": "China",
        "price": 5,
        "description": "Jasmine tea is a popular Chinese scented tea, typically made with tea leaves similar to green tea as a base and scented with jasmine blossoms.",
        "stock": 130
      },

    ]
  }
}