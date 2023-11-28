import Image from "next/image";
import Link from "next/link";


const CollectionPage = () => {
    const collections = [
        {
          name: "Men",
          description: "High-quality men's clothing, expertly designed to marry style with comfort. From elegantly tailored office wear to chic casual pieces perfect for a weekend getaway.",
          url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/cd_a_neatly_arranged_photo_of_mens_clothes_t-shirt_gray_hoodie__c5a4ebe4-ccb1-4d94-ae56-a1b33b4e71d9_1.png?v=1675456349",
          slug: "men",
        },
        {
          name: "Women",
          description: "High-quality women's clothing, expertly designed to marry style with comfort. From elegantly tailored office wear to chic casual pieces perfect for a weekend getaway.",
          url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/cd_a_neatly_arranged_photo_of_womens_clothes_t-shirt_yoga_pants_1f41a422-4293-4b40-b986-8d514fb2041c_1.png?v=1675456116",
          slug: "women",
        },
        {
          name: "Unisex",
          description: "High-quality unisex clothing, expertly designed to marry style with comfort. From elegantly tailored office wear to chic casual pieces perfect for a weekend getaway.",
          url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/cd_three_pairs_of_neatly_arranged_men_and_womens_running_shoes._f4121e54-2c8a-4ad2-b366-355c0cc4348d_7.png?v=1675467965",
          slug: "unisex",
        },
        {
          name: "Tops",
          description: "Our Tops collection offers a range of premium, organic cotton shirts and jackets. Each piece is designed with a minimalist aesthetic, ensuring you stay stylish while feeling comfortable.",
          url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/cd_three_pairs_of_neatly_arranged_men_and_womens_running_shoes._f4121e54-2c8a-4ad2-b366-355c0cc4348d_6.png?v=1675467128",
          slug: "tops",
        },
        {
          name: "Bottoms",
          description: "Our Bottoms collection offers a range of organic cotton pants and shorts. Experience the ultimate comfort and style, designed for both active and relaxed lifestyles.",
          url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/cd_three_pairs_of_neatly_arranged_men_and_womens_running_shoes._f4121e54-2c8a-4ad2-b366-355c0cc4348d_4.png?v=1675465297",
          slug: "bottoms",
        },
        {
          name: "Accessories",
          description: "",
          url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/cd_black_sport_bag_containing_sport_accessories_one_towel_one_w_ef3e1828-4bde-4d7f-a6bf-e7abae4961e8.png?v=1675462987",
          slug: "accessories",
        },
        {
          name: "Featured",
          description: "Discover the pinnacle of Liquid's athletic wear in our Featured collection. These pieces encapsulate our commitment to sustainable fashion, merging comfort, style, and eco-consciousness.",
          url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/banner-2.png?v=1675462488",
          slug: "featured",
        },
        {
          name: "Shoes",
          description: "Step into sustainable fashion with Liquid's Shoes collection. Crafted for comfort and style, our shoes are the perfect complement to your eco-conscious wardrobe.",
          url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/cd_three_pairs_of_neatly_arranged_men_and_womens_running_shoes._f4121e54-2c8a-4ad2-b366-355c0cc4348d_1.png?v=1675461870",
          slug: "shoes",
        },
      ];
      
      
    return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10">Collections</h1>
      <div className="mx-auto mb-12 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <div key={collection.slug} id='alink' className="transform transition duration-300 hover:scale-105 m-5">
              <Link href={`/collections/${collection.slug}`}>
                  <Image
                    src={collection.url}
                    alt={collection.name}
                    width={350} 
                    height={350}
                    style={{ objectFit: "cover", borderRadius: "1rem"  }} 
                  />
                  <h2 className="mt-4 text-xl font-semibold text-left">{collection.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
    )
}

export default CollectionPage