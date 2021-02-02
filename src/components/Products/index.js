import React from 'react'

const Products = () => {
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
        <>
            <div className="flex-1 ">
                <div className="py-6 px-8 space-y-14 md:px-12">
                {products.map((product) => (
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
                    
                ))}
                </div>
            </div>    
        </>
    )
}

export default Products
