import "./App.css";
import Logo from "./images/logo.png";

function App() {
  const categories = [
    `Women's Running Shoes`,
    `Everyday Sneakers`,
    `Slip-Ons`,
    `High Tops`,
    `Boat Shoes`,
    `Flats`,
    `Weather Repellent Shoes`,
  ];

  const options = [
    "Running",
    "Wet Weather",
    "Everyday",
    "Cool Weather",
    "Warm Weather",
  ];

  const hue = [
    {
      name: "Grey",
      color: "#8c8c8c",
    },
    {
      name: "Green",
      color: "#69715e",
    },
    {
      name: "White",
      color: "#f5f4f0",
    },
    {
      name: "Blue",
      color: "#49607c",
    },
    {
      name: "Black",
      color: "#3b3b3b",
    },
    {
      name: "Red",
      color: "#b14754",
    },
    {
      name: "Pink",
      color: "#dfabb5",
    },
    {
      name: "Brown",
      color: "#bd9474",
    },
    {
      name: "Yellow",
      color: "#ead99a",
    },
  ];

  const products = [
    {
      name: "Women's Wool Runner Mizzles",
      description:
        "Our weather-ready sneaker made with merino wool and Puddle Guard.",
      previewText: "Cozy Sneaker, Stormy Weather",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/2SJ7oQMIoIBIzdlmOtAGkA/5e5808e1d641be343569a2c17246a110/SpringCore2020_Shot04_SavannaNight_WRM_0687.jpg",
      styles: [
        {
          name: "Natural Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/2",
        },
        {
          name: "Savanna Night (Cream Sole)",
          price: "$115",
          colors: ["#353946", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Black Sands (Asphalt Sole)",
          price: "$115",
          colors: ["#28282c", "#434345"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Cardamon (Cream Sole)",
          price: "$115",
          colors: ["#9d957a", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Ginseng (Beige Sole)",
          price: "$115",
          colors: ["#e7e5e2", "#bfbab5"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Dapple Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Aurora (Cream)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Pacific (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "True Black (Black Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
      ],
    },
    {
      name: "Women's Tree Dashers",
      description: "Our running shoe designed with breathable Tree material.",
      previewText: "Supportive Design, Daily Run",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/37AjznKN1NGlmJfORFahMM/6746b9962e95ba718fda199e78124647/W_PCT_TD.jpg",
      styles: [
        {
          name: "Geyser (Light Blue Sole)",
          price: "$125",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5j8qUlAiAUaUGHhhAwNUEH/1",
        },
        {
          name: "Quartz (Light Sole)",
          price: "$125",
          colors: ["#353946", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/WBGO4zE8Z7uwVaLNzNVwa/1",
        },
        {
          name: "Black Sands (Asphalt Sole)",
          price: "$115",
          colors: ["#28282c", "#434345"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Cardamon (Cream Sole)",
          price: "$115",
          colors: ["#9d957a", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Ginseng (Beige Sole)",
          price: "$115",
          colors: ["#e7e5e2", "#bfbab5"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Dapple Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Aurora (Cream)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Pacific (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "True Black (Black Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
      ],
    },
    {
      name: "Women's Tree Toppers",
      description: "Our classic high top made with breezy eucalyptus tree.",
      previewText: "Breezy Feel, Light Material",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/20CEbvKOYhBTSstykRFOzR/3e479edb4bc1c66538a4018b89f1f357/W_PCT_TT.jpg",
      styles: [
        {
          name: "Charcoal (Charcoal Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3lzAaTjslhlCa7QeBt4WT5/1",
        },
        {
          name: "Kauri Zin (White Sole)",
          price: "$115",
          colors: ["#353946", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/ymlnH04jU7lZUtiDPDgom/1",
        },
        {
          name: "Black Sands (Asphalt Sole)",
          price: "$115",
          colors: ["#28282c", "#434345"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Cardamon (Cream Sole)",
          price: "$115",
          colors: ["#9d957a", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Ginseng (Beige Sole)",
          price: "$115",
          colors: ["#e7e5e2", "#bfbab5"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Dapple Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Aurora (Cream)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Pacific (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "True Black (Black Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
      ],
    },
    {
      name: "Women's Tree Loungers",
      description: "Our casual slip-on made with breezy eucalyptus tree.",
      previewText: "Breezy Feel, Light Material",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/4lPAUPNJ0GxMs6Eu6RqD2R/6355a59c9bc1c079a73063e2c0c886e0/SummerCore2020-W_Marine_TL_Picnic-0678.jpg",
      styles: [
        {
          name: "Charcoal (White Sole)",
          price: "$95",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6aUtD7ZM5Q84ktjB6HKdEK/1",
        },
        {
          name: "Kauri Marine Blue (White Sole)",
          price: "$95",
          colors: ["#353946", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6Qx18Rqs4O3e8iIIPxJWrv/1",
        },
        {
          name: "Black Sands (Asphalt Sole)",
          price: "$115",
          colors: ["#28282c", "#434345"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Cardamon (Cream Sole)",
          price: "$115",
          colors: ["#9d957a", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Ginseng (Beige Sole)",
          price: "$115",
          colors: ["#e7e5e2", "#bfbab5"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Dapple Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Aurora (Cream)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Pacific (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "True Black (Black Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
      ],
    },
    {
      name: "Women's Wool Runner-up Mizzles",
      description:
        "Our weather-ready high top made with merino wool and Puddle Guard™.",
      previewText: "Cozy High Top, Stormy Weather",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/4MjEdiJHplh6HFH6iem6PC/6416efa47ca9775d4e9eaa7c7666c805/W_PCT_WRUM.jpg",
      styles: [
        {
          name: "Tuke Jo (Cream Sole)",
          price: "$135",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1vj0oKn4Grnojpwe2UkKh1/1",
        },
        {
          name: "Mist (Grey Sole)",
          price: "$135",
          colors: ["#353946", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6Qx18Rqs4O3e8iIIPxJWrv/1",
        },
        {
          name: "Black Sands (Asphalt Sole)",
          price: "$115",
          colors: ["#28282c", "#434345"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Cardamon (Cream Sole)",
          price: "$115",
          colors: ["#9d957a", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Ginseng (Beige Sole)",
          price: "$115",
          colors: ["#e7e5e2", "#bfbab5"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Dapple Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Aurora (Cream)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "Pacific (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
        {
          name: "True Black (Black Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2",
        },
      ],
    },
  ];

  return (
    <div className="font-poppins">
      <div className="px-4 py-3 bg-gray-500 text-white">
        <p className="text-xs font-semibold text-center">
          Gift with confidence. Returns are extended till January 15th.
        </p>
      </div>
      <header className="z-10 sticky top-0 px-5 py-3 flex items-center justify-between bg-white">
        <div className="absolute inset-0 shadow-lg opacity-50"></div>
        <div className="flex inline-flex space-x-4">
          <button className="h-8 w-8 md:hidden">
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex items-center hidden md:flex">
            <a className="text-sm font-semibold text-gray-800 uppercase " href="#">Men</a>
          </div>
          <div className="flex items-center hidden md:flex">
            <a className="text-sm font-semibold text-gray-800 uppercase" href="#">Women</a>
          </div>
        </div>
        <div className="flex">
          <img
            className="h-9"
            src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
            alt="Allbirds"
          />
        </div>
        <div className="flex inline-flex space-x-4">
          <div className="flex items-center hidden md:flex">
            <a className="text-sm font-semibold text-gray-800 uppercase " href="#">Our Materials</a>
          </div>
          <div className="flex items-center hidden md:flex">
            <a className="text-sm font-semibold text-gray-800 uppercase" href="#">stores</a>
          </div>
          <button className="h-8 w-8 hidden md:flex">
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="h-8 w-8 hidden md:flex">
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button className="h-8 w-8">
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </header>

      <main>
        <div className="md:hidden">
          <div className="flex items-center justify-between px-8 pt-4 pb-3 md:px-12 ">
            <div>
              <div className="text-xs font-bold text-gray-900 space-x-1">
                <a href="#" className="underline">
                  Home
                </a>
                <span>/</span>
              </div>
              <h1 className="text-lg font-bold text-gray-900 md:text-xl">
                Women's Shoes
              </h1>
            </div>
            <div>
              <button className="block h-6 w-6">
                <svg
                  className="transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-gray-100 py-2 overflow-x-auto scrollbars-hidden">
            <div className="px-8 text-sm inline-flex space-x-5 md:px-12">
              {categories.map((category) => (
                <a
                  href="#"
                  key={category}
                  className="font-medium text-gray-800 whitespace-nowrap"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* main */}
        <div className="container mx-auto px-8">
          <div className="flex flex-no-wrap -mx-6">
            <div className="w-1/4 max-w-md flex-none px-6 hidden md:block">
              <div className="bg-white mt-6">
                <div>
                  <div className="text-xs font-bold text-gray-900 space-x-1">
                    <a href="#" className="underline">
                      Home
                    </a>
                    <span>/</span>
                  </div>
                  <h1 className="text-lg font-bold text-gray-900 md:text-xl">
                    Women's Shoes
                  </h1>
                </div>
                <div>
                  <div className="">
                    {categories.map((category) => (
                      <a
                        href="#"
                        key={category}
                        className="block text-sm font-light whitespace-nowrap py-3"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <div className="font-semibold text-base">
                      <p>Filter By:</p>
                    </div>
                    <div className="border-t mt-4"></div>
                    <div>
                      <div className="mt-4 font-semibold text-base uppercase">
                        <p>Material</p>
                      </div>
                      <div className="mt-2">
                        <div className="py-1">
                          <input type="checkbox" className="" />
                          <span className="text-xs px-2">Soft & Cozy Wool</span>
                        </div>
                        <div className="py-1">
                          <input type="checkbox" className="" />
                          <span className="text-xs px-2">
                            Light & Breezy Tree
                          </span>
                        </div>
                      </div>
                      <div className="border-t mt-4"></div>
                      <div className="mt-4 font-semibold text-base uppercase">
                        <p>Best For</p>
                      </div>
                      <div className="mt-2">
                        {options.map((option) => (
                          <div className="py-1">
                            <input type="checkbox" className="" />
                            <span className="text-xs px-2">{option}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t mt-4"></div>
                    <div>
                      <div className="mt-4 font-semibold text-base uppercase">
                        <p>Hue</p>
                      </div>
                      <div className="flex mt-3">
                        <div>
                          {hue.map((color) => (
                            <div className="flex py-1.5">
                              <button className="h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none">
                                <span className="h-full w-full flex flex-col transform">
                                  <span
                                    className="h-6 w-6"
                                    style={{ backgroundColor: color.color }}
                                  ></span>
                                </span>
                              </button>
                              <span className="flex text-xs px-2 items-center">
                                {color.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 px-6">
              <div className="py-6 px-8 space-y-14 md:px-12">
                {products.map((product) => (
                  <div className="">
                    <div>
                      <div>
                        <h2 className="text-lg font-bold md:text-xl">
                          {product.name}
                        </h2>
                        <p className="text-sm font-medium text-gray-800">
                          {product.description}
                        </p>
                      </div>
                      <div className="mt-4 md:grid md:grid-cols-2 md:gap-6 md:items-start">
                        <div className="shadow-xl">
                          <div className="shadow-lg">
                            <a href="#">
                              <div>
                                <img
                                  className="w-full"
                                  src={product.styles[0].image}
                                  alt=""
                                />
                              </div>
                              <div className="px-4 pt-3">
                                <h3 className="text-sm font-bold">
                                  {product.name}
                                </h3>
                                <p className="mt-1 text-sm font-medium text-gray-800">
                                  {product.styles[0].name}
                                </p>
                              </div>
                            </a>
                            <div className="mt-1 px-4 pb-4">
                              <p className="text-sm font-medium text-gray-800">
                                {product.styles[0].price}
                              </p>
                              <div className="mt-4 flex items-center space-x-6 md:space-x-2">
                                {product.styles.slice(0, 5).map((style, i) => (
                                  <span className="md:flex-1 md:min-w-0 md:flex">
                                    <button
                                      className={`h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none ${
                                        i === 0
                                          ? "ring-2 ring-offset-1 ring-gray-300"
                                          : ""
                                      } md:rounded-none md:w-full md:aspect-w-1 md:aspect-h-1 md:border-0 ${
                                        i === 0 ? "md:ring-0" : ""
                                      }`}
                                    >
                                      <span className="sr-only">
                                        {style.name}
                                      </span>
                                      <span className="h-full w-full flex flex-col transform -rotate-45 md:hidden">
                                        <span
                                          className="h-3 w-6"
                                          style={{
                                            backgroundColor: style.colors[0],
                                          }}
                                        ></span>
                                        <span
                                          className="h-3 w-6"
                                          style={{
                                            backgroundColor: style.colors[1],
                                          }}
                                        ></span>
                                      </span>
                                      <span className="hidden md:h-full md:w-full md:flex">
                                        <img src={style.image} alt="" />
                                        <span
                                          className={`absolute inset-0 ${
                                            i === 0
                                              ? "md:ring-1 md:ring-inset md:ring-offset-0 md:ring-gray-300"
                                              : ""
                                          }`}
                                        ></span>
                                      </span>
                                    </button>
                                  </span>
                                ))}
                                <span className="md:flex-1 md:min-w-0 md:flex">
                                  <button
                                    type="button"
                                    className="h-7 w-7 border rounded-full flex items-center justify-center text-gray-600 hover:border-gray-400 md:aspect-w-1 md:aspect-h-1 md:w-full md:rounded-none"
                                  >
                                    <span className="flex items-center justify-center">
                                      <svg
                                        className="h-4 w-4 md:h-7 md:w-7"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M9 5l7 7-7 7"
                                        />
                                      </svg>
                                    </span>
                                  </button>
                                </span>
                              </div>
                            </div>
                            <div className="border-t">
                              <button className="px-4 py-2 text-sm w-full flex justify-between">
                                <span className="font-bold">Quick Add</span>
                                <span>
                                  <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                  </svg>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="hidden md:block">
                          <div className="relative">
                            <img
                              className="w-full"
                              src={product.previewImage}
                              alt=""
                            />
                            <div className="absolute inset-0">
                              <div className="absolute inset-0 top-1/2 bg-gradient-to-t from-gray-900 opacity-95"></div>
                              <div className="absolute inset-x-0 bottom-0">
                                <p className="px-6 pb-6 font-bold text-white capitalize">
                                  {product.previewText}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-8 w-1/4">
          <form action="#" method="POST">
            <div>
              <label
                htmlFor="email_address"
                className="block text-white text-sm font-medium"
              >
                Enter your email to stay in touch!
              </label>
              <div className="mt-1.5 relative">
                <input
                  type="text"
                  className="block w-full text-white bg-gray-600 border-2 border-transparent focus:border-white focus:ring-0 transition"
                />
                <div
                  className="absolute inset-0 border-b-2 border-white pointer-events-none"
                  aria-hidden
                ></div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="block w-full px-4 py-3 rounded bg-gray-600 text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 focus:outline-none"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y text-white px-4 sm:px-6 md:px-8 ">
          <ul className="text-xs pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 text-center">
            <li className="space-y-5 row-span-2 md:text-left">
              <h2 className="text-sm font-semibold text-white uppercase">
                Help
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    className=""
                    href="#"
                  >
                    1-888-963-8944
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    1-814-251-9966
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    help@allbirds.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Returns/Exchanges
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    FAQ/Contact Us
                  </a>
                </li>
              </ul>
            </li>
            <li className="space-y-5 row-span-2 md:text-left">
              <h2 className="text-sm font-semibold text-white uppercase">
                Shop
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                  >
                    Men's Shoes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Women's Shoes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Men's Apparel
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Women's Apparel
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Socks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Download the Allbirds App
                  </a>
                </li>
                
              </ul>
            </li>
            <li className="space-y-5 row-span-2 md:text-left">
              <h2 className="text-sm font-semibold text-white uppercase">
                Company
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                  >
                    Our Stores
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Our Materials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Sustainability
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Partnership
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Affiliates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Bulk Orders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </li>
            <li className="space-y-5 md:text-left">
              <h2 className="text-lg font-semibold text-white uppercase">
                FOLLOW THE FLOCK
              </h2>
              <p className="text-white leading-relaxed">Exclusive offers, a heads up on new things, and sightings of Allbirds in the wild. Oh, we have cute sheep, too. #weareallbirds</p>
              
              <div className="items-center min-w-full">
                <div className="flex-auto">
                  <ul className="inline-flex space-x-5 ">
                    <li>
                      <a
                        className=""
                        href="#"
                      >
                        <img src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/7ALf4NFNH4VStmrXU0qSKK/1" alt="" />
                      </a>
                    </li>
                    <li>
                      <a
                        className=""
                        href="#"
                      >
                        <img src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/7jsrb2oMQypD1kO6iZLXZN/1" alt="" />
                      </a>
                    </li>
                    <li>
                      <a
                        className=""
                        href="#"
                      >
                        <img src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/55ZLXdMQu728huA78Qlfkb/1" alt="" />
                      </a>
                    </li>
                    <li>
                      <a
                        className=""
                        href="#"
                      >
                        <img src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/5VBkylibm5XkgzjDP153Mo/1" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>  
              </div>                            
                                        
              
            </li>
          </ul>
          
        </div>

        <div className="container mx-auto px-3">
          <div className="">
            <p className="text-xs text-white leading-relaxed text-center">© 2021 Allbirds, Inc. All Rights Reserved. Terms, Privacy & Accessibility</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
