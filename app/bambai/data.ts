// Everything the Bambai page says, in one place.

export const CONTACT_EMAIL = "hello@insyd.in";

export const PLACES = [
  {
    id: "marinedrive",
    name: "Marine Drive",
    local: "मरीन ड्राइव्ह",
    line: "Three kilometres of sea wall, wet tarmac and evening walkers.",
    img: "/bambai/img/marinedrive.jpg",
    video: "/bambai/video/street.mp4",
  },
  {
    id: "rajabai",
    name: "Rajabai Clock Tower",
    local: "राजाबाई टॉवर",
    line: "Eighty-five metres of Gothic stone over the Oval.",
    img: "/bambai/img/rajabai.jpg",
    video: "/bambai/video/reel.mp4",
  },
  {
    id: "taj",
    name: "The Taj and the harbour",
    local: "ताज महाल पॅलेस",
    line: "Red domes, ferries, and the Arabian Sea catching the light.",
    img: "/bambai/img/taj.jpg",
    video: "/bambai/video/taj.mp4",
  },
  {
    id: "gateway",
    name: "Gateway of India",
    local: "गेटवे ऑफ इंडिया",
    line: "Run the promenade from the arch to Apollo Bunder.",
    img: "/bambai/img/gateway.jpg",
    video: "/bambai/video/gateway.mp4",
  },
  {
    id: "fort",
    name: "The Fort",
    local: "फोर्ट",
    line: "Courthouses, colleges and banyan shade, roof by roof.",
    img: "/bambai/img/csmt.jpg",
    video: "/bambai/video/fort.mp4",
  },
  {
    id: "city",
    name: "South Bombay",
    local: "दक्षिण मुंबई",
    line: "Every block from Colaba to Churchgate, built from the real streets.",
    img: "/bambai/img/city.jpg",
    video: "/bambai/video/city.mp4",
  },
] as const;

export type Place = (typeof PLACES)[number];

/** The garage: real game assets, loaded straight from GLB. `y` is the turntable rotation that shows the model's best side. */
export const MODELS = [
  { id: "padmini", name: "Premier Padmini", kind: "Kaali-peeli taxi", file: "padmini.glb", line: "Black and yellow, meter running.", y: -0.6 },
  { id: "bestbus", name: "BEST bus", kind: "City bus", file: "bestbus.glb", line: "Red double-door, route board lit.", y: -0.7 },
  { id: "heli", name: "Helicopter", kind: "Flyable", file: "heli.glb", line: "Take off from the Oval, land on a rooftop.", y: -0.9 },
  { id: "tataace", name: "Tata Ace", kind: "Mini truck", file: "tataace.glb", line: "The chhota haathi that moves the city.", y: -0.6 },
  { id: "activa", name: "Scooter", kind: "Two-wheeler", file: "activa.glb", line: "Weave between the taxis.", y: -0.8 },
  { id: "chai", name: "Chai tapri", kind: "Street stall", file: "chai.glb", line: "Cutting chai on every corner.", y: -0.5 },
  { id: "paan", name: "Paan kiosk", kind: "Street stall", file: "paan.glb", line: "Lit up till late.", y: -0.5 },
  { id: "coconut", name: "Coconut cart", kind: "Hawker", file: "coconut.glb", line: "Tender coconut on Marine Drive.", y: -0.6 },
  { id: "thela", name: "Fruit thela", kind: "Hawker", file: "thela.glb", line: "Pushed through the Fort lanes.", y: -0.6 },
  { id: "umbrella", name: "Hawker umbrella", kind: "Street prop", file: "umbrella.glb", line: "Shade, and shelter from the rain.", y: 0 },
  { id: "cow", name: "Cow", kind: "Resident", file: "cow.glb", line: "Has right of way.", y: -0.9 },
] as const;

/** The people: the crowd you walk through, straight from the game. */
export const PEOPLE = [
  { id: "dabbawala", name: "Dabbawala", line: "Two hundred thousand lunches a day, never late.", file: "npc-dabbawala.glb", h: 1.7 },
  { id: "autodriver", name: "Auto driver", line: "Khaki shirt, meter down, knows a shortcut.", file: "npc-autodriver.glb", h: 1.72 },
  { id: "officeman", name: "Office goer", line: "Lanyard on, 9:12 fast to Churchgate.", file: "npc-officeman.glb", h: 1.76 },
  { id: "streetvendor", name: "Street vendor", line: "Sets up before the city wakes.", file: "npc-streetvendor.glb", h: 1.7 },
  { id: "elderdhoti", name: "Dada", line: "Morning walk on the sea face.", file: "npc-elderdhoti.glb", h: 1.64 },
  { id: "collegestudent", name: "College kid", line: "Backpack, earphones, late for lecture.", file: "npc-collegestudent.glb", h: 1.75 },
  { id: "labourer", name: "Labourer", line: "Lungi folded, towel on the shoulder.", file: "npc-labourer.glb", h: 1.68 },
  { id: "businessman", name: "Seth", line: "Nehru jacket, three phones.", file: "npc-businessman.glb", h: 1.72 },
  { id: "clerk", name: "Clerk", line: "Thirty years at the same desk in Fort.", file: "npc-clerk.glb", h: 1.7 },
  { id: "kurtacap", name: "Chacha", line: "White kurta, evening chai at the Irani cafe.", file: "npc-kurtacap.glb", h: 1.72 },
  { id: "elderkurta", name: "Uncle", line: "Reads the paper on the same bench daily.", file: "npc-elderkurta.glb", h: 1.68 },
  { id: "teeyouth", name: "Local boy", line: "Cricket on Sunday, Oval Maidan.", file: "npc-teeyouth.glb", h: 1.74 },
] as const;

export const FEATURES = [
  {
    id: "fly",
    title: "Fly it",
    line: "Board a helicopter on Marine Drive and take the whole city from the air: the Oval, the harbour, the Fort's red roofs.",
    video: "/bambai/video/hero.mp4",
  },
  {
    id: "walk",
    title: "Walk it",
    line: "Hawkers, office goers and dabbawalas fill the pavements. Push through the crowd at Fort or take it slow on the sea face.",
    video: "/bambai/video/street.mp4",
  },
  {
    id: "monsoon",
    title: "Get soaked",
    line: "Clouds roll in off the Arabian Sea. Roads turn to mirrors, lamps come on, the city gets louder.",
    video: "/bambai/video/gateway.mp4",
  },
  {
    id: "landmarks",
    title: "Know it",
    line: "Rajabai, the Taj, CSMT, the Gateway: the landmarks stand where they stand, at their real size.",
    video: "/bambai/video/taj.mp4",
  },
] as const;
