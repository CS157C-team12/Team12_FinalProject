//Exporting a list of ASIN numbers to send to the API
//API will return data in JSON format of the related attributes of item

//const allProducts = require('./beautyProducts');

/*
for (let i = 0; i < 9; i++) {
    const params = {
        api_key: "3E1E04C706664B36BFE1D51A94CAA873",
        type: "product",
        amazon_domain: "amazon.com",
        asin: `${allProducts[i]}`
    }

    //Make the HTTP GET request to Rainforest API
    axios.get('https://api.rainforestapi.com/request', { params })
        .then(response => {
            //print the JSON response from Rainforest API
            //console.log(JSON.stringify(response.data, 0, 2));

            //Printing data attributes of response to insert into the array
            console.log(response.data.product.title);
            console.log(response.data.product.description);
            console.log(response.data.product.brand);
            console.log(response.data.product.rating);
            console.log(response.data.product.ratings_total);
            console.log(response.data.product.buybox_winner.price.value);
            console.log("--------------------");

            seedData(response);
        }).catch(error => {
            // catch and print the error
            console.log(error);
        })
}
*/

//After retrieving data from the API, push it into this array of objects and export it
module.exports = [
    { //Beauty 1
        title: "Olay Regenerist Retinol 24 Night Moisturizer Fragrance-Free + Whip Face Moisturizer Travel/Trial Size Gift Set Retinol 24 Night Face Cream",
        price: 46.99,
        asin: "B07XQBY5QQ",
        image: "https://m.media-amazon.com/images/I/61-Y1iTnGNS._SL1500_.jpg",
        category: "Beauty & Personal Care",
        rating: {
            totalRatings: 7665,
            score: "4.6"
        },
        productDetails: {
            description: "Retinol 24 Night Face CreamOlay Regenerist Retinol 24 Facial Moisturizer penetrates deep into skin's surface layers. Our proprietary blend of Vitamin B3 + Retinol complex hydrates skin for 24 hours for a bounty of benefits. You'll see visible improvements in fine lines & wrinkles, smoothness, brightness, firming, dark spots, and pores.Retinol 24 delivers all of these benefits with virtually no irritation.This fragrance and dye free moisturizer absorbs quickly and goes deep into your skin's surface layers so you wake up every morning to younger-looking, radiant skin. Also included is a 1 week sample of our Regenerist Whip Facial Moisturizer. This fragrance-free whipped moisturizer absorbs instantly leaving your skin feeling soft and smooth, never greasy",
            brand: "Olay"
        }
    },
    { //Beauty 2
        title: "REVLON One-Step Hair Dryer And Volumizer Hot Air Brush, Black, Packaging May Vary Black Volumizer",
        price: 41.88,
        asin: "B01LSUQSB0",
        image: "https://m.media-amazon.com/images/I/71ilZ4OEHXL._SL1500_.jpg",
        category: "Beauty & Personal Care",
        rating: {
            totalRatings: 258167,
            score: "4.6"
        },
        productDetails: {
            description: "Color:Black VolumizerThe Revlon One-Step Hair Dryer and Volumizer is a designed Hot Air Brush to deliver gorgeous volume and brilliant shine in a single step. The unique non detachable oval brush design smooths hair while the rounded edges quickly create volume at the root for beautifully full-bodied bends at the ends in a single pass. The brush is designed with Nylon Pin and Tufted Bristles for detangling, improve volume and control. Styling flexibility is guaranteed with 3 Heat/Speed Settings and a Cool Option. Built to provide just the right amount of heat. Unlike conventional hair dryers, this volumizer can be placed closer to the scalp for lift. Boosted by Ionic Technology through a built-in genuine ION generator, hair dries fast and helps reduce heat damage. The One Step Unit is designed for 120V USA outlets only, we do not recommend use of a voltage adapter or converter, as it will damage the unit. Safety first! The Revlon One-Step Hair Dryer and Volumizer meets U.S. safety requirements and proudly features the ETL Certification seal. Directions: For faster results towel dry hair to remove excess water. Separate hair into manageable sections. Item Weight: 1.8-pound Note: If you need 220V or for other counties – please check Amazon in that country for the correct voltage and plug",
            brand: "Revlon"
        }
    },
    { //Beauty 3
        title: "COVERGIRL Lash Blast Clean Volume Mascara, Very Black, 1 Count Very Black 1 Count",
        price: 5.99,
        asin: "B08M96YZN1",
        image: "https://m.media-amazon.com/images/I/71IwjANfH4L._SL1500_.jpg",
        category: "Beauty & Personal Care",
        rating: {
            totalRatings: 1338,
            score: "4.4"
        },
        productDetails: {
            description: "Color:Very Black| Size:1 CountCreate the high-volume lash look of your dreams with COVERGIRL Lash Blast Clean Volume Mascara. The volumizing mascara has a clean, vegan formula free of parabens, sulfates, talc, and mineral oil that infused with argan and marula oils, leaving lashes feeling conditioned. This long-lasting vegan mascara creates 10x the volume of bare lashes with no smudging or clumping. The brush applicator separates and defines for longer, fuller lashes. To use, start at the base of your lashes, wiggle the brush from side to side from base to tip to lift and shape; Layer as desired. Pro-tip: To build dramatic lash thickness, use an eyelash primer and wait 30 seconds to dry before applying COVERGIRL Lash Blast Clean Volume Mascara",
            brand: "Covergirl"
        }
    },
    { //Beauty 4
        title: "Maybelline Sky High Waterproof Mascara Makeup, Volumizing Mascara, Buildable, Lengthening Mascara, Defining, Curling, Multiplying, Waterproof Brownish Black, 0.2 fl. oz. 803 WATERPROOF BROWNISH BLACK",
        price: 8.98,
        asin: "B08H43738R",
        image: "https://m.media-amazon.com/images/I/71aPOVjcHpL._SL1500_.jpg",
        category: "Beauty & Personal Care",
        rating: {
            totalRatings: 31664,
            score: "4.4"
        },
        productDetails: {
            description: "Color:803 WATERPROOF BROWNISH BLACKSky high lash impact from Every angle! Lash Sensational Sky High mascara delivers full volume and limitless length. Exclusive flex tower mascara brush bends to volumize and extend every single lash from root to tip. Waterproof mascara formula infused with Bamboo Extract and fibers for long, full lashes that never gets weighed down. Available in very Black and brownish Black. Allergy tested. Ophthalmologist tested. Suitable for sensitive eyes and contact lens wearers. Removes easily with waterproof eye makeup remover.",
            brand: "Maybelline New York"
        }
    },
    { //Beauty 5
        title: "Covergirl Lash Blast Volume Mascara, Very Black VERY BLACK 1 Count (Pack of 1) REGULAR",
        price: 5.99,
        asin: "B00EMAM9BC",
        image: "https://m.media-amazon.com/images/I/61sBBorhsVL._SL1500_.jpg",
        category: "Beauty & Personal Care",
        rating: {
            totalRatings: 22790,
            score: "4.4"
        },
        productDetails: {
            description: "Color:VERY BLACK| Size:1 Count (Pack of 1)| Style:REGULARPRODUCT DESCRIPTION\nGet that ultimate big-lash look with Covergirl Lash Blast Volume Mascara. This volume-boosting mascara instantly gives lashes ten times more volume than bare lashes. Pro-tip: Pair with Covergirl Perfect Point Plus Eyeliner for extra contrast that brings your eyes out even more.\n\nBRAND STORY\nBy CoverGirl",
            brand: "Covergirl"
        }
    },
    { //Beauty 6
        title: "Maybelline Instant Age Rewind Eraser Dark Circles Treatment Multi-Use Concealer, Light, 0.2 Fl Oz (Pack of 1) 120 LIGHT",
        price: 7.98,
        asin: "B004Y9GTYE",
        image: "https://m.media-amazon.com/images/I/71GDFRUiw7L._SL1500_.jpg",
        category: "Beauty & Personal Care",
        rating: {
            totalRatings: 75936,
            score: "4.4"
        },
        productDetails: {
            description: "Color:120 LIGHTPRODUCT DESCRIPTION\nThis dark circle eraser concealer instantly creates a radiant, refreshed looking eye area. Infused with goji berry and Haloxyl. Packaging may vary, what you receive may not be what is reflected on site. Instantly erases the appearance of dark circles and fine lines. Under eye concealer visibly diminishes the appearance of puffiness. Eye area looks radiant and refreshed. Anti-aging dark circle treatment contains goji berry and haloxyl to help erase appearance of dark circles and fine lines Step 1. Twist collar of the applicator until the concealer is visible on the sponge (may take some turns on first use). Step 2. Apply concealer to the under-eye area and blend. Step 3. For extreme dark circles, apply the Neutralizer under concealer. Step 4. To add luminosity, apply the Brightener to the inner corner of eyes, cheek, brow bones and bridge of the nose. The Dark Circles Eraser is protected by an anti-microbial system. Do not wet applicator. Wipe off excess eye concealer with dry tissue.",
            brand: "Maybelline New York"
        }
    },
    { //Beauty 7
        title: "Garnier SkinActive Clearly Brighter Anti-Puff Eye Roller, 0.5 Ounce 1 Count",
        price: 9.75,
        asin: "B001DPMETG",
        image: "https://m.media-amazon.com/images/I/61UgnY9+jBS._SL1500_.jpg",
        category: "Beauty & Personal Care",
        rating: {
            totalRatings: 7601,
            score: "4.4"
        },
        productDetails: {
            description: "Size: 1 Count This eye treatment formulated with Antioxidant Vitamin C, Mint, and Caffeine instantly cools and refreshes under-eye area. The micro-stimulating roll-on applicator helps de-puff and reduce the look of under-eye bags in just one use. For best results, use with the Clearly Brighter SPF 15 or SPF 30 Face Moisturizer with Vitamin C.\n\nEye treatment formulated with antioxidant Vitamin C, Mint and Caffeine that instantly cools and refreshes the under eye area\nThis eye roller reduces under-eye puffiness and has a cooling gel formula that brightens skin in just one use\nA hydrating eye treatment with a micro-stimulating, roll-on applicator that reduces the appearance of under-eye bags\nThis roll-on, hydrating eye cream and treatment will give your under-eye area visible results in just two weeks\nUse this hydrating eye treatment with antioxidant Vitamin C to reduce eye puffiness at home or on-the-go\n\n*In a consumer study. Want brighter, smoother skin in just one week? Try Garnier SkinActive’s Clearly Brighter, our antioxidant-powered range of expertly formulated skincare. From SPF protection to dark spot correction, reduced eye-puffiness to diminished dark circles, these targeted formulas meet your skincare needs. The following products are included in the Clearly Brighter range. The face scrub with Argan Nut gently exfoliates to brighten and deeply cleanse skin. This formula with sustainably-sourced argan nut shell, Vitamin C and a fruit acid blend, gently polishes and evens skin tone. The face moisturizers with SPF 15 and SPF 30 help reduce visible signs of sun damage including dark spots, age spots and discoloration. These face lotions improve skin’s texture and reduce wrinkles overtime. The fast-absorbing, non-greasy formulas include an antioxidant complex of Vitamin C and E and Lipo-Hydroxyl Acid (LHA). The dark spot treatments include a dark spot corrector and Vitamin C serum. These treatments even out skin tone and reduce the look of dark spots, age spots and discoloration. The anti-puff and anti-dark circle eye rollers reduce under-eye puffiness and visible bags. The targeted eye formulas include antioxidant Vitamin C, Mint and Caffeine.\n\n1. Cleanse skin with a Garnier SkinActive face wash for your skin type.2. Gently roll under the eye from the inner corner to the outer corner. Rub in excess until fully absorbed.3. For best results, follow by applying Garnier SkinActive Clearly Brighter SPF 15 or SPF 30 Face Moisturizer with Vitamin C to face and neck.\n\nFlammable until dry. Do not use near fire, flame or heat.",
            brand: "Garnier"
        }
    },
    { //Beauty 8
        title: "Goody Girls Ouchless Hair Elastics Perfect for Girls with Fine Hair, Curly Hair or Sensitive Scalps (60 Pieces) (Assorted in Brights and Pastels) 60 Count (Pack of 1)",
        price: 3.89,
        asin: "B00AWD0OOC",
        image: "https://m.media-amazon.com/images/I/91RVwyOHaML._SL1500_.jpg",
        category: "Beauty & Personal Care",
        rating: {
            totalRatings: 12777,
            score: "4.3"
        },
        productDetails: {
            description: "Size: 60 Count (Pack of 1) Goody 09425 Girls Ouchless Elastics in Bright Colors (60 Pieces); Perfect for Girls with Fine Hair, Curly Hair or Senstive Scalps - Key Features: Designed for great hold without sacrificing comfort - Perfect for girls with fine hair, curly hair or senstive scalps, and come in fun colors and sizes she'll love - Assorted Bright Colors",
            brand: "Goody"
        }
    },
    { //Beauty 9
        title: "Aveeno Baby Gentle Moisturizing Daily Care Set, Natural Oat Extract, Natural Colloidal Oatmeal, 2 Items",
        price: 12.10,
        asin: "B00BH0OSWI",
        image: "https://images-na.ssl-images-amazon.com/images/I/81aQaBeu5PL.jpg",
        category: "Beauty & Personal Care",
        rating: {
            totalRatings: 4153,
            score: "4.8"
        },
        productDetails: {
            description: "Aveeno Baby Daily Care Set features a gentle wash/shampoo and a moisturizing lotion specially designed for baby's delicate skin. The Aveeno Baby Wash & Shampoo with natural oat extract is a gentle, yet rich lathering wash designed for tear-free cleansing of both skin and hair. The allergy-tested formula is both soap-free and paraben-free. It rinses clean, leaving a soft, fresh fragrance. After bathing, soothe and moisturize baby's skin with Aveeno Baby Daily Moisture Lotion.",
            brand: "Johnson & Johnson"
        }
    },
    { //Clothes 1
        title: "Hurley Men's One and Only Textured Short Sleeve Button Up Small Black",
        price: 45.23,
        asin: "B08ZD8LKYK",
        image: "https://images-na.ssl-images-amazon.com/images/I/61SiLBS%2B5ML.jpg",
        category: "Clothes",
        rating: {
            totalRatings: 2413,
            score: "4.5"
        },
        productDetails: {
            description: "The Hurley one and only men's short sleeve shirt is made with pure cotton for all-day comfort and lasting wear.\n\nHurley One 남성용 반소매 셔츠는 순수한 면으로 제작되어 하루 종일 편안하고 오래 착용할 수 있습니다. * Item model number :895020 * Department :Mens * Manufacturer :Hurley Men's * Amazon Best Sellers Rank: #3,510 in Clothing, Shoes & Jewelry (See Top 100 in Clothing, Shoes & Jewelry)  *  #28 inMen's Casual Button-Down Shirts *  #822 inMen's Shops * Customer Reviews:4.5 out of 5 stars 2,413 ratings",
            brand: "Hurley Men's"
        }
    },
    { //Clothes 2
        title: "Alaster Women’s Casual Summer T Shirt Dress Loose Short Sleeve Tunic Dress with Pocket for Women A-black Striped Small",
        price: 23.99,
        asin: "B085ZMB9B2",
        image: "https://images-na.ssl-images-amazon.com/images/I/7160cSeSzML.jpg",
        category: "Clothes",
        rating: {
            totalRatings: 2486,
            score: "4.1"
        },
        productDetails: {
            description: "Department: Womens* Date First Available :March 17, 2020 * ASIN :B085ZMB9B2 * Amazon Best Sellers Rank: #157 in Clothing, Shoes & Jewelry (See Top 100 in Clothing, Shoes & Jewelry)  *  #91 in Women's Shops*  #7 in Women's Casual Dresses * Customer Reviews: 4.1 out of 5 stars 2,486 ratings",
            brand: "Alaster Queen"
        }
    },
    { //Clothes 3
        title: "QIXING Women's Summer Casual Loose Mini Dress V-Neck Bell Short Sleeve Shift Dress Small A01 Black",
        price: 32.99,
        asin: "B0852XHKWZ",
        image: "https://images-na.ssl-images-amazon.com/images/I/61CSrx8j4iL.jpg",
        category: "Clothes",
        rating: {
            totalRatings: 1296,
            score: "4.1"
        },
        productDetails: {
            description: "Department: Womens * Date First Available: February 24, 2020 * ASIN :B0852XHKWZ * Amazon Best Sellers Rank: #5,297 in Clothing, Shoes & Jewelry (See Top 100 in Clothing, Shoes & Jewelry)  *  #3224 in Women's Shops *  #207 in Women's Casual Dresses * Customer Reviews: 4.1 out of 5 stars 1,296 ratings",
            brand: "QIXING"
        }
    },
    { //Clothes 4
        title: "jijamas Incredibly Soft Pima Cotton Women's Pajamas Set - The Restful Night Grey Slate Small",
        price: 99.00,
        asin: "B07X36KBWZ",
        image: "https://images-na.ssl-images-amazon.com/images/I/71a45lnW7vL.jpg",
        category: "Clothes",
        rating: {
            totalRatings: 137,
            score: "4.6"
        },
        productDetails: {
            description: "Department: Womens * Date First Available: August 29, 2019 * ASIN: B07X36KBWZ * Amazon Best Sellers Rank: #191,068 in Clothing, Shoes & Jewelry (See Top 100 in Clothing, Shoes & Jewelry)  *  #90326 inWomen's Shops *  #1336 in Women's Pajama Sets * Customer Reviews: 4.6 out of 5 stars 137 ratings",
            brand: "jijamas"
        }
    },
    { //Clothes 5
        title: "Amazon Brand - Goodthreads Men's Soft Cotton Short-Sleeve Crewneck Pocket T-Shirt X-Small Vintage White (Cream)",
        price: 15.90,
        asin: "B07HMZ3J92",
        image: "https://images-na.ssl-images-amazon.com/images/I/71z4Toym4WL.jpg",
        category: "Clothes",
        rating: {
            totalRatings: 2576,
            score: "4.4"
        },
        productDetails: {
            description: "An Amazon brand - Great for layering or wearing alone, this smooth cotton T-shirt features a ribbed crew-neck and short sleeves. Made in our Signature Tumbled Cotton for a soft, yet sturdy, hand. We utilize a unique Heritage Wash to give our garments a custom, lived-in feel right away\n\nGoodthreads' collection of men's clothing crafted with care takes wear-everywhere apparel to the next level. Create can't-miss pairings with long- and short-sleeve button-down shirts in standard and slim fits, plus chino pants and shorts made from wrinkle-free non-iron fabric. With these classics-and T-shirts, polo shirts, and outerwear to round out your look-Goodthreads is your go-to for wardrobe staples with the style you want",
            brand: "Good Threads"
        }
    },
    { //Clothes 6
        title: "Hanes Men's Comfortwash Garment Dyed Fleece Sweatshirt Small Anchor Slate",
        price: 14.56,
        asin: "B086LJX84J",
        image: "https://images-na.ssl-images-amazon.com/images/I/91lHoiqDkYL.jpg",
        category: "Clothes",
        rating: {
            totalRatings: 10558,
            score: "4.7"
        },
        productDetails: {
            description: "Part of the new Hanes comfort wash collection, this vintage washed, garment dyed sweatshirt feels as good as it looks * Item model number :OGD400 * Department: Mens * Date First Available: July 11, 2019 * Manufacturer: Hanes * ASIN: B086LJX84J * Amazon Best Sellers Rank: #1,103 in Clothing, Shoes & Jewelry (See Top 100 in Clothing, Shoes & Jewelry)  *  #306 in Men's Shops *  #7 in Men's Sweatshirts * Customer Reviews: 4.7 out of 5 stars 10,558 ratings",
            brand: "Hanes"
        }
    },
    { //Clothes 7
        title: "adidas Boys' Tricot Jogger Pant 2T Iconic Black",
        price: 22.50,
        asin: "B07DGSKM7D",
        image: "https://images-na.ssl-images-amazon.com/images/I/71DrdZ9HlhL.jpg",
        category: "Clothes",
        rating: {
            totalRatings: 10092,
            score: "4.7"
        },
        productDetails: {
            description: "The core tricot jogger features draw cord at waist band, on seam pockets and rib cuffs. Applied stripes Embroidered linear Adidas brand mark on left leg. Fit guide - Without shoes, stand child with feet slightly apart and their backs to the wall. Measure from the floor to the top of their head for height",
            brand: "Adidas"
        }
    },
    { //Clothes 8
        title: "PajamaGram Soft Fleece Pajamas Women - Womens Pajama Sets Medium Heathered Navy",
        price: 59.99,
        asin: "B074XH995Y",
        image: "https://images-na.ssl-images-amazon.com/images/I/71hJbogcDpL.jpg",
        category: "Clothes",
        rating: {
            totalRatings: 2607,
            score: "4.5"
        },
        productDetails: {
            description: "Package Dimensions: 15 x 12 x 0.5 inches * Item model number: GAMV03272 * Department: Womens * Date First Available: August 18, 2017 * Manufacturer: PajamaGram * ASIN: B074XH995Y * Amazon Best Sellers Rank: #179,221 in Clothing, Shoes & Jewelry (See Top 100 in Clothing, Shoes & Jewelry)  *  #1257 in Women's Pajama Sets * Customer Reviews: 4.5 out of 5 stars 2,607 ratings",
            brand: "PajamaGram"
        }
    },
    { //Clothes 9
        title: "Nipogear Women's Winter Warm Coat Hoodie Parkas Overcoat Fleece Outwear Jacket with Drawstring blue X-Small",
        price: 18.99,
        asin: "B08TVF5DCN",
        image: "https://images-na.ssl-images-amazon.com/images/I/81jXXJvhNzL.jpg",
        category: "Clothes",
        rating: {
            totalRatings: 353,
            score: "4.1"
        },
        productDetails: {
            description: "Department: Womens * Date First Available: January 24, 2021 * ASIN: B08TVF5DCN * Amazon Best Sellers Rank: #170,368 in Clothing, Shoes & Jewelry (See Top 100 in Clothing, Shoes & Jewelry)  *  #81143 inWomen's Shops *  #21 inWomen's Wool & Pea Coats * Customer Reviews: 4.1 out of 5 stars 353 ratings",
            brand: "Nipogear"
        }
    },
    { //Food 1
        title: "Daiya Dairy Free Cheese Slices, Cheddar, 7.8 oz",
        price: 3.90,
        asin: "B00EHJUWAS",
        image: "https://images-na.ssl-images-amazon.com/images/I/81DhQSyK4NL.jpg",
        category: "Food",
        rating: {
            totalRatings: 2820,
            score: "4.5"
        },
        productDetails: {
            description: "We focus on people's favorite ways to enjoy cheese with our delicious dairy-free cheese alternatives. We've created Shreds, Wedges, Slices, Cream Cheese Style Spreads and Pizzas. All Daiya products are free of three of the most common allergens: dairy (casein, whey and lactose), soy and gluten. But what they do contain is creaminess, flavor and savory goodness.",
            brand: "AmazonFresh"
        }
    },
    { //Food 2
        title: "Dave's Killer Bread 21 Whole Grains & Seeds Bun 8Count, 17.6 Oz",
        price: 6.32,
        asin: "B083XTQNYM",
        image: "https://images-na.ssl-images-amazon.com/images/I/81PR0MybD0L.jpg",
        category: "Food",
        rating: {
            totalRatings: 2248,
            score: "4.8"
        },
        productDetails: {
            description: "Our #1 selling Organic bread turned into a killer burger bun. Packed with nutrition, plus the killer taste & texture you expect from dkb!",
            brand: "Dave's Killer Bread"
        }
    },
    { //Food 3
        title: "Violife, Cheese Alternative Colby Jack Shreds, 7.5 Ounce",
        price: 2.43,
        asin: "B084GX2M8W",
        image: "https://images-na.ssl-images-amazon.com/images/I/91XhYURMiqL.jpg",
        category: "Food",
        rating: {
            totalRatings: 2442,
            score: "4.6"
        },
        productDetails: {
            description: "Grocery Dairy",
            brand: "Violife"
        }
    },
    { //Food 4
        title: "GoGo SqueeZ Applesauce, Variety Pack (Apple/Banana/Strawberry), 3.2 Ounce (20 Pouches), Gluten Free, Vegan Friendly, Unsweetened, Recloseable BPA Free Pouches Apple Banana Strawberry",
        price: 6.32,
        asin: "B07C2SY9G9",
        image: "https://m.media-amazon.com/images/I/81p3W-xV7HL._SL1500_.jpg",
        category: "Food",
        rating: {
            totalRatings: 23512,
            score: "4.8"
        },
        productDetails: {
            description: "Flavor Name: Apple Banana StrawberryAt GoGo squeeZ, our mission is to make it easier for kids and families to be healthier and happier everyday. We’re proud to be the leading squeezable, re-closable, pouch made from 100% fruit. Our products are crafted with high-quality, delicious ingredients to provide wholesome nutrition for squeeZing and enjoying wherever life takes you. With over 20 varieties of fruit, fruit and veggie, yogurt, and smoothie pouches on the go, plus GoGo squeeZ happy tummieZ and GoGo Big squeeZ, we provide the fuel kids need to explore, play, and just be kids.",
            brand: "GoGo Squeez"
        }
    },
    { //Food 5
        title: "Quaker Bars Granola Bars 5 Flavor 58ct, Chewy & Dipps Variety Pack, 58 Count",
        price: 7.12,
        asin: "B084GX2M8W",
        image: "https://m.media-amazon.com/images/I/81eCDpdoKbS._SL1500_.jpg",
        category: "Food",
        rating: {
            totalRatings: 50706,
            score: "4.7"
        },
        productDetails: {
            description: "Flavor:Chewy & Dipps Variety PackQuaker Chewy and Dipps granola bars contain 8 grams of whole grain and have no high-fructose corn syrup, making these granola bars a tasty treat. This new Chewy and Dipps variety pack includes 12 chocolate chip, 12 peanut butter chocolate chip, and 10 s'mores flavor Chewy granola bars, plus 12 chocolate chip and 12 peanut butter flavor Chewy Dipps chocolate covered granola bars. These bars are individually wrapped for you to enjoy at home, at school, or on the go.",
            brand: "Quaker"
        }
    },
    { //Food 6
        title: "Other Foods Low Carb Almond Flour Bread Mix, Gluten-free Paleo Friendly Baking Mix - Easy to Bake - 100% Grain Free, Dairy Free, Corn Free, No Refined Sugar or Soy (Almond, Single) Almond 8.68 Ounce (Pack of 1)",
        price: 10.32,
        asin: "B087QTLW1R",
        image: "https://m.media-amazon.com/images/I/71RrMoS5efL._SL1500_.jpg",
        category: "Food",
        rating: {
            totalRatings: 168,
            score: "4.3"
        },
        productDetails: {
            description: "ENJOY FRESH DELICIOUS GLUTEN-FREE, low carb almond bread. Our premium paleo friendly baking mix is 100% FREE from grains, corn, soy, sugar, dairy, xanthan (gum) and nightshades. CERTIFIED Gluten-free",
            brand: "Other Foods"
        }
    },
    { //Food 7
        title: "Mr Bing Chili Crisp - Delicious & Flavorful Chili Oil- Made in USA Chili Paste Hot Sauce - Gluten Free, Vegan, No MSG - Medium Heat (7 oz.)",
        price: 5.74,
        asin: "B08PSLLPJH",
        image: "https://images-na.ssl-images-amazon.com/images/I/71lXw7WCvTL.jpg",
        category: "Food",
        rating: {
            totalRatings: 48,
            score: "4.4"
        },
        productDetails: {
            description: "Mr Bing Chili Crisp brings tremendous flavor to ANY dish you add it to and once you try it, you will want to put it on everything!",
            brand: "Mr.Bing Chili"
        }
    },
    { //Food 8
        title: "SKITTLES & STARBURST Halloween Candy Fun Size Variety Mix, 39.1-Ounce Bag 90 Pieces",
        price: 5.29,
        asin: "B01MZGXPY2",
        image: "https://images-na.ssl-images-amazon.com/images/I/71PNfGRCZQL._SL1000_.jpg",
        category: "Food",
        rating: {
            totalRatings: 199,
            score: "4.7"
        },
        productDetails: {
            description: "This 90-piece bulk candy pack includes Fun Size SKITTLES Original and STARBURST Original",
            brand: "Wrigley's"
        }
    },
    { //Food 9
        title: "Now & Later Morphs Mixed Fruit Chews, 3.5 Ounce, 12 Count",
        price: 3.23,
        asin: "B07YVXWMT6",
        image: "https://images-na.ssl-images-amazon.com/images/I/61rwryRn2WL.jpg",
        category: "Food",
        rating: {
            totalRatings: 95,
            score: "3.6"
        },
        productDetails: {
            description: "Morphs is a flavor changing chew that as you chew it changes from one flavor to a completely new one. The morphs are flavored mango-cherry, strawberry-lemon lime, grape-watermelon, and blue Raspberry-Lemon. Each case of pegs has 12 counts of 4 ounces each.",
            brand: "Now and Later"
        }
    },
    { //Home Decor 1
        title: "SureFit Home Décor SF46969 Essential Twill T-Cushion Wingback Chair Slipcover, Relaxed Fit, 100 Percent Cotton, Machine Washable One Piece White Color",
        price: 42.00,
        asin: "B07B3YDLK2",
        image: "https://images-na.ssl-images-amazon.com/images/I/61tTNe5HQlL.jpg",
        category: "Home Decor",
        rating: {
            totalRatings: 265,
            score: "3.9"
        },
        productDetails: {
            description: "SLIPCOVER: Dainty ruffles add a little bit of interest to this classic slipcover style The Scotchgard treatment option makes it practical too and make it the ideal addition for high traffic family rooms thanks to the extra stain, moisture, and wear resistance Featuring corded arms and adjustable ties",
            brand: "SureFit Home Décor"
        }
    },
    { //Home Decor 2
        title: "IRONCK Industrial Shelving Pipe Shelf 3-Tier, Planks Included, Rustic Home Decor Wall Decor, Wall Shelves for Bedroom, Bathroom, Kitchen 3-shelf",
        price: 40.00,
        asin: "B08DD2F7SX",
        image: "https://m.media-amazon.com/images/I/81+JPWhTZrL._AC_SL1500_.jpg",
        category: "Home Decor",
        rating: {
            totalRatings: 237,
            score: "4.7"
        },
        productDetails: {
            description: "Durable & Solid Wall Shelf - Constructed with thickened pipe metal and hard durable P2 grade MDF board. High-quality materials and design bring you a really high quality wall shelf.",
            brand: "IRONCK"
        }
    },
    { //Home Decor 3
        title: "Welcome Sign for Front Door 72inch Front Porch Home Decor Indoor Outdoor Wood Sign, Vertical, White",
        price: 69.99,
        asin: "B08CVBT4JS",
        image: "https://m.media-amazon.com/images/I/71f6WuFMUJL._AC_SL1000_.jpg",
        category: "Home Decor",
        rating: {
            totalRatings: 246,
            score: "4.4"
        },
        productDetails: {
            description: "Color: White DQ HOME DECOR started business since 2014, focused on Seasonal Décor, Home Décor, Garden Decor and Accent Furniture. Our mission is to create decors that will bring Love, Joy and Happiness to you and your family and friends. Our signs create a beautiful bold statement of love and a warm inviting feeling to friends and family. It’s a perfect home decoration to your home or send as a gift to a friend or family member. Our beautiful rustic WELCOME sign is the perfect touch of farmhouse and chic decor that you have been looking for. Our quality signs are the ideal way to welcome your family, friends and neighbors to your beautiful home. Our rustic welcome signs are handmade, hand-cut and hand-painted. Each sign is unique, so that yours will be the only one exactly like it. We start with a premium pine board that is 72 in. X 9.5 in. X 1.125 in. We carefully stain the wood and let the wood sit to cure. Depending on your color choice, the wood is then hand-distressed or painted with the BEST exterior paint. Our hand-painted distressed black letters make a stunning welcome sign for all your friends, family and neighbors. Our sign works all year or for specific seasons like spring or fall decor beautifully. It’s a beautiful front porch decor for your home.\n✔HAND PAINTED on letters, NOT VINYL STICKERS SO LETTERS WILL NOT CURL WITH AGE and NOT SPRAY PAINTED, SO YOU DON'T GET THE FUZZY EDGES. SPACING & CENTERING ACCURACY: NEW AND IMPROVED FOR 2020! Distressed look but Quality Product, stained on front AND back. Foldable Function, save space and easy for transportation and storage.Our product is a great addition to your modern farmhouse decor collection. Complimented nicely if you have blanket ladders, wreaths, window frames, mason jars or wooden centerpieces in the home. And if you don't, this is a great place to start!",
            brand: "DQ Home Decor"
        }
    },
    { //Home Decor 4
        title: "Wooden Mail and Key Holder for Wall Decorative, Rustic Wall Mounted Mail Organizer with 8 Key Hooks and 1 Mail Sorter, Rustic Wood Mail Sorter Key Holder, Home Decor and Storage for Entryway, Hallway Black",
        price: 18.99,
        asin: "B08XLQKCXX",
        image: "https://m.media-amazon.com/images/I/81zmDDVeJhS._AC_SL1500_.jpg",
        category: "Home Decor",
        rating: {
            totalRatings: 0,
            score: "0"
        },
        productDetails: {
            description: "Color: Black color wood and silver color metal hooks Material: 100 % eco - friendly solid paulownia wood and metal hooks Packaging including: A fully assembled key holder for wall; 2 anchors and 2 screws; 1 spare double hook YOU WILL GET WHAT YOU PAY FOR This wall mail sorter organizer is great for entryway space organizing and wall decorative.Perfect size to build on wall in entrance, hallway, foyer, closet, mudroom, kitchens, laundry/ utility rooms, garages, offices and more.\n\nGreat for holding and sorting in-going or out- going mail, organizing letters, bills, catalogs, magazines, keys, leashes, hats, umbrellas, wallet, accessories and more.The rustic design will add a touch of style to your storage and complement your home decor.",
            brand: "PICKKROSS"
        }
    },
    { //Home Decor 5
        title: "Flameless Led Candles Flickering, Yinuo Candle Real Wax Fake Wick Moving Flame Faux Wickless Pillar Battery Operated Candles with Timer Remote Glass Effect for Festival Wedding Home Party Decor Grey",
        price: 26.99,
        asin: "B08CVSRW3S",
        image: "https://m.media-amazon.com/images/I/51CA1+SVwdL._AC_SL1000_.jpg",
        category: "Home Decor",
        rating: {
            totalRatings: 3213,
            score: "4.7"
        },
        productDetails: {
            description: "Flickering flame technology. Creates the illusion of real flames. Using 3 high grade aa batteries can provide more than 150 hours of continuous ambience.",
            brand: "Yinuo Candle"
        }
    },
    { //Home Decor 6
        title: "Inspire Me! Home Décor Jessica Ottoman Bench with Storage Organizing Dividers, Classy Sand Shell Soft Velvet, 42 x 16 x 17 in, Glamorous Tufted Design, Comfortable Seating, Hidden Storage Sand Shell W/ Brushed Brass",
        price: 230.59,
        asin: "B08KYKXP9Z",
        image: "https://m.media-amazon.com/images/I/611ZSm0iPQL._AC_SL1500_.jpg",
        category: "Home Decor",
        rating: {
            totalRatings: 53,
            score: "4.2"
        },
        productDetails: {
            description: "Color: Sand Shell W/ Brushed BrassThe Inspire Me! Home Décor Jessica Ottoman Bench features soft velvet upholstery and dividers inside for great storage. It provides comfortable seating for your family members and guests and allows you to keep your items stored neatly inside simultaneously. Measuring 42 x 16 x 17 in, this bench provides ample room for hidden storage. Moreover, the dividers allow you to declutter and keep organized. These three compartments be used for remote controls, toys, wires, video games, magazines, and other items. This Jessica Bench features a metal base in brushed brass, instantly adding a modern and subtly glamorous touch to your space. Perfect for your living room or at the end of your bed. Assembly is quick and easy. When not in use, it folds down into a smaller size so that you can always maximize your space according to your needs. Fantastic for your own space and also great as a housewarming gift because of its versatility and usefulness. We care deeply about the home experience and creating beautiful and functional spaces, so if, for any reason, you are not completely happy with your product, please contact us and we will be happy to assist you.",
            brand: "Inspire Me! Home Décor"
        }
    },
    { //Home Decor 7
        title: "South Shore Maliza Bar Cart Bottle Storage and Wine Glass Rack-Faux Marble and Black",
        price: 162.56,
        asin: "B081TSCS8Y",
        image: "https://images-na.ssl-images-amazon.com/images/I/81upOxeBi9L.jpg",
        category: "Home Decor",
        rating: {
            totalRatings: 49,
            score: "4.7"
        },
        productDetails: {
            description: "The ideal look and configuration for partying. This bar cart will be your best friend during those fun nights with friends! Its glam look, achieved through the contrast between its marble styled surface and metal structure, is sure to be noticed and it’ll help create a festive atmosphere at your parties! Aside from the three shelves, you also get 12 spaces for your wine bottles and 18 spaces for your glasses. Cheers! A water resistant surface No risk of damage, even if you run into trouble when making your favorite cocktails! The three MDF shelves on this cart are covered in water resistant vinyl that protects them from potential accidents. You also have access to two towel holders to repair any damage… and they make it easier to move the cart if you need to. Easy to move Wherever the party is happening – in the kitchen or the living room – you can take this bar cart with you! It’s fitted with 4 wheels that let you move it anywhere you need to go. Two brakes were also added, to ensure even more stability once the cart is in place. 1-year limited guarantee South Shore is proud to stand behind this bar cart with an exclusive 1-year limited guarantee. Shop with confidence knowing your purchase is always covered. All our products meets or exceeds North American safety standards and our packaging are tested and certified to reduce the risk of damage during shipment. This item is shipped in 1 box, make sure to have a friend with you.",
            brand: "South Shore"
        }
    },
    { //Home Decor 8
        title: "Unbreakable Vases for Flowers, HASPINH Geometric Plastic Vases Minimalist Style Ceramic Look, Vase for for Home Decor, Living Room, Table White",
        price: 9.88,
        asin: "B08YRVCJ19",
        image: "https://images-na.ssl-images-amazon.com/images/I/612MIRf7VOL.jpg",
        category: "Home Decor",
        rating: {
            totalRatings: 0,
            score: "0"
        },
        productDetails: {
            description: "High quality & environmentally friendly materials --- Durable and unbreakable plastic. Never fade and out of fasion. Vase with flowers decorates modern home and you can enjoy a healthy life!",
            brand: "HASPINH"
        }
    },
    { //Home Decor 9
        title: "Bambiso Large and Tall Jute and Cotton Rope Basket Woven Storage Basket, Natural Jute Laundry Basket, Blanket Basket, Yoga Mat Basket, Home Decor Basket (Large and Tall)",
        price: 29.99,
        asin: "B08D119FPM",
        image: "https://m.media-amazon.com/images/I/81oFx+CDc1L._AC_SL1500_.jpg",
        category: "Home Decor",
        rating: {
            totalRatings: 10,
            score: "4.7"
        },
        productDetails: {
            description: "REINFORCED HANDLES FOR EASY CARRYING - When it comes to portable storage you need something that's both strong enough to hold a wide range of contents, and easy to carry around your house, or up and down the stairs. That's why we've reinforced the handles of this woven basket to be tough, durable and easy to handle. All while being super safe for your little ones.",
            brand: "Bambiso"
        }
    },
    { //Tech 1
        title: "VEAVON V8 Robot Vacuum Cleaner with Wi-Fi Connected, 4000Pa Strong Suction Lidar Robotic Vacuum Cleaner, Automatic Vacuum and Mop Cleaner, Mapping Technology, No-mop Zones, Virtual Walls, Black",
        price: 399.99,
        asin: "B08X6FLMR2",
        image: "https://images-na.ssl-images-amazon.com/images/I/71U14K8FolS.jpg",
        category: "Technology",
        rating: {
            totalRatings: 12,
            score: "5.0"
        },
        productDetails: {
            description: "Laser Navigation, Multi-Level Mapping, Virtual No-Go, and Virtual No-Mop Zones，Label Rooms, Set Cleaning Squence, choose different cleaning times, vacuum power, water flow level for different areas.",
            brand: "VEAVON"
        }
    },
    { //Tech 2
        title: "Ninja DZ201 Foodi 6-in-1 2-Basket Air Fryer with DualZone Technology, 8-Quart Capacity, and a Dark Grey Stainless Finish",
        price: 138.84,
        asin: "B089TQWJKK",
        image: "https://images-na.ssl-images-amazon.com/images/I/818JshAJY%2BL.jpg",
        category: "Technology",
        rating: {
            totalRatings: 3606,
            score: "4.8"
        },
        productDetails: {
            description: "The Ninja Foodi 6-in-1 8-qt. 2-Basket Air Fryer with Dual Zone Technology. The first air fryer with 2 independent baskets that let you cook 2 foods at once, not back-to-back like a traditional single-basket air fryer. Dual Zone Technology's Smart Finish feature intelligently manages to cook so both foods finish at the same time.",
            brand: "Ninja"
        }
    },
    { //Tech 3
        title: "BEAUTURAL Steamer for Clothes with Pump Steam Technology, Portable Handheld Garment Fabric Wrinkles Remover, 30s Fast Heat-up, Auto-Off, Large Detachable Water Tank Purple",
        price: 36.97,
        asin: "B08CXRBL92",
        image: "https://images-na.ssl-images-amazon.com/images/I/61Wp5YovGEL.jpg",
        category: "Technology",
        rating: {
            totalRatings: 16808,
            score: "4.5"
        },
        productDetails: {
            description: "Detachable 8.79-ounce water tank for 15 minutes of continuous steaming to remove wrinkles perfectly",
            brand: "BEAUTURAL"
        }
    },
    { //Tech 4
        title: "iHome AutoVac 2-in-1 Robot Vacuum + Mopping Enabled with Mapping HomeMap Navigation, 2000pa Suction Power, HyperDrive Technology for Pet Hair, Alexa/Google and App Control (Eclipse White)",
        price: 249.99,
        asin: "B08KHD15B2",
        image: "https://images-na.ssl-images-amazon.com/images/I/71T1bn6fc3L.jpg",
        category: "Technology",
        rating: {
            totalRatings: 130,
            score: "4.2"
        },
        productDetails: {
            description: "The iHome AutoVac Eclipse will Detect and Automatically Adjust its Settings depending on the Surface Type. Suitable for Low Pile Carpet, Tile, Wood and Laminate Flooring",
            brand: "iHome"
        }
    },
    { //Tech 5
        title: "QI-EU Wireless Charger, 4 in 1 Fast Wireless Charging Station Compatible with Apple Watch Airpods Pro iPhone 12/12 Pro/11/11 Pro/8/X, Wireless Charging Stand Compatible with Samsung Black",
        price: 23.99,
        asin: "B07YTHD64R",
        image: "https://m.media-amazon.com/images/I/71Io4FygngL._AC_SL1500_.jpg",
        category: "Technology",
        rating: {
            totalRatings: 24588,
            score: "4.3"
        },
        productDetails: {
            description: "Wireless charger compatible with Qi-Enabled Phones, iWatch,AirPods and Pencil can fast charging these devices wirelessly at the same time. High Quality power adapter (9V/2A) or other 10W support adapter is recommended for fast charging. Using a 5V / 1A adapter may not charge your phone or watch. (Adapter is not included)",
            brand: "QI-EU"
        }
    },
    { //Tech 6
        title: "ROBOQi 2-in-1 Magnetic Wireless Charging Stand Wireless Charging Station Dock Compatible with MagSafe Charger for iPhone 12/12 Mini/12 Pro/ 12 Pro Max, Airpods Pro/2",
        price: 59.99,
        asin: "B08RNWBHGW",
        image: "https://images-na.ssl-images-amazon.com/images/I/61vY5SfhyXS.jpg",
        category: "Technology",
        rating: {
            totalRatings: 67,
            score: "4.0"
        },
        productDetails: {
            description: "Charge your iPhone 12 series device and AirPods at the same time with ROBOQi 2-in-1 Wireless Charging Stand. Delivering 7.5W for iPhone 12 wireless charging and 2.5W for AirPods, you can get a power boost while getting ready in the morning or between meetings",
            brand: "ROBOQi"
        }
    },
    { //Tech 7
        title: "Apple iPhone X, 64GB, Space Gray - Fully Unlocked (Renewed) 64GB Space Gray Fully Unlocked Renewed",
        price: 317.00,
        asin: "B077578W38",
        image: "https://images-na.ssl-images-amazon.com/images/I/61gVPTl5N3L.jpg",
        category: "Technology",
        rating: {
            totalRatings: 10346,
            score: "4.3"
        },
        productDetails: {
            description: "Size:64GB | Color:Space Gray | Service Provider:Fully Unlocked | Product grade:RenewedApple iPhone X, 64GB, Space Gray - Fully Unlocked (Renewed)",
            brand: "Apple"
        }
    },
    { //Tech 8
        title: "Moto G Power | 2021 | 3-Day Battery | Unlocked | Made for US by Motorola | 4/64GB | 48MP Camera | Gray 64GB Moto G Power - 2021",
        price: 229.99,
        asin: "B08NWBY8YJ",
        image: "https://images-na.ssl-images-amazon.com/images/I/61jKxwxAZFL.jpg",
        category: "Technology",
        rating: {
            totalRatings: 9156,
            score: "4.6"
        },
        productDetails: {
            description: "Size:64GB | Style: Moto G Power - 2021 Want longer battery life and gorgeous photos? Get moto g power. With its 5000 mAh battery, you can go up to three days on a single charge. Enjoy that weekend getaway without ever worrying about recharging. moto g power packs a 48 MP triple camera system2, so you can capture stunning images in any light, everywhere you go. Want a better view on the move? Watch games, movies, and video chats come to life on an ultra-wide 6.6' screen. Want to lose that annoying lag? Get more done with a speedy processor. How about a phone that’s not afraid to get a little wet? No worries. Wanna capture more of life? You got it.",
            brand: "Motorola"
        }
    },
    { //Tech 9
        title: "Apple AirPods Pro",
        price: 197.00,
        asin: "B07ZPC9QD4",
        image: "https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL.jpg",
        category: "Technology",
        rating: {
            totalRatings: 191186,
            score: "4.8"
        },
        productDetails: {
            description: "Active noise cancellation for immersive sound. Transparency mode for hearing and connecting with the world around you",
            brand: "Apple"
        }
    },
    { //Pet Supplies 1
        title: "VetPro Complete Glucosamine for Dogs Hip & Joint Care - Maximum Strength Soft Chews with Chondroitin, MSM, Turmeric, Vitamin C, Omega 3 - Treats Hip Dysplasia, Arthritis, Pain - 120 Chicken Flavor",
        price: 34.95,
        asin: "B06Y5TR3S5",
        image: "https://images-na.ssl-images-amazon.com/images/I/81muqHLT0GL.jpg",
        category: "Pet Supplies",
        rating: {
            totalRatings: 1695,
            score: "4.5"
        },
        productDetails: {
            description: "VETERINARIAN FORMULATED - Formulated by Dr. Joseph, a veterinarian with over 30 years of experience relieving his patients from painful arthritis, stiff joints, joint damage, and hip dysplasia. This Glucosamine for Dogs unique formula's benefits also provides the key nutrients needed for heart, skin, coat, digestive, and liver health",
            brand: "VetPro Complete"
        }
    },
    { //Pet Supplies 2
        title: "HoppScotch.bun BUMBOX - Extra Large Rabbit Litter Box w/Plastic Grid & Dump Tray - Pet Waste Station w/Bunny Supplies Including Rabbit Cage Accessories - Cage Hooks for Corner Bunny Litter Pan",
        price: 42.99,
        asin: "B08S9NCGHV",
        image: "https://images-na.ssl-images-amazon.com/images/I/617Jjk8g2rL.jpg",
        category: "Pet Supplies",
        rating: {
            totalRatings: 2,
            score: "3.0"
        },
        productDetails: {
            description: "HoppScotch.bun's 2-Step BUMBOX Extra Large Rabbit Toilet *BRAND NEW* Our 2-Step BUMBOX rabbit toilet has been a focused product in our pet product research and development for easy-to-use adult rabbit litter boxes. They are equipped with heavy-duty material, wide enough for 6-15 lb. rabbit to lounge in comfortably. Your bunny will naturally attract toward the rabbit toilet, as they are naturally curious and territorial - add a small amount of rabbit's pellets in litter pan - Make Being a Bunny Parent Little Easier - Make the bumbox your rabbit's best friend and no more stepping on hard pellets and having smelly scatter every where. Finally, you and your bunny will agree on the same thing without causing your bunny to feel unnatural. Best of all, these extra large rabbit toilets fits in every livable cage for bunnies. Rabbits comfortably hide behind the walls of the toilet and lounge freely across the grid.\n\n2 Steps: Cleaning Guide - Separate Grid and Pan Halves & Dump Excess - Clean with hot, warm water & a little Dawn soap *dry* RECTANGLE DESIGN - With such deep pan, you can fill base with paper bedding, pads, or any of your choice of bedding without spillage. You can trust that your bumbox will stay in place with the cage hooks that can be applied to any wire cage of minimum 3' wide. Cage hooks are included. Specifications: Includes: One XL 2-Step BUMBOX Rabbit Toilet - Baby Blue with cage hooks - Heavy-Duty Plastic Grid to Prevent Sore Hocks and Improve Foot Comfortability",
            brand: "HoppScotch.bun"
        }
    },
    { //Pet Supplies 3
        title: "Compostable Dog Poop Bags | 10% to Charity | Biodegradable Vegetable Based | Eco and Earth Friendly Disposable Doggie Waste Baggies | Leakproof and Zero Odor Green Pet Supplies | Easy Compost Disposal 240 Bags",
        price: 21.99,
        asin: "B08GKBWFGZ",
        image: "https://images-na.ssl-images-amazon.com/images/I/81LQBhqCvML.jpg",
        category: "Pet Supplies",
        rating: {
            totalRatings: 2302,
            score: "4.9"
        },
        productDetails: {
            description: "Size: 240 BagsCompostable Dog Poop Bags | 10% to Charity | Biodegradable Vegetable Based | Eco and Earth Friendly Disposable Doggie Waste Baggies | Leakproof and Zero Odor Green Pet Supplies | Easy Compost Disposal",
            brand: "Give A Sh - Eco Friendly Pet Products"
        }
    },
    { //Pet Supplies 4
        title: "Yicostar Dog Water Bottle, 12OZ-19OZ Portable Pet Water Bottle for Walking Leak Proof Puppy Dog Water Dispenser for Outdoor, Travel, Hiking 19oz Mint Green",
        price: 17.99,
        asin: "B088YHKDCT",
        image: "https://images-na.ssl-images-amazon.com/images/I/61NcT9l6KxL.jpg",
        category: "Pet Supplies",
        rating: {
            totalRatings: 26,
            score: "4.7"
        },
        productDetails: {
            description: "Size: 19oz | Color: Mint GreenYicostar Dog Water Bottle, A Perfect Dog Water Dispenser for Drinking Water On the Go! Features: No water waste, if your dog doesn’t finish the water, simply press the button and tilt back, and the water will flow back into the bottle, no waste. 12oz and large 19oz capacity, mint, pink, blue colors available, you could pick one per your request. The silica gel seal ring and the lock feature to prevent the button from accidentally getting pressed so water doesn’t leak out. Perfect for when you take your dog walking, traveling, hiking, camping or everywhere your dog goes with you. Perfect for small, medium, large sized dog, and don’t worry about wasting water. A great one-handed solution to keeping your pet cool on the go. Durable and safe material, BPA free. Easy to use and convenient, with the strap you could tie it to your purse while walking so that you don’t have to worry about holding it. Ideal gift to your dog friends and family member. Kindly Note: Keep the bottle away from hot water or any drinks over 176℉/80℃. Don’t put it in dishwasher or microwave. Don’t press the button hard when lock key is locking. Don’t fill bottle with dry ice, chocolate, soda, milk or other milk drink. Specifications: Product Name: Dog Water Bottle for Walking Capacity: 12oz(350ml), 19oz(550ml)",
            brand: "YicoStar"
        }
    },
    { //Pet Supplies 5
        title: "ANGRY ORANGE Ready-to-Use Citrus Pet Odor Eliminator Pet Spray - Urine Remover and Carpet Deodorizer for Dogs and Cats 24 oz",
        price: 20.97,
        asin: "B07N316V8C",
        image: "https://images-na.ssl-images-amazon.com/images/I/71V6BCP7wxL.jpg",
        category: "Pet Supplies",
        rating: {
            totalRatings: 38678,
            score: "4.4"
        },
        productDetails: {
            description: "URINE ODOR REMOVER SOLUTION: Our formula smells like fresh oranges because it is MADE from oranges!",
            brand: "Chempace Corporation"
        }
    },
    { //Pet Supplies 6
        title: "Dexas MudBuster Portable Dog Paw Washer/ Paw Cleaner Light Gray Large with Lid",
        price: 26.04,
        asin: "B088JPC99D",
        image: "https://images-na.ssl-images-amazon.com/images/I/61NTLU4BtlL.jpg",
        category: "Pet Supplies",
        rating: {
            totalRatings: 31222,
            score: "4.4"
        },
        productDetails: {
            description: "Gentle silicone bristles remove dirt and mud from your dog's paws- keeping the mess in the MudBuster and not in your house or car",
            brand: "Dexas"
        }
    },
    { //Pet Supplies 7
        title: "JUNSPOW Cat Bed Dog Bed Pet Hammock Bed Free-Standing Cat Sleeping Cat Bed Cat Supplies Pet Supplies Whole Wash Stable Structure Detachable Excellent Breathability Easy Assembly Indoors Outdoors Gray",
        price: 28.99,
        asin: "B08CVQ6NCJ",
        image: "https://m.media-amazon.com/images/I/51ctj31OceL._AC_.jpg",
        category: "Pet Supplies",
        rating: {
            totalRatings: 539,
            score: "4.3"
        },
        productDetails: {
            description: "A cat hammock where cats can sleep with peace of mind. Cats especially like to sleep in tight spaces, and cats like high places. Designed to take advantage of the characteristics of cats, it is loved by many cats.",
            brand: "JUNSPOW"
        }
    },
    { //Pet Supplies 8
        title: "Veken Pet Fountain, 84oz/2.5L Automatic Cat Water Fountain Dog Water Dispenser with 3 Replacement Filters & 1 Silicone Mat for Cats, Dogs, Multiple Pets Blue",
        price: 26.99,
        asin: "B07DLXF7XL",
        image: "https://m.media-amazon.com/images/I/61KQhzEnZBL._AC_SL1500_.jpg",
        category: "Pet Supplies",
        rating: {
            totalRatings: 39820,
            score: "4.4"
        },
        productDetails: {
            description: "2.5L large capacity –  It has a water capacity of 2.5 liters (84 ounces), which means that it is great for small to medium sized pets. The circulation system helps provide healthy and hygienic water for beloved pets all day",
            brand: "Pet Water Fountain"
        }
    },
    { //Pet Supplies 9
        title: "Voyager Step-in Air Dog Harness - All Weather Mesh, Step in Vest Harness for Small and Medium Dogs by Best Pet Supplies Pink (Matching Trim)",
        price: 13.99,
        asin: "B08CCGNBVY",
        image: "https://m.media-amazon.com/images/I/71-cUGC8rXL._AC_SL1500_.jpg",
        category: "Pet Supplies",
        rating: {
            totalRatings: 76175,
            score: "4.6"
        },
        productDetails: {
            description: "ALL WEATHER MESH: Made with a soft, breathable air mesh, this lightweight pet harness is perfect for walks all year round",
            brand: "Voyager"
        }
    }
]

/*
const ItemSchema = new Schema({
    title: String,
    price: Number,
    asin: String,
    image: String,
    category: String,
    rating: {
        totalRatings: String,
        score: String
    },
    productDetails: {
        description: String
        weight: String,
        brand: String
    }
})
*/
