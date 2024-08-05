import { useState } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dog, Heart, Bone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dog, Heart, Bone } from "lucide-react";

const popularBreeds = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "French Bulldog",
  "Bulldog",
];

const dogImages = [
  "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  "https://images.unsplash.com/photo-1561037404-61cd46aa615b",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
  "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6",
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <header className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Paw-some World of Dogs
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the joy and companionship of our furry friends
          </motion.p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-16 px-4">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Canines</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {dogImages.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={src} alt={`Dog ${index + 1}`} className="mx-auto object-cover w-full h-full rounded-lg" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Dog className="mr-2" /> Man's Best Friend
              </CardTitle>
              <CardDescription>Learn about our loyal companions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Dogs have been domesticated for thousands of years and are known for their loyalty, 
                companionship, and diverse breeds. They come in various sizes, shapes, and temperaments, 
                making them suitable for different lifestyles and purposes.
              </p>
              <Button 
                className="mt-4"
                onClick={() => setLikes(likes + 1)}
              >
                <Heart className="mr-2" /> Like ({likes})
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bone className="mr-2" /> Popular Dog Breeds
              </CardTitle>
              <CardDescription>Some of the most beloved dog breeds worldwide</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {popularBreeds.map((breed, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Dog className="mr-2 h-4 w-4" /> {breed}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;
