import { Meteor } from "meteor/meteor";
import Items from "../imports/api/items.js";

Meteor.startup(() => {
  if (Items.find().count() === 0) {
    console.log("Uh oh... there's nothing here...Let's add some items.");
    let items = [
      {
        name: "Bananas",
        price: "$0.99",
        rating: 0,
        location: {
          coords: {
            lat: 49.286682,
            lng: -123.139346
          }
        }
      },
      {
        name: "Apples",
        price: "$1.99",
        rating: 0,
        location: {
          coords: {
            lat: 49.290331,
            lng: -123.134111
          }
        }
      },
      {
        name: "Pears",
        price: "$2.99",
        rating: 0,
        location: {
          coords: {
            lat: 49.290198,
            lng: -123.13234
          }
        }
      },
      {
        name: "Oranges",
        price: "$1.50",
        rating: 0,
        location: {
          coords: {
            lat: 49.290254,
            lng: -123.132653
          }
        }
      }
    ];

    items.forEach(item => {
      console.log("Adding: " + item.name);
      Items.insert(item);
    });
  }
});
