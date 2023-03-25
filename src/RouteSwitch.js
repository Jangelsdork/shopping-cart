import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Components/Shop";
import React, { useState } from "react";

const RouteSwitch = () => {
  const itemFactory = (
    colorId,
    itemName,
    itemDescription,
    itemPrice,
    itemId
  ) => {
    return { colorId, itemName, itemDescription, itemPrice, itemId };
  };
  const grannySmith = itemFactory(
    "#89E898",
    "Granny Smith",
    "A beautiful green hue that will evoke memories of crunchy green apples",
    "1.27",
    0
  );
  const spiceGirls = itemFactory(
    "#A2F043",
    "Spice Girls Green",
    "Let this wonderful hue take you back to the 90's",
    "4.98",
    1
  );
  const autumnMuck = itemFactory(
    "#CAD948",
    "Autumn Muck",
    "Evokes those last days of Autumn when all the leaves are really starting to rot",
    "53",
    2
  );
  const senfsation = itemFactory(
    "#f0E343",
    "Senfsation",
    "Introducing #F0E343, the color that's so bright, it'll make your eyes water (in a good way, of course). It's the perfect hue for when you want to blind your enemies with your fashion choices.",
    "4.99",
    3
  );
  const somethingAwful = itemFactory(
    "#E6C940",
    "Something Awful",
    "Looking for a color that screams \"I'm the shade of a banana that's been left in the sun for too long\"? Well, look no further than #E6C940 - the perfect choice for when you want to add a touch of questionable ripeness to your design palette!",
    "600",
    4
  );
  const peaches = itemFactory(
    "#FA9869",
    "Peaches",
    "Are you tired of blending in with the beige background of life? Spice things up with #FA9869, the color that says, \"I may not be everyone's cup of tea, but at least I'm not a bland cup of water.\" Plus, it'll make you easy to spot in a crowded room (or on a crowded street corner if you're into that kind of thing).",
    "51",
    5
  );

  const [items, setItems] = useState([
    grannySmith,
    spiceGirls,
    autumnMuck,
    senfsation,
    somethingAwful,
    peaches
  ]);

  const [basket, setBasket] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Shop" element={<Shop items={items} basket={basket} setBasket={setBasket}/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteSwitch;
