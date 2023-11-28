import Image from "next/image";
import Link from "next/link";


async function getCollectionData() {
  const res = await fetch("http://localhost:3000/api/category");
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

async function CollectionPage () {
  const collections = await getCollectionData()
  const imageURLs = [
    {
      category_id: 1,
      url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/cd_a_neatly_arranged_photo_of_mens_clothes_t-shirt_gray_hoodie__c5a4ebe4-ccb1-4d94-ae56-a1b33b4e71d9_1.png?v=1675456349",
    },
    {
      category_id: 2,
      url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/cd_a_neatly_arranged_photo_of_womens_clothes_t-shirt_yoga_pants_1f41a422-4293-4b40-b986-8d514fb2041c_1.png?v=1675456116",
    },
    {
      category_id: 3,
      url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/cd_three_pairs_of_neatly_arranged_men_and_womens_running_shoes._f4121e54-2c8a-4ad2-b366-355c0cc4348d_7.png?v=1675467965"
    },
    {
      category_id: 4,
      url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/cd_three_pairs_of_neatly_arranged_men_and_womens_running_shoes._f4121e54-2c8a-4ad2-b366-355c0cc4348d_6.png?v=1675467128"
    },
    {
      category_id: 5,
      url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/cd_three_pairs_of_neatly_arranged_men_and_womens_running_shoes._f4121e54-2c8a-4ad2-b366-355c0cc4348d_4.png?v=1675465297"
    }
  ]

  collections.forEach((category) => {
    const imageURL = imageURLs.find((image) => image.category_id === category.category_id); 
    const slug = category.name.toLowerCase().replace(/\s/g, '-');
    category.url = imageURL ? imageURL.url : ''; 
    category.slug = slug;
  });
      
  
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