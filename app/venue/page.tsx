import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/icon-mapper"
import Image from "next/image"
import { getVenueData } from "@/lib/data"

export default async function VenuePage() {
  const data = await getVenueData()

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="border-slate-700 text-slate-400 bg-slate-900/50 px-6 py-2 mb-8 font-medium backdrop-blur-sm"
          >
            Venue & Location
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">{data.title}</h1>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto font-medium">{data.description}</p>
        </div>

        {/* Hero Image */}
        <div className="mb-20 rounded-3xl overflow-hidden border border-slate-800">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Fez, Morocco"
            width={1200}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Icon name="MapPin" className="w-6 h-6 text-slate-300" />
                </div>
                Conference Venue
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">{data.venue.name}</h3>
                <p className="mb-6 leading-relaxed">{data.venue.description}</p>
                <div className="space-y-3">
                  {data.venue.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Icon name="Plane" className="w-6 h-6 text-slate-300" />
                </div>
                Getting to Fez
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">{data.travel.airport.name}</h3>
                <p className="mb-6 leading-relaxed">{data.travel.airport.description}</p>
                <div className="space-y-3">
                  {data.travel.airport.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Icon name="Hotel" className="w-6 h-6 text-slate-300" />
                </div>
                {data.accommodation.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-300">
              <p className="leading-relaxed">{data.accommodation.description}</p>
              <div className="space-y-4">
                {data.accommodation.hotels.map((hotel: any, index: number) => (
                  <div key={index} className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800">
                    <h4 className="text-white font-semibold text-lg">
                      {hotel.name} ({hotel.stars}★)
                    </h4>
                    <p className="text-slate-400 mb-2">{hotel.description}</p>
                    <p className="text-white font-medium">Special rate: {hotel.rate}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Icon name="Clock" className="w-6 h-6 text-slate-300" />
                </div>
                Practical Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-300">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Climate</h4>
                  <p>{data.practicalInfo.climate}</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Currency</h4>
                  <p>{data.practicalInfo.currency}</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Language</h4>
                  <p>{data.practicalInfo.language}</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Visa</h4>
                  <p>{data.practicalInfo.visa}</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Time Zone</h4>
                  <p>{data.practicalInfo.timezone}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Explore Fez</h2>
            <p className="text-slate-400 text-xl font-medium">
              Discover the rich cultural heritage of Morocco's spiritual capital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.attractions.map((attraction: any, index: number) => (
              <Card
                key={index}
                className="bg-slate-900/30 border-slate-800 hover:border-slate-700 transition-all duration-300 backdrop-blur-sm overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={attraction.image || "/placeholder.svg"}
                    alt={attraction.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">{attraction.name}</h3>
                  <p className="text-slate-400 leading-relaxed">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3 text-2xl">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                <Icon name="Utensils" className="w-6 h-6 text-slate-300" />
              </div>
              Culinary Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p className="mb-8 text-lg leading-relaxed">{data.culinary.description}</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg">Traditional Dishes</h4>
                <ul className="space-y-3">
                  {data.culinary.dishes.map((dish: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>{dish}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg">Local Experiences</h4>
                <ul className="space-y-3">
                  {data.culinary.experiences.map((experience: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>{experience}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
