import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Icon } from "@/components/icon-mapper"
import { getRegistrationData } from "@/lib/data"

export default async function RegistrationPage() {
  const data = await getRegistrationData()

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="border-slate-700 text-slate-400 bg-slate-900/50 px-6 py-2 mb-8 font-medium backdrop-blur-sm"
          >
            Conference Registration
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">{data.title}</h1>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto font-medium">{data.description}</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {data.pricingTiers.map((tier: any, index: number) => (
            <Card
              key={index}
              className={`bg-slate-900/30 border-slate-800 backdrop-blur-sm ${
                tier.bestValue ? "border-white/20 relative" : ""
              }`}
            >
              {tier.bestValue && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-white text-slate-950 font-semibold px-4 py-1">Best Value</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-white text-center text-2xl tracking-tight">{tier.type}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-slate-400 mb-2">Academic</div>
                    <div className="text-4xl font-bold text-white">{tier.academic}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-slate-400 mb-2">Industry</div>
                    <div className="text-4xl font-bold text-white">{tier.industry}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-slate-400 mb-2">Student</div>
                    <div className="text-4xl font-bold text-white">{tier.student}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {tier.features.map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="flex items-start gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Registration Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Icon name="Users" className="w-6 h-6 text-slate-300" />
                </div>
                Registration Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-300 font-medium">
                    First Name
                  </Label>
                  <Input id="firstName" className="bg-slate-800 border-slate-700 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-300 font-medium">
                    Last Name
                  </Label>
                  <Input id="lastName" className="bg-slate-800 border-slate-700 text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300 font-medium">
                  Email Address
                </Label>
                <Input id="email" type="email" className="bg-slate-800 border-slate-700 text-white" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="affiliation" className="text-slate-300 font-medium">
                  Affiliation
                </Label>
                <Input id="affiliation" className="bg-slate-800 border-slate-700 text-white" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="registrationType" className="text-slate-300 font-medium">
                  Registration Type
                </Label>
                <Select>
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                    <SelectValue placeholder="Select registration type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="industry">Industry</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="text-slate-300 font-medium">
                  Country
                </Label>
                <Input id="country" className="bg-slate-800 border-slate-700 text-white" />
              </div>

              <div className="space-y-4">
                <Label className="text-slate-300 font-medium">Additional Options</Label>
                <div className="space-y-4">
                  {data.additionalOptions.map((option: any, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Checkbox id={option.id} />
                      <Label htmlFor={option.id} className="text-slate-300">
                        {option.label} (+€{option.price})
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                    <Icon name="CreditCard" className="w-6 h-6 text-slate-300" />
                  </div>
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber" className="text-slate-300 font-medium">
                    Card Number
                  </Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry" className="text-slate-300 font-medium">
                      Expiry Date
                    </Label>
                    <Input id="expiry" placeholder="MM/YY" className="bg-slate-800 border-slate-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv" className="text-slate-300 font-medium">
                      CVV
                    </Label>
                    <Input id="cvv" placeholder="123" className="bg-slate-800 border-slate-700 text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardName" className="text-slate-300 font-medium">
                    Cardholder Name
                  </Label>
                  <Input id="cardName" className="bg-slate-800 border-slate-700 text-white" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Registration Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-slate-300">
                  <span>Conference Registration</span>
                  <span>€450</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Conference Dinner</span>
                  <span>€75</span>
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <div className="flex justify-between text-white font-semibold text-xl">
                    <span>Total</span>
                    <span>€525</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              size="lg"
              className="w-full bg-white text-slate-950 hover:bg-slate-100 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              Complete Registration
            </Button>

            <div className="text-center text-slate-400">
              <p>Secure payment processing • Full refund available until July 1, 2026</p>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm mt-20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3 text-2xl">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                <Icon name="Calendar" className="w-6 h-6 text-slate-300" />
              </div>
              Important Information
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-12 text-slate-300">
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Registration Includes</h3>
              <ul className="space-y-3">
                {data.registrationIncludes.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Cancellation Policy</h3>
              <ul className="space-y-3">
                {data.cancellationPolicy.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
